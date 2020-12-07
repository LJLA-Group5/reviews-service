CREATE KEYSPACE IF NOT EXISTS ailpup WITH replication = {
  'class':'SimpleStrategy',
  'replication_factor': 1
};

CREATE TYPE ailpup.rating (
  cleanliness tinyint,
  communication tinyint,
  check_in tinyint,
  accuracy tinyint,
  location tinyint,
  value tinyint,
);

CREATE TABLE ailpup.users (
  user_id uuid PRIMARY KEY,
  username text,
  first_name text,
  email text,
  photo_url text )
  WITH comment = 'Find user by ID';

CREATE TABLE ailpup.reviews (
  review_id int PRIMARY KEY,
  review_body text,
  frozen<rating>,
  created_at text )
  WITH comment = 'Find review by ID';

CREATE TABLE ailpup.reviews_by_listing (
  listing_id int,
  review_id int,
  user_first_name text,
  review_body text,
  created_at text,
  frozen<ratings>,
  PRIMARY KEY ((listing_id), created_at) )
  WITH comment = 'Find reviews by listing sorted by date';

CREATE TABLE ailpup.reviews_by_user (
  user_first_name text,
  username text,
  email text,
  photo_url text,
  review_id text,
  review_body text,
  created_at text,
  frozen<ratings>
  PRIMARY KEY ((username), created_at) )
  WITH comment = 'Find reviews by username'
