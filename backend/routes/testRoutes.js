const express = require('express');
const { createTest, getAllTests } = require('../controllers/testController');
const router = express.Router();

router.post('/create', createTest);
router.get('/', getAllTests);

module.exports = router;
