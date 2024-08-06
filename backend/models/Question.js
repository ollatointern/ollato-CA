const db = require('../config/db');

const Question = {
  create: async (questionData) => {
    const [rows] = await db.execute(
      'INSERT INTO questions (test_id, text) VALUES (?, ?)',
      [questionData.test_id, questionData.text]
    );
    return rows;
  },

  getByTestId: async (test_id) => {
    const [rows] = await db.execute('SELECT * FROM questions WHERE test_id = ?', [test_id]);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM questions WHERE id = ?', [id]);
    return rows[0];
  },

  updateQuestion: async (id, questionData) => {
    const [rows] = await db.execute(
      'UPDATE questions SET text = ? WHERE id = ?',
      [questionData.text, id]
    );
    return rows;
  },

  deleteQuestion: async (id) => {
    const [rows] = await db.execute('DELETE FROM questions WHERE id = ?', [id]);
    return rows;
  }
};

module.exports = Question;
