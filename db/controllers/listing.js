const Listings = require('../models/listing.js');

module.exports = {
  getListings: (req, res) => {
    Listings.findAll((err, docs) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.json(docs);
      }
    });
  },
  getOneListing: (req, res) => {
    const reqId = req.params.id;
    Listings.findOne(reqId, (err, data) => {
      if (err) {
        console.log('error retriving single listing');
        res.end();
      } else {
        res.json(data);
      }
    });
  },
};
