const express = require('express');
const router = express.Router();
const Ticket = require('../schema/Ticket');

exports.getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id); 
    const submitter = ticket.Submitter.toString();
    
    
    if (submitter !== req.user.id && !req.user.perms.includes('Admin') && !req.user.perms.includes('SuperAdmin')) {
      return res.status(403).json({ error: 'Access denied!' });
    }    
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
   
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
exports.getAllTickets = async (req, res) => { //! this route should be restricted to admin users only
  try {
    if (!req.user.perms.includes('Admin') && !req.user.perms.includes('SuperAdmin')) {
      return res.status(403).json({ error: 'Access denied' });
    }
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.getOwnTickets = async (req, res) => {
    const userId = req.user.id;
    
  try {
    const tickets = await Ticket.find({ Submitter: userId });
    res.json(tickets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.amendTicket = async (req, res) => {//! Users should only be able to amend their own, and editing status should be restricted to admin users only
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    const submitter = ticket.Submitter.toString();
    if (submitter !== req.user.id && !req.user.perms.includes('Admin') && !req.user.perms.includes('SuperAdmin')) {
      return res.status(403).json({ error: 'Access denied!' });
    }

    if (req.body.Status && !req.user.perms.includes('Admin') && !req.user.perms.includes('SuperAdmin')) {
      return res.status(403).json({ error: 'Only Admins can change ticket status' });
    }

    Object.assign(ticket, req.body);
    await ticket.save();
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.deleteTicket = async (req, res) => { //! Tickets should not be deleted, but rather marked as resolved or closed. This is for record-keeping and auditing purposes. If deletion is necessary, ensure that only authorized users (e.g., Admins) can perform this action, and consider implementing a soft delete (e.g., setting a "deleted" flag) instead of permanently removing the ticket from the database.
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    const submitter = ticket.Submitter.toString();
    if (submitter !== req.user.id && !req.user.perms.includes('Admin') && !req.user.perms.includes('SuperAdmin')) {
      return res.status(403).json({ error: 'Access denied!' });
    }
    await ticket.remove();
    res.json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}   

