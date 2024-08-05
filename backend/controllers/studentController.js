const Test = require('../models/Test');

exports.getTests = (req, res) => {
  Test.getAll((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};
