const Test = require('../models/Test');

exports.getAllTests = (req, res) => {
    Test.getAll((tests) => {
      res.json(tests);
    });
  };
  
  exports.getTestById = (req, res) => {
    const { id } = req.params;
    Test.getById(id, (test) => {
      res.json(test);
    });
  };
  
  exports.createTest = (req, res) => {
    const newTest = req.body;
    Test.create(newTest, (insertId) => {
      res.json({ id: insertId });
    });
  };
  
  exports.updateTest = (req, res) => {
    const { id } = req.params;
    const updatedTest = req.body;
    Test.update(id, updatedTest, () => {
      res.sendStatus(200);
    });
  };
  
  exports.deleteTest = (req, res) => {
    const { id } = req.params;
    Test.delete(id, () => {
      res.sendStatus(200);
    });
  };