/* eslint-disable no-console */
const Reviews = require('../models/review.js');

module.exports = {
  insertOneReview: async (req, res) => {
    const parameters = [
      req.params.listing_id,
      req.body.review_id,
      req.body.accuracy,
      req.body.photo_url,
      req.body.check_in,
      req.body.cleanliness,
      req.body.communication,
      req.body.created_at,
      req.body.email,
      req.body.location,
      req.body.name,
      req.body.text,
      req.body.user_id,
      req.body.username,
      req.body.value];
    try {
      await Reviews.insertOne(parameters);
      res.sendStatus(200);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  getReviewsByListing: async (req, res) => {
    const parameters = [req.params.listing_id];
    try {
      const data = await Reviews.getReviewsByListing(parameters);
      res.json(data);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  getOneReview: async (req, res) => {
    const parameters = [req.params.listing_id, req.params.review_id];
    console.log(parameters);
    try {
      const data = await Reviews.findOne(parameters);
      res.json(data);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  updateOneReview: async (req, res) => {
    const parameters = [req.body.text, req.params.listing_id, req.body.created_at];
    try {
      await Reviews.updateOne(parameters);
      res.status(200).send('review updated');
    } catch (err) {
      res.status(404).send(err);
    }
  },
  deleteOneReview: async (req, res) => {
    const parameters = [req.params.review_id];
    try {
      await Reviews.deleteOne(parameters);
      res.status(200).send('review deleted');
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
