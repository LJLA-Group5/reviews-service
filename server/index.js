require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const listingController = require('../db/controllers/listing.js');

const port = 3003;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist')));

// create review
app.post('/api/listings/:listing_id/reviews', listingController.insertOneReview);

// get reviews by listing
app.get('/api/listings/:listing_id/reviews', listingController.getReviewsByListing);

// get one review
app.get('/api/listings/:listing_id/reviews/:review_id', listingController.getOneReview);

// update review
app.patch('/api/listings/:listing_id/reviews/:review_id', listingController.updateOneReview);

// delete review
app.get('/api/listings/:listing_id/reviews', listingController.deleteOneReview);

app.listen(port, () => console.log(`listening on port ${port}`));
