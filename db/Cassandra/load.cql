USE ailpup;
COPY reviews_by_listing (listing_id, created_at, rating, review_body, review_id, user_first_name) FROM './data/cass_reviews_by_listing_data1.csv' with delimiter=',';