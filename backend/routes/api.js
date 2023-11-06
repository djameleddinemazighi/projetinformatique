const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');
const roleController = require('../controllers/roleController');

router.use('/user', userController);
router.use('/role', roleController);

module.exports = router;