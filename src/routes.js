const express = require('express');
const ContactModel = require('./ContactModel');
const router = express.Router();

router
  .route('/')
  .get(async (_req, res) => {
    try {
      const data = await ContactModel.find({});
      return res.status(200).send({ data });
    } catch (error) {
      return res.status(403).send({ error });
    }
  })
  .post(async (req, res) => {
    try {
      const newContact = new ContactModel(req.body);
      await newContact.save();
      return res.status(200).send({ id: newContact.id });
    } catch (error) {
      return res.status(403).send({ error });
    }
  })
  .put(async (req, res) => {
    try {
      const { firstName, lastName, email, phone, id } = req.body;
      await ContactModel.findByIdAndUpdate(id, {
        firstName,
        lastName,
        phone,
        email,
      });
      return res.status(200).send();
    } catch (error) {
      return res.status(403).send({ error });
    }
  })
  .delete(async (req, res) => {
    try {
      await ContactModel.findByIdAndDelete(req.body.id);
      return res.status(200).send();
    } catch (error) {
      return res.status(403).send({ error });
    }
  });

module.exports = router;
