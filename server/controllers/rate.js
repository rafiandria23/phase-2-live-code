'use strict';

const { Rate } = require('../models');

class RateController {
  static create(req, res, next) {
    const movieId = req.params.movieId;
    const rateData = {
      reviewer: req.body.reviewer,
      point: Number(req.body.point),
      MovieId: movieId
    };
    Rate.create(rateData)
      .then(rate => {
        res.status(201).json({ rate, message: 'Create rate success!' });
      })
      .catch(err => {
        next(err);
      });
  }

  static destroy(req, res, next) {
    const rateId = req.params.id;
    Rate.destroy({ where: { id: rateId } })
      .then(rate => {
        res.status(200).json({ message: 'Delete rate success!' });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = RateController;
