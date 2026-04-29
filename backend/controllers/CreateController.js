import { version } from 'typescript';

const express = require('express');
const router = express.Router();


async function createUser(req, res) {
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
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createDept(req, res) {
  try {
    const deptInDatabase = await Dept.findOne({ name: req.body.name });
    if (deptInDatabase) {
      return res.status(400).json({ error: 'Department already exists' });
    }
    const dept = await Dept.create({
      name: req.body.name,
      description: req.body.description,
    });
    res.status(201).json(dept);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createSoftware(req, res) {
  try {
    const softwareInDatabase = await Software.findOne({ name: req.body.name });
    if (softwareInDatabase) {
      return res.status(400).json({ error: 'Software already exists' });
    }
    const software = await Software.create({
      name: req.body.name,
      description: req.body.description,
      dept: req.body.dept,
    });
    res.status(201).json(software);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createTicket(req, res) {
  try {
    const ticket = await Ticket.create({
      title: req.body.title,
      description: req.body.description,
      software: req.body.software,
      version: req.body.version,
    });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

router.post('/user', createUser);
router.post('/dept', createDept);
router.post('/software', createSoftware);
router.post('/ticket', createTicket);