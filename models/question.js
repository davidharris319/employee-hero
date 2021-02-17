const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    body: String,
    organization: {type: Schema.Types.ObjectId, ref:'Org', default: null }
  }, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);