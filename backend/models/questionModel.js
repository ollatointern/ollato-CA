const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOption: { type: String, required: true },
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
