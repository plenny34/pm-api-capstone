const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
  name: String,
  type: String,
  holder_first_name: String,
  holder_last_name: String,
  holder_account_id: String,
  is_active: Boolean,
  has_active_claim: Boolean,
  effective_date: Date,
  termination_date: Date
});

module.exports = mongoose.model("Policy", PolicySchema);
