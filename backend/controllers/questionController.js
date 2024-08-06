const Question = require('../models/Question');
const Option = require('../models/Option');

exports.createQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuestionsByTestId = async (req, res) => {
  try {
    const questions = await Question.getByTestId(req.params.test_id);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.getById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const question = await Question.updateQuestion(req.params.id, req.body);
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    await Question.deleteQuestion(req.params.id);
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addOption = async (req, res) => {
  try {
    const option = await Option.create(req.body);
    res.status(201).json(option);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOptionsByQuestionId = async (req, res) => {
  try {
    const options = await Option.getByQuestionId(req.params.question_id);
    res.status(200).json(options);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOptionById = async (req, res) => {
  try {
    const option = await Option.getById(req.params.id);
    if (!option) {
      return res.status(404).json({ message: 'Option not found' });
    }
    res.status(200).json(option);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOption = async (req, res) => {
  try {
    const option = await Option.updateOption(req.params.id, req.body);
    res.status(200).json(option);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOption = async (req, res) => {
  try {
    await Option.deleteOption(req.params.id);
    res.status(200).json({ message: 'Option deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
