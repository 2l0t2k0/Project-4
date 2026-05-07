const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const verifyperms = require('../middleware/verifyprems');
const { getUser, getAllUsers, EditUserDept, EditUserPerms, DeleteUser } = require('../controllers/UserController');

router.get('/:id', verifyToken, getUser);
router.get('/', verifyToken, getAllUsers);
router.put('/:id/dept', verifyToken, EditUserDept);
router.put('/:id/perms', verifyToken, verifyperms, EditUserPerms);
router.delete('/:id', verifyToken, DeleteUser);



module.exports = router;    