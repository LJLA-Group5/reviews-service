const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  reviews: Array,
});

const ListingModel = mongoose.model('Listing', listingSchema);

function findAll(callback) {
  ListingModel.find({}, callback);
}

function findOne(id, callback) {
  ListingModel.find({ id }, callback);
}

// module.exports = insert;
module.exports = { findAll, findOne, ListingModel };
