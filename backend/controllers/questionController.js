const asyncHandler = require('express-async-handler');
const Question = require('../models/questionModel');

// @desc    Fetch all questions for a test
// @route   GET /api/questions/:testId
// @access  Public
const getQuestionsByTestId = asyncHandler(async (req, res) => {
  const questions = await Question.find({ test: req.params.testId });
  res.json(questions);
});

// @desc    Create a question
// @route   POST /api/questions
// @access  Private/Admin
const createQuestion = asyncHandler(async (req, res) => {
  const { test, questionText, options, correctOption } = req.body;
  const question = new Question({
    test,
    questionText,
    options,
    correctOption,
  });
  const createdQuestion = await question.save();
  res.status(201).json(createdQuestion);
});

// @desc    Update a question
// @route   PUT /api/questions/:id
// @access  Private/Admin
const updateQuestion = asyncHandler(async (req, res) => {
  const { questionText, options, correctOption } = req.body;
  const question = await Question.findById(req.params.id);

  if (question) {
    question.questionText = questionText || question.questionText;
    question.options = options || question.options;
    question.correctOption = correctOption || question.correctOption;

    const updatedQuestion = await question.save();
    res.json(updatedQuestion);
  } else {
    res.status(404);
    throw new Error('Question not found');
  }
});

// @desc    Delete a question
// @route   DELETE /api/questions/:id
// @access  Private/Admin
const deleteQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);

  if (question) {
    await question.remove();
    res.json({ message: 'Question removed' });
  } else {
    res.status(404);
    throw new Error('Question not found');
  }
});

module.exports = {
  getQuestionsByTestId,
  createQuestion,
  updateQuestion,
  deleteQuestion,
};
