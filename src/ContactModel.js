const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
  },
  { versionKey: false }
);

const model = mongoose.model('Contact', contactSchema);

module.exports = model;
