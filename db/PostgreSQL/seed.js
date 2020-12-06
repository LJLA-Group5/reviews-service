const { number } = require('prop-types');
const listingsSeed = require('./seeders/listings_seed');
const reviewsSeed = require('./seeders/reviews_seed');
const usersSeed = require('./seeders/users_seed');

async function seedData() {
  await listingsSeed();
  await usersSeed();
  await reviewsSeed();
}

seedData();
