const Org = require('../models/org');
const User = require('../models/user');
const { createJWT } = require('../config/jwt.js');


async function registerToOrganization(req, res) {
  try {
    const organization = await Org.findById(req.body.id)
    const employee = await User.findById(req.user._id)
    employee.organization = organization;
    await employee.save();
    console.log('employee', employee);
    console.log('org-pre-push', organization);
    organization.employees.push({name: employee.name, email: employee.email});
    console.log('org', organization);
    await organization.save();
    const token = createJWT(employee);
    res.json({ user: employee, token, organization})
  } catch (err) {
    console.log(err)
    res.json({"test": "fail"});
  }
}

module.exports = {
  registerToOrganization
}