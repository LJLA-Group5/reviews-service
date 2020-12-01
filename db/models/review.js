const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    id: Number,
    listing_id: Number,
    text: String,
    date: String,
  },
  user: {
    name: String,
    email: String,
    avatar_url: String,
  },
  ratings: {
    cleanliness: Number,
    communication: Number,
    check_in: Number,
    accuracy: Number,
    location: Number,
    value: Number,
  },
});

const ReviewModel = mongoose.model('Review', reviewSchema);

// function insert(review, callback) {
//   ReviewModel.create(review, callback);
// }

function findAll(callback) {
  ReviewModel.find({}, callback);
}

// module.exports = insert;
module.exports = findAll;
module.exports = ReviewModel;
