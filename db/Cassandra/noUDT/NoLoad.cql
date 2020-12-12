USE ailpupnoudt;
COPY reviews_by_listing (listing_id, created_at, accuracy, check_in, cleanliness, communication, location, photo_url, review_body, review_id, user_first_name, value) FROM '../data/NoUDT/noUDT_data50.csv' with delimiter=',' AND header=true AND maxattempts=10 AND MINBATCHSIZE=1 AND MAXBATCHSIZE=8 AND PAGESIZE=10;
