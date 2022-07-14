const { Router } = require('express');

const router = new Router();

const Phone = require('../models/phone');

// - GET - '/phones' - get all phones
router.get('/', (req, res, next) => {
  Phone.find()
    .then((phones) => {
      res.json({ phones });
    })
    .catch((error) => {
      next(error);
    });
});

// - GET - '/phones/:id' - get a single phone by id
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Phone.findById(id)
    .then((phone) => {
      console.log(phone);
      res.json({ phone });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
