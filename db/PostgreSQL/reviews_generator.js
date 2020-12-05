/* eslint-disable camelcase */
require('dotenv').config();
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:gen:psql:reviews');
const path = require('path');

const generateRandomNum = (min, max) => Math.floor(Math.random() * max + min);

// // 100m reviews
const reviewsStream = fs.createWriteStream(path.join(__dirname, '/data/postgres_reviews_data.csv'));
reviewsStream.write(
  'review_id,review_body,cleanliness,communication,check_in,accuracy,location,value,created_at,user_id,listing_id\n'
);

function reviewsGenerator(numberOfReviews) {
  if (numberOfReviews === 0) return reviewsStream.end();
  const review_id = numberOfReviews;
  const review_body = faker.lorem.sentences();
  const cleanliness = generateRandomNum(1, 5);
  const communication = generateRandomNum(1, 5);
  const check_in = generateRandomNum(1, 5);
  const accuracy = generateRandomNum(1, 5);
  const location = generateRandomNum(1, 5);
  const value = generateRandomNum(1, 5);
  const created_at = `${faker.date.between('2015-01-01', '2020-12-05')}`;
  const user_id = numberOfReviews % 10000000;
  const listing_id = numberOfReviews % 1000000;
  const review_entry = `${review_id},${review_body},${cleanliness},${communication},${check_in},${accuracy},${location},${value},${created_at},${user_id},${listing_id}\n`;
  const streamOkay = reviewsStream.write(review_entry);
  if (!streamOkay) reviewsStream.once('drain', () => reviewsGenerator(numberOfReviews - 1));
  else reviewsGenerator(numberOfReviews - 1);
}

debug('reviews gen start');
reviewsGenerator(100000000);
