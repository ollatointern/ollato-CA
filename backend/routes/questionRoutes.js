const express = require('express');
const {
  createQuestion,
  getQuestionsByTestId,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
  addOption,
  getOptionsByQuestionId,
  getOptionById,
  updateOption,
  deleteOption
} = require('../controllers/questionController');
const router = express.Router();

router.post('/create', createQuestion);
router.get('/test/:test_id', getQuestionsByTestId);
router.get('/:id', getQuestionById);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);

router.post('/option', addOption);
router.get('/option/question/:question_id', getOptionsByQuestionId);
router.get('/option/:id', getOptionById);
router.put('/option/:id', updateOption);
router.delete('/option/:id', deleteOption);

module.exports = router;
