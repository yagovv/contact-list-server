const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
  },
  { versionKey: false }
);

const model = mongoose.model('Contact', contactSchema);

module.exports = model;
