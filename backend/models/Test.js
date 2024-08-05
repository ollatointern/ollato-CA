// const db = require('../config/db');

// const createTestTable = `
//   CREATE TABLE IF NOT EXISTS tests (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     questions INT NOT NULL,
//     duration INT NOT NULL,
//     category ENUM('interest', 'aptitude') NOT NULL
//   )
// `;

// db.query(createTestTable, (err, result) => {
//   if (err) throw err;
//   console.log('Test table created or already exists');
// });

// const Test = {
//   getAll: (callback) => {
//     db.query('SELECT * FROM tests', callback);
//   },
//   create: (test, callback) => {
//     const { title, questions, duration } = test;
//     db.query('INSERT INTO tests (title, questions, duration) VALUES (?, ?, ?)', [title, questions, duration], callback);
//   },
//   update: (id, test, callback) => {
//     const { title, questions, duration } = test;
//     db.query('UPDATE tests SET title = ?, questions = ?, duration = ? WHERE id = ?', [title, questions, duration, id], callback);
//   },
//   delete: (id, callback) => {
//     db.query('DELETE FROM tests WHERE id = ?', [id], callback);
//   },
//   getByCategory: (category, callback) => {
//     db.query('SELECT * FROM tests WHERE category = ?', [category], callback);
//   }
// };

// module.exports = Test;
const db = require('../config/db');

// SQL command to create the tests table with ENUM for category
const createTestTable = `
  CREATE TABLE IF NOT EXISTS tests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    questions INT NOT NULL,
    duration INT NOT NULL,
    category ENUM('interest', 'aptitude') NOT NULL
  )
`;

// Create the table if it doesn't exist
db.query(createTestTable, (err, result) => {
  if (err) throw err;
  console.log('Test table created or already exists');
});

const Test = {
  // Get all tests
  getAll: (callback) => {
    db.query('SELECT * FROM tests', callback);
  },

  // Create a new test
  create: (test, callback) => {
    const { title, questions, duration, category } = test;
    db.query(
      'INSERT INTO tests (title, questions, duration, category) VALUES (?, ?, ?, ?)',
      [title, questions, duration, category],
      callback
    );
  },

  // Update an existing test
  update: (id, test, callback) => {
    const { title, questions, duration, category } = test;
    db.query(
      'UPDATE tests SET title = ?, questions = ?, duration = ?, category = ? WHERE id = ?',
      [title, questions, duration, category, id],
      callback
    );
  },

  // Delete a test
  delete: (id, callback) => {
    db.query('DELETE FROM tests WHERE id = ?', [id], callback);
  },

  // Get tests by category
  getByCategory: (category, callback) => {
    db.query('SELECT * FROM tests WHERE category = ?', [category], callback);
  }
};

module.exports = Test;
