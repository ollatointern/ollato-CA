const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Get all tests
router.get('/tests', adminController.getTests);

// Create a new test
router.post('/tests', adminController.createTest);

// Update an existing test
router.put('/tests/:id', adminController.updateTest);

// Delete a test
router.delete('/tests/:id', adminController.deleteTest);

// Get tests by category
router.get('/tests/category/:category', adminController.getTestsByCategory);

module.exports = router;
