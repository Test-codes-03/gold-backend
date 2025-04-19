// models/clientSchema.js
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  userid: String,
  name: String,
  amount: Number,
  email: String,
  phone_number: String,
  select_type: String,
  schemes: String,
  gst: String,
  charge: Number,
  paymentId: String,
  paymentStatus: String,
}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);
