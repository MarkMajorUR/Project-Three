const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
<<<<<<< HEAD
    db.User
=======

    db.User

>>>>>>> f67182a75961b3396fdfb18d2aa333bbe39fddbe
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
<<<<<<< HEAD
    db.User
=======

    db.User

>>>>>>> f67182a75961b3396fdfb18d2aa333bbe39fddbe
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
<<<<<<< HEAD
    db.User
=======

    db.User

>>>>>>> f67182a75961b3396fdfb18d2aa333bbe39fddbe
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
<<<<<<< HEAD
    db.User
=======

    db.User

>>>>>>> f67182a75961b3396fdfb18d2aa333bbe39fddbe
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
<<<<<<< HEAD
    db.User
=======

    db.User

>>>>>>> f67182a75961b3396fdfb18d2aa333bbe39fddbe
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
