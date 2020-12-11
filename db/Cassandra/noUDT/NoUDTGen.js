/* eslint-disable camelcase,consistent-return */
require('dotenv').config();
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:gen:psql:reviews');
const path = require('path');

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

// // 100m reviews
let reviewsStream;
let fileNum = 0;
const gender = ['men', 'women'];
const year = ['2015', '2016', '2017', '2018', '2019', '2020'];
const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function reviewsByListing(numberOfReviews) {
  if (numberOfReviews === 0) return reviewsStream.end();
  if (numberOfReviews % 2000000 === 0) {
    fileNum += 1;
    reviewsStream = fs.createWriteStream(
      path.join(__dirname, `../data/noUDT/noUDT_data${fileNum}.csv`)
    );
    reviewsStream.write(
      'listing_id,created_at,accuracy,check_in,cleanliness,communication,location, photo_url,review_body,review_id,user_first_name,value\n'
    );
  }
  const listing_id = generateRandomNum(1, 1000001);
  const review_id = numberOfReviews;
  const user_first_name = faker.name.firstName();
  const review_body = faker.lorem.sentences();
  const created_at = `${year[numberOfReviews % 6]}-${month[numberOfReviews % 12]}-${
    (numberOfReviews % 29) + 1
  }`;
  const cleanliness = generateRandomNum(1, 6);
  const communication = generateRandomNum(1, 6);
  const check_in = generateRandomNum(1, 6);
  const accuracy = generateRandomNum(1, 6);
  const location = generateRandomNum(1, 6);
  const photo_url = `https://randomuser.me/api/portraits/thumb/${gender[numberOfReviews % 2]}/${
    numberOfReviews % 100
  }.jpg`;
  const value = generateRandomNum(1, 6);
  const review_entry = `${listing_id},${created_at},${accuracy},${check_in},${cleanliness},${communication},${location},${photo_url},${review_body},${review_id},${user_first_name},${value}\n`;
  const streamOkay = reviewsStream.write(review_entry);
  if (!streamOkay) reviewsStream.once('drain', () => reviewsByListing(numberOfReviews - 1));
  else reviewsByListing(numberOfReviews - 1);
}

debug('reviews gen start');
reviewsByListing(100000000);
