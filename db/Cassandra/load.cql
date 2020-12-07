USE ailpup;
COPY reviews_by_listing FROM '/Users/andy/Desktop/HackReactor/SDC/reviews-service/db/Cassandra/data/cass_reviews_data.csv' WITH HEADER=TRUE;