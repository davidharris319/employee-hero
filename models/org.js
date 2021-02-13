const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
  name: String,
  admin_employee: String,
  employees: []
}, {
  timestamps: true
}
)

module.exports = mongoose.model('Org', orgSchema);