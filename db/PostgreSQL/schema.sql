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

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL primary key,
  username VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  email VARCHAR(100),
  photo_url VARCHAR(255) DEFAULT NULL
);

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  listing_id SERIAL primary key,
  listing_name VARCHAR(255) NOT NULL
);
