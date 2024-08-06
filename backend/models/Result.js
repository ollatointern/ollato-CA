const db = require('../config/db');

const Result = {
  create: async (resultData) => {
    const [rows] = await db.execute(
      'INSERT INTO results (user_id, test_id, score) VALUES (?, ?, ?)',
      [resultData.user_id, resultData.test_id, resultData.score]
    );
    return rows;
  },

  getByUserId: async (user_id) => {
    const [rows] = await db.execute('SELECT * FROM results WHERE user_id = ?', [user_id]);
    return rows;
  },

  getByTestId: async (test_id) => {
    const [rows] = await db.execute('SELECT * FROM results WHERE test_id = ?', [test_id]);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM results WHERE id = ?', [id]);
    return rows[0];
  }
};

module.exports = Result;
