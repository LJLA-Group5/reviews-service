const seed = require('./connect_and_import');

const reviewsTable = `
  DROP TABLE IF EXISTS reviews;
  CREATE TABLE reviews (
    review_id SERIAL primary key,
    review_body text NOT NULL,
    cleanliness SMALLINT DEFAULT 5,
    communication SMALLINT DEFAULT 5,
    check_in SMALLINT DEFAULT 5,
    accuracy SMALLINT DEFAULT 5,
    location SMALLINT DEFAULT 5,
    value SMALLINT DEFAULT 5,
    created_at VARCHAR(255) NOT NULL,
    user_id INT REFERENCES users(user_id) NOT NULL,
    listing_id INT REFERENCES listings(listing_id) NOT NULL
  );
`;

const importData = `
  COPY reviews (review_id, review_body, cleanliness, communication, check_in, accuracy, location, value, created_at, user_id, listing_id)
  FROM '${process.env.PG_REVIEWS_DATA}'
  DELIMITER ','
  CSV HEADER;
`;

seed('reviews', reviewsTable, importData);
