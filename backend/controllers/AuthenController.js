const bcrypt = require('bcrypt');
const User = require('../schema/User');
const jwt = require('jsonwebtoken');


exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const validPassword = bcrypt.compareSync(req.body.password, user.hashedpassword);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const payload = { id: user._id, email: user.email, perms: user.perms, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user: payload });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.logout = (req, res) => {
//   // In a real application, you would handle token invalidation here
//   res.json({ message: 'Logged out successfully' });
// };



exports.register = async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ email: req.body.email });
    if (userInDatabase) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const password = req.body.password;
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      hashedpassword: await bcrypt.hash(password, 10),
    });
    const payload = { id: user._id, email: user.email, perms: user.perms, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ user: payload, token });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

