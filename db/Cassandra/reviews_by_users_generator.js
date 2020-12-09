/* eslint-disable camelcase */
require('dotenv').config();
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:gen:psql:users');
const path = require('path');

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

// 10m users
const usersStream = fs.createWriteStream(path.join(__dirname, '/data/cass_users_data.csv'));
usersStream.write(
  'user_first_name,username,email,photo_url,review_id,review_body,created_at,cleanliness,communication,check_in,accuracy,location,value\n'
);

function reviewsByUser(numberOfReviews) {
  if (numberOfReviews === 0) {
    debug('Finished reviewsByUser gen');
    return usersStream.end();
  }
  const user_first_name = faker.name.firstName();
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const photo_url = `https://randomuser.me/api/portraits/thumb/${gender[numberOfReviews % 2]}/${
    numberOfReviews % 100
  }.jpg`;
  const review_id = numberOfReviews;
  const review_body = faker.lorem.sentences();
  const created_at = `${faker.date.between('2015-01-01', '2020-12-05')}`;
  const cleanliness = generateRandomNum(1, 6);
  const communication = generateRandomNum(1, 6);
  const check_in = generateRandomNum(1, 6);
  const accuracy = generateRandomNum(1, 6);
  const location = generateRandomNum(1, 6);
  const value = generateRandomNum(1, 6);
  const review_entry = `${user_first_name},${username},${email},${photo_url},${review_id},${review_body},${created_at},${cleanliness},${communication},${check_in},${accuracy},${location},${value}\n`;
  const streamOkay = usersStream.write(review_entry);
  if (!streamOkay) usersStream.once('drain', () => reviewsByUser(numberOfReviews - 1));
  else reviewsByUser(numberOfReviews - 1);
}

debug('reviewsByUser gen start');
reviewsByUser(1000);
