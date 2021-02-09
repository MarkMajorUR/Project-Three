const db = require("../models");

// controller for createPost
module.exports ={
    findAll: function(req, res){
        db.Testimonial
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => {
          const userstesTestimonials = dbModel.filter((Testimonial) => Testimonial.user_id === req.body.Testimonial_id)
          res.json(userstesTestimonials)
        })
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Testimonial
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log(req);
        db.Testimonial
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Testimonial
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Testimonial
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
}