const express = require('express');
const {
  getQuestionsByTestId,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} = require('../controllers/questionController');
const router = express.Router();

router.route('/').post(createQuestion);
router.route('/:testId').get(getQuestionsByTestId);
router.route('/:id').put(updateQuestion).delete(deleteQuestion);

module.exports = router;
