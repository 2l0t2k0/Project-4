const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifytoken');
const verifyPerms = require('../middleware/verifyperms');
const { getTicket, getAllTickets, getOwnTickets } = require('../controllers/TicketController');


router.get('/', verifyToken, verifyPerms(['Admin', 'SuperAdmin']), getAllTickets);
router.get('/own', verifyToken, getOwnTickets);
router.get('/:id', verifyToken, getTicket);
router.put('/:id', verifyToken, getTicket);
router.delete('/:id', verifyToken, getTicket);

module.exports = router;
