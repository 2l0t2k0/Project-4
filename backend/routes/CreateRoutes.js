const verifyToken  = require('../middleware/verifytoken');
const verifyPerms = require('../middleware/verifyperms');
const express = require('express');
const router = express.Router();
const { createUser, createDept, createSoftware, createTicket } = require('../controllers/CreateController');


router.post('/user', verifyToken, createUser);
router.post('/dept', verifyToken, verifyPerms(['Admin', 'SuperAdmin']), createDept);
router.post('/software', verifyToken, createSoftware);
router.post('/ticket', verifyToken, createTicket); 

module.exports = router;