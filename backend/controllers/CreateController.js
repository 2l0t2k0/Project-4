const express = require('express');
const router = express.Router();
const User = require('../schema/User');
const bcrypt = require('bcrypt');
const Dept = require('../schema/Dept');
const Software = require('../schema/Software');
const Ticket = require('../schema/Ticket');



exports.createUser = async (req, res) => {
  try {
    const userInDatebase = await User.findOne({ email: req.body.email });
      if (userInDatebase) {
        return res.status(400).json({ error: 'Email already exists' }); //note: this is a bad practice, we should not reveal if the email exists or not, but for testing purpose we can do it
      }
    const password = req.body.password;
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      hashedpassword: await bcrypt.hash(password, 10),
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.createDept = async (req, res) => {
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

exports.createSoftware = async (req, res) => {
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

exports.createTicket = async (req, res) =>   {
  try { 
    const user = req.user.id
    const dept = req.user.dept      
    const softwareinDatabase = await Software.findOne({ name: req.body.software });
    if (!softwareinDatabase) {
      await Software.create({
        name: req.body.software,
        description: 'This software was created automatically because it was not found in the database when creating a ticket.',
        dept: dept,
      },
      );
    }
    
    const softwareid = await Software.findOne({ name: req.body.software }).select('_id');
    const ticket = await Ticket.create({
      software: softwareid,
      Ticketreason: req.body.Ticketreason,
      reason: req.body.reason,
      Version: req.body.Version,
      URL: req.body.URL,
      Dept: dept,
      Submitter: user,  //this should be userid obtained from token
      Notes: req.body.Notes,
    });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

