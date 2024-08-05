const db = require('../config/db');

const Test = {
  create: async (testData) => {
    const [rows] = await db.execute(
      'INSERT INTO tests (title, description) VALUES (?, ?)',
      [testData.title, testData.description]
    );
    return rows;
  },

  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM tests');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM tests WHERE id = ?', [id]);
    return rows[0];
  },

  updateTest: async (id, testData) => {
    const [rows] = await db.execute(
      'UPDATE tests SET title = ?, description = ? WHERE id = ?',
      [testData.title, testData.description, id]
    );
    return rows;
  },

  deleteTest: async (id) => {
    const [rows] = await db.execute('DELETE FROM tests WHERE id = ?', [id]);
    return rows;
  }
};

module.exports = Test;
