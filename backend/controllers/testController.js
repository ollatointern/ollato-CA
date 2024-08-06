const Test = require('../models/Test');

exports.createTest = async (req, res) => {
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.getAll();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
