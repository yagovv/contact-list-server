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
      return res.status(200);
    } catch (error) {
      return res.status(403).send({ error });
    }
  })
  .put(async (req, res) => {
    try {
      const { firstname, lastname, email, phone, id } = req.body;
      await ContactModel.findByIdAndUpdate(id, {
        firstname,
        lastname,
        phone,
        email,
      });
      return res.status(200);
    } catch (error) {
      return res.status(403).send({ error });
    }
  })
  .delete(async (req, res) => {
    try {
      await ContactModel.remove({ _id: req.body.id });
      return res.status(200);
    } catch (error) {
      return res.status(403).send({ error });
    }
  });

router.post('/savedata', function (req, res) {
  const mod = new ContactModel(req.body);
  mod.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({ data: 'Record has been Inserted..!!' });
    }
  });
});

module.exports = router;
