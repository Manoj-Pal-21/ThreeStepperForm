const mongoose = require('mongoose');

const FormProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  step: { type: Number, default: 1 },
  data: { type: Object, default: {} },
}, {
  timestamps: true
});

module.exports = mongoose.model('FormProgress', FormProgressSchema);
