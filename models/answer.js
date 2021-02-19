const mongoose = require('mongoose');
const { Schema } = mongoose;

const answerSchema = new Schema({
  body: String,
  question: {type: Schema.Types.ObjectId, ref:'Question', default: null },
  // organization: {type: Schema.Types.ObjectId, ref:'Organization', default: null }
  user: {type: Schema.Types.ObjectId, ref:'User', default: null },

}, {
  timestamps: true
});

module.exports = mongoose.model('Answer', answerSchema);