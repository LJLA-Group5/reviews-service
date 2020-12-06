const seed = require('./connect_and_import');

const listingsTable = `
  DROP TABLE IF EXISTS reviews;
  DROP TABLE IF EXISTS listings;
  CREATE TABLE listings (
    listing_id SERIAL primary key,
    listing_name VARCHAR(255) NOT NULL
  );
`;

const importData = `
  COPY listings (listing_id, listing_name)
  FROM '${process.env.PG_LISTINGS_DATA}'
  DELIMITER ','
  CSV HEADER;
`;

seed('listings', listingsTable, importData);

async function seedListings() {
  await seed('listings', listingsTable, importData);
}

module.exports = seedListings;
