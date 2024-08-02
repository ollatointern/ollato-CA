const asyncHandler = require('express-async-handler');
const Test = require('../models/testModel');
const Question = require('../models/questionModel');

// @desc    Fetch all tests
// @route   GET /api/tests
// @access  Public
const getTests = asyncHandler(async (req, res) => {
  const tests = await Test.find({});
  res.json(tests);
});

// @desc    Fetch single test
// @route   GET /api/tests/:id
// @access  Public
const getTestById = asyncHandler(async (req, res) => {
  const test = await Test.findById(req.params.id).populate('questions');
  if (test) {
    res.json(test);
  } else {
    res.status(404);
    throw new Error('Test not found');
  }
});

// @desc    Create a test
// @route   POST /api/tests
// @access  Private/Admin
const createTest = asyncHandler(async (req, res) => {
  const { title, category, duration } = req.body;
  const test = new Test({
    title,
    category,
    duration,
  });
  const createdTest = await test.save();
  res.status(201).json(createdTest);
});

// @desc    Update a test
// @route   PUT /api/tests/:id
// @access  Private/Admin
const updateTest = asyncHandler(async (req, res) => {
  const { title, category, duration } = req.body;
  const test = await Test.findById(req.params.id);

  if (test) {
    test.title = title || test.title;
    test.category = category || test.category;
    test.duration = duration || test.duration;

    const updatedTest = await test.save();
    res.json(updatedTest);
  } else {
    res.status(404);
    throw new Error('Test not found');
  }
});

// @desc    Delete a test
// @route   DELETE /api/tests/:id
// @access  Private/Admin
const deleteTest = asyncHandler(async (req, res) => {
  const test = await Test.findById(req.params.id);

  if (test) {
    await test.remove();
    res.json({ message: 'Test removed' });
  } else {
    res.status(404);
    throw new Error('Test not found');
  }
});

module.exports = {
  getTests,
  getTestById,
  createTest,
  updateTest,
  deleteTest,
};
