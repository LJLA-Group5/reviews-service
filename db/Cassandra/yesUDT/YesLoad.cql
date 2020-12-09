USE ailpup;
COPY reviews_by_listing (listing_id, created_at, rating, review_body, review_id, user_first_name) FROM '../data/YesUDT/YesUDT50.csv' with delimiter=',' AND header=true AND maxattempts=10 AND MINBATCHSIZE=1 AND MAXBATCHSIZE=8 AND PAGESIZE=10;
