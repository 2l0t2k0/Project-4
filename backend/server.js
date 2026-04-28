const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const User = require('./schema/User');
const Dept = require('./schema/Dept');
const Software = require('./schema/Software');
const jwt = require('jsonwebtoken');


const port = 3000;

app.get('/user', (req, res) => {
  res.send('User endpoint');
});

app.post('/user', async (req, res) => {
  try { 
  const userInDatebase = await User.findOne({ email: req.body.email });
  if (userInDatebase) {
    return res.status(400).json({ error: 'Email already exists' }); //note: this is a bad practice, we should not reveal if the email exists or not, but for testing purpose we can do it
  }

  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  });

  res.status(201).json(user);
}
catch (err) {  res.status(500).json({ error: 'Failed to create user' });
}
});

app.get('/dept', (req, res) => {
  res.send('Dept endpoint');
});

app.get('/software', (req, res) => {
  res.send('Software endpoint');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 