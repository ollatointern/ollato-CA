const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
  duration: { type: Number, required: true },
}, {
  timestamps: true,
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;
