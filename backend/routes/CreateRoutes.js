const express = require('express');
const router = express.Router();
const { createUser, createDept, createSoftware, createTicket } = require('../controllers/CreateController');

router.post('/user', createUser);
router.post('/dept', createDept);
// router.post('/software', createSoftware);
// router.post('/ticket', createTicket);

module.exports = router;