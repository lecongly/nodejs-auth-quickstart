const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 50,
  },
  lastName: {
    type: String,
    maxLength: 50,
  },
  numberPhone: {
    type: String,
    maxLength: 15,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    minLength: 6,
  },
});
const Customer = mongoose.model("customers", customerSchema);
module.exports = { Customer };
