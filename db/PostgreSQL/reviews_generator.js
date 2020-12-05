/* eslint-disable camelcase */
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:gen:psql');
const path = require('path');
const { number } = require('prop-types');

const generateRandomNum = (min, max) => Math.floor(Math.random() * max + min);

// // 100m reviews
const reviewsStream = fs.createWriteStream(path.join(__dirname, '/data/postgres_reviews_data.csv'));
reviewsStream.write(
  'review_id, review_body, cleanliness, communication, check_in, accuracy, location, value, created_at, user_id, listing_id'
);
let numberOfReviews = 100;

function reviewsGenerator() {
  if (numberOfReviews === 0) return reviewsStream.end();
  const review_id = numberOfReviews;
  const review_body = faker.lorem.sentences();
  const cleanliness = generateRandomNum(1, 5);
  const communication = generateRandomNum(1, 5);
  const check_in = generateRandomNum(1, 5);
  const accuracy = generateRandomNum(1, 5);
  const location = generateRandomNum(1, 5);
  const value = generateRandomNum(1, 5);
  const created_at = `${faker.date.month()} ${generateRandomNum(2015, 2020)}`;
}
