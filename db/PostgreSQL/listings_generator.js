/* eslint-disable camelcase */
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:gen:psql');
const path = require('path');

// 1m listings
const listingsStream = fs.createWriteStream(
  path.join(__dirname, '/data/postgres_listings_data.csv')
);
listingsStream.write('listing_id,listing_name\n');
let numberOfListings = 100;

function listingsGenerator() {
  if (numberOfListings === 0) return listingsStream.end();
  const listing_id = numberOfListings;
  const listing_name = faker.lorem.sentence();
  const listing_entry = `${listing_id},${listing_name}\n`;
  const streamOkay = listingsStream.write(listing_entry);
  numberOfListings -= 1;
  if (!streamOkay) listingsStream.once('drain', listingsGenerator);
  else listingsGenerator();
}

listingsGenerator();
