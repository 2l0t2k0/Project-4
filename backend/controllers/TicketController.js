const express = require('express');
const router = express.Router();
const Ticket = require('../schema/Ticket');

exports.getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id); 
    const submitter = ticket.Submitter.toString();
    
    
    if (submitter !== req.user.id && !req.user.perms.includes('Admin') && !req.user.perms.includes('SuperAdmin')) {
      return res.status(403).json({ error: 'Access denied!' });//This check ensures that only the submitter of the ticket or users with Admin/SuperAdmin permissions can access the ticket details.
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
      return res.status(403).json({ error: 'Access denied' });// This check is already handled? by verifyPerms middleware in the route definition, but it's good to have an additional layer of security in the controller as well.
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

exports.amendTicket = async (req, res) => {//! Users should only be able to amend their own, and editing status should be restricted to admin users only. 
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
      return res.status(403).json({ error: 'Only Admins can change ticket status' });//This ensures only authorized users can change the status of a ticket. This particular implementation prevents regular users from modifying status via CRUD, though regular users should not be able to do so under normal circumstances(frontend React Form should not offer status modification for regular users).
    }
    if (Ticket.status != 'open' && !req.user.perms.includes('Admin') && !req.user.perms.includes('SuperAdmin')) {
      return res.status(403).json({ error: 'Only open tickets can be amended by regular users' });//This ensures that regular users cannot amend tickets that are already in progress or closed, which helps maintain the integrity of the ticketing process. Only Admins can amend tickets regardless of their status, allowing them to make necessary changes as needed.
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

