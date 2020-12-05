/* eslint-disable camelcase */
require('dotenv').config();
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:gen:psql:users');
const path = require('path');

// 10m users
const usersStream = fs.createWriteStream(path.join(__dirname, '/data/postgres_users_data.csv'));
usersStream.write('user_id,username,first_name,photo_url\n');

function usersGenerator(numberOfUsers) {
  if (numberOfUsers === 0) {
    debug('Finished user gen');
    return usersStream.end();
  }
  const gender = ['men', 'women'];
  const user_id = numberOfUsers;
  const username = faker.internet.userName();
  const first_name = faker.name.firstName();
  const photo_url = `https://randomuser.me/api/portraits/thumb/${gender[numberOfUsers % 2]}/${
    numberOfUsers % 100
  }.jpg`;
  const user_entry = `${user_id},${username},${first_name},${photo_url}\n`;
  const streamOkay = usersStream.write(user_entry);
  if (!streamOkay) usersStream.once('drain', () => usersGenerator(numberOfUsers - 1));
  else usersGenerator(numberOfUsers - 1);
}

debug('users gen start');
usersGenerator(10000000);
