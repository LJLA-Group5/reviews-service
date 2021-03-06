require('dotenv').config();
// const debug = require('debug')('app:server:review');
const cassandra = require('cassandra-driver');

const distance = cassandra.types.distance;

const authProvider = new cassandra.auth.PlainTextAuthProvider(
  // process.env.CASSANDRA_USER,
  // process.env.CASSANDRA_PASS,
  'cassandra',
  'cassandra',
);

const client = new cassandra.Client({
  // contactPoints: ['127.0.0.1:9042'],
  contactPoints: ['172.31.7.6:9042'],
  localDataCenter: 'datacenter1',
  pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 2,
      [distance.remote]: 1,
    },
  },
  authProvider,
  keyspace: 'ailpup',
});

const insertOne = async (parameters) => {
  // avoid duplicate review ids??
  const query = 'INSERT INTO ailpup.reviews_by_listing (listing_id,review_id,accuracy,photo_url,check_in,cleanliness,communication,created_at,email,location,name,text,user_id,username,value) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
  await client.execute(query, parameters);
};

const getReviewsByListing = async (parameters) => {
  const query = 'SELECT * FROM ailpup.reviews_by_listing WHERE listing_id = ?;';
  const result = await client.execute(query, parameters, { prepare: true });
  return result;
};

const findOne = async (parameters) => {
  const query = 'SELECT * FROM ailpup.reviews_by_listing WHERE listing_id = ? AND review_id = ? ALLOW FILTERING;';
  const result = await client.execute(query, parameters, { prepare: true });
  return result;
};

const updateOne = async (parameters) => {
  const query = 'UPDATE ailpupn.reviews_by_listing SET text = ? WHERE listing_id = ? AND date = ?;';
  await client.execute(query, parameters, { prepare: true });
};

const deleteOne = async (parameters) => {
  const query = 'DELETE FROM ailpupn.reviews_by_listing WHERE review_id = ?';
  await client.execute(query, parameters, { prepare: true });
};

module.exports = {
  insertOne,
  getReviewsByListing,
  findOne,
  updateOne,
  deleteOne,
};
