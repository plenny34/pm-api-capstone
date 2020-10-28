const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  opened_date: Date,
  incident_date: Date,
  adjustor_notes: [String],
  compensation_amount: Number,
  decision: Boolean,
  decision_date: Date,
  is_closed: Boolean
});

module.exports = mongoose.model("Claim", ClaimSchema);
