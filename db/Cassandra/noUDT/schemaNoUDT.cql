CREATE KEYSPACE IF NOT EXISTS ailpupNoUDT WITH replication = {
  'class':'SimpleStrategy',
  'replication_factor': 1
};

-- CREATE TABLE ailpup.users (
--   user_id uuid PRIMARY KEY,
--   username text,
--   first_name text,
--   email text,
--   photo_url text )
--   WITH comment = 'Find user by ID';

-- CREATE TABLE ailpup.reviews (
--   review_id int PRIMARY KEY,
--   review_body text,
--   rating frozen<rating>,
--   created_at text )
--   WITH comment = 'Find review by ID';

CREATE TABLE ailpupNoUDT.reviews_by_listing (
  listing_id int,
  created_at text,
  accuracy tinyint,
  check_in tinyint,
  cleanliness tinyint,
  communication tinyint,
  location tinyint,
  review_body text,
  review_id int,
  user_first_name text,
  value tinyint,
  PRIMARY KEY ((listing_id), created_at) )
  WITH comment = 'Find reviews by listing sorted by date';

-- CREATE TABLE ailpup.reviews_by_user (
--   user_first_name text,
--   username text,
--   email text,
--   photo_url text,
--   review_id text,
--   review_body text,
--   created_at text,
--   rating frozen<rating>,
--   PRIMARY KEY ((username), created_at) )
--   WITH comment = 'Find reviews by username';
