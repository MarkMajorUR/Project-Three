const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
<<<<<<< HEAD:controllers/goalsController.js
    db.Goal
=======
    db.User
>>>>>>> 31f839dec00cea22d827eb00dbd5bf9160c06d7e:controllers/userController.js
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
<<<<<<< HEAD:controllers/goalsController.js
    db.Goal
=======
    db.User
>>>>>>> 31f839dec00cea22d827eb00dbd5bf9160c06d7e:controllers/userController.js
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
<<<<<<< HEAD:controllers/goalsController.js
    db.Goal
=======
    db.User
>>>>>>> 31f839dec00cea22d827eb00dbd5bf9160c06d7e:controllers/userController.js
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
<<<<<<< HEAD:controllers/goalsController.js
    db.Goal
=======
    db.User
>>>>>>> 31f839dec00cea22d827eb00dbd5bf9160c06d7e:controllers/userController.js
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
<<<<<<< HEAD:controllers/goalsController.js
    db.Goal
=======
    db.User
>>>>>>> 31f839dec00cea22d827eb00dbd5bf9160c06d7e:controllers/userController.js
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
