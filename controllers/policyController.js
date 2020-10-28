const Policy = require('../models/policy');
const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/policyManager';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to the database');
})

exports.create_policy_post = function (req, res) {
  const policy = new Policy(req.body);
  policy.save((err, data) => {
    if (err) {
      res.status(400).json({ message: "Failure to create policy" })
    }
    console.log(data);
    res.status(200).json({ message: 'You successfully created a policy'});
  })
};

