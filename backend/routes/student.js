const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.get('/tests', studentController.getTests);

module.exports = router;
