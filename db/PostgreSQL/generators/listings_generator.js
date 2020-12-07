/* eslint-disable camelcase */
require('dotenv').config();
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:psql:gen:listings');
const path = require('path');

// 1m listings
const listingsStream = fs.createWriteStream(
  path.join(__dirname, '../data/postgres_listings_data.csv')
);
listingsStream.write('listing_id,listing_name\n');

function listingsGenerator(numberOfListings) {
  if (numberOfListings === 0) return listingsStream.end();
  const listing_id = numberOfListings;
  const listing_name = faker.lorem.sentence();
  const listing_entry = `${listing_id},${listing_name}\n`;
  const streamOkay = listingsStream.write(listing_entry);
  if (!streamOkay) listingsStream.once('drain', () => listingsGenerator(numberOfListings - 1));
  else listingsGenerator(numberOfListings - 1);
}

debug('listings gen start');
listingsGenerator(1000000);

module.exports = listingsGenerator;
