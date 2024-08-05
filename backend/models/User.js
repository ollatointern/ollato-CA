const db = require('../config/db');

const User = {
  create: async (userData) => {
    const [rows] = await db.execute(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [userData.name, userData.email, userData.password, userData.role]
    );
    return rows;
  },

  findByEmail: async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  updateUser: async (id, userData) => {
    const [rows] = await db.execute(
      'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?',
      [userData.name, userData.email, userData.role, id]
    );
    return rows;
  },

  deleteUser: async (id) => {
    const [rows] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return rows;
  },

  getAllUsers: async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
  }
};

module.exports = User;
