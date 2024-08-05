const express = require('express');
const { createResult } = require('../controllers/resultController');
const router = express.Router();

router.post('/create', createResult);

module.exports = router;
