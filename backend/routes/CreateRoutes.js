const verifyToken  = require('../middleware/verifytoken');
const verifyperms = require('../middleware/verifyprems');
const express = require('express');
const router = express.Router();
const { createUser, createDept, createSoftware, createTicket } = require('../controllers/CreateController');


router.post('/user', verifyToken, createUser);
router.post('/dept', verifyToken, verifyperms createDept);
router.post('/software', verifyToken, createSoftware);
//! router.post('/ticket', verifyToken, createTicket); 

module.exports = router;