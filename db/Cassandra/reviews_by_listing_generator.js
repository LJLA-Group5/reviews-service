/* eslint-disable camelcase */
require('dotenv').config();
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:gen:psql:reviews');
const path = require('path');

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

// // 100m reviews
const reviewsStream = fs.createWriteStream(
  path.join(__dirname, '/data/cass_reviews_by_listing_data.csv')
);
reviewsStream.write('listing_id,created_at,rating,review_body,review_id,user_first_name\n');

function reviewsByListing(numberOfReviews) {
  if (numberOfReviews === 0) return reviewsStream.end();
  const listing_id = numberOfReviews % 1000000;
  const review_id = numberOfReviews;
  const user_first_name = faker.name.firstName();
  const review_body = faker.lorem.sentences();
  const created_at = `${faker.date.between('2015-01-01', '2020-12-05')}`;
  const cleanliness = generateRandomNum(1, 6);
  const communication = generateRandomNum(1, 6);
  const check_in = generateRandomNum(1, 6);
  const accuracy = generateRandomNum(1, 6);
  const location = generateRandomNum(1, 6);
  const value = generateRandomNum(1, 6);
  const review_entry = `${listing_id},${created_at},"{accuracy:${accuracy},check_in:${check_in},cleanliness:${cleanliness},communication:${communication},location:${location},value:${value}}",${review_body},${review_id},${user_first_name}\n`;
  const streamOkay = reviewsStream.write(review_entry);
  if (!streamOkay) reviewsStream.once('drain', () => reviewsByListing(numberOfReviews - 1));
  else reviewsByListing(numberOfReviews - 1);
}

debug('reviews gen start');
reviewsByListing(100000000);
