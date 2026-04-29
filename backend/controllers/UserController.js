const express = require('express');
const router = express.Router();

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id).populate('Dept');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function getAllUsers(req, res) {
  try {
    const users = await User.find().populate('Dept');
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function EditUserDept(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
        Dept: req.body.Dept,
    }, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function DeleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

router.put('/:id', EditUserDept);
router.delete('/:id', DeleteUser);
router.get('/:id', getUser);
router.get('/', getAllUsers);

module.exports = router;