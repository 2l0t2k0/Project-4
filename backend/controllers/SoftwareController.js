const express = require('express');
const router = express.Router();

async function getSoftware(req, res) {
  try {
    const software = await Software.findById(req.params.id).populate('dept');
    if (!software) {
      return res.status(404).json({ error: 'Software not found' });
    }
    res.json(software);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function getAllSoftware(req, res) {
  try {
    const software = await Software.find().populate('dept');
    res.json(software);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function getTicketbyId(req, res) {
  try {
    const ticket = await Ticket.findById(req.params.id).populate('software');
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function getTicketsBySoftware(req, res) {
  try {
    const tickets = await Ticket.find({ software: req.params.id }).populate('software');
    res.json(tickets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}   

router.get('/:id', getSoftware);
router.get('/', getAllSoftware);
router.get('/ticket/:id', getTicketbyId);
router.get('/:id/tickets', getTicketsBySoftware);

module.exports = router;