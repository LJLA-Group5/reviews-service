require('newrelic');
const express = require('express');
const path = require('path');
const debug = require('debug')('app:server:index');
const reviewController = require('../db/controllers/review');

const port = 3003;
const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));

// create review
app.post('/api/listings/:listing_id/reviews', reviewController.insertOneReview);

// get reviews by listing
app.get('/api/listings/:listing_id/reviews', reviewController.getReviewsByListing);

// get one review
app.get('/api/listings/:listing_id/reviews/:review_id', reviewController.getOneReview);

// update review
app.patch('/api/listings/:listing_id/reviews/:review_id', reviewController.updateOneReview);

// delete review
app.get('/api/listings/:listing_id/reviews', reviewController.deleteOneReview);

app.listen(port, () => debug(`listening on port ${port}`));
