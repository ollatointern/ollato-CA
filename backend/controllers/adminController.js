// const Test = require('../models/Test');

// exports.getTests = (req, res) => {
//   Test.getAll((err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// };

// exports.createTest = (req, res) => {
//   const newTest = req.body;
//   Test.create(newTest, (err, result) => {
//     if (err) throw err;
//     res.status(201).json({ id: result.insertId, ...newTest });
//   });
// };

// exports.updateTest = (req, res) => {
//   const id = req.params.id;
//   const updatedTest = req.body;
//   Test.update(id, updatedTest, (err, result) => {
//     if (err) throw err;
//     res.json({ id, ...updatedTest });
//   });
// };

// exports.deleteTest = (req, res) => {
//   const id = req.params.id;
//   Test.delete(id, (err, result) => {
//     if (err) throw err;
//     res.status(204).end();
//   });
// };



const Test = require('../models/Test');

exports.getTests = (req, res) => {
  Test.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to retrieve tests', error: err });
    }
    res.json(results);
  });
};

exports.createTest = (req, res) => {
  const newTest = req.body;
  Test.create(newTest, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to create test', error: err });
    }
    res.status(201).json({ id: result.insertId, ...newTest });
  });
};

exports.updateTest = (req, res) => {
  const id = req.params.id;
  const updatedTest = req.body;
  Test.update(id, updatedTest, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to update test', error: err });
    }
    res.json({ id, ...updatedTest });
  });
};

exports.deleteTest = (req, res) => {
  const id = req.params.id;
  Test.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to delete test', error: err });
    }
    res.status(204).end();
  });
};


exports.getTestsByCategory = (req, res) => {
    const category = req.params.category;
    Test.getByCategory(category, (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to retrieve tests by category', error: err });
      }
      res.json(results);
    });
  };