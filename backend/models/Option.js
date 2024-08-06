const db = require('../config/db');

const Option = {
  create: async (optionData) => {
    const [rows] = await db.execute(
      'INSERT INTO options (question_id, text, is_correct) VALUES (?, ?, ?)',
      [optionData.question_id, optionData.text, optionData.is_correct]
    );
    return rows;
  },

  getByQuestionId: async (question_id) => {
    const [rows] = await db.execute('SELECT * FROM options WHERE question_id = ?', [question_id]);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM options WHERE id = ?', [id]);
    return rows[0];
  },

  updateOption: async (id, optionData) => {
    const [rows] = await db.execute(
      'UPDATE options SET text = ?, is_correct = ? WHERE id = ?',
      [optionData.text, optionData.is_correct, id]
    );
    return rows;
  },

  deleteOption: async (id) => {
    const [rows] = await db.execute('DELETE FROM options WHERE id = ?', [id]);
    return rows;
  }
};

module.exports = Option;
