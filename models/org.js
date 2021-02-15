const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    name: String,
    email: String,
    // user: {type: Schema.Types.ObjectId, ref:'User', default: null }
  }, {
    timestamps: true
  }
)


const orgSchema = new Schema(
  {
    name: String,
    industry: String, 
    admin_employee: String,
    employees: [employeeSchema]
  }, {
    timestamps: true
  }
)

module.exports = mongoose.model('Org', orgSchema);