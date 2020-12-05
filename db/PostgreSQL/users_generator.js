/* eslint-disable camelcase */
const fs = require('fs');
const faker = require('faker');
const debug = require('debug')('app:gen:psql');
const path = require('path');

// 10m users
const usersStream = fs.createWriteStream(path.join(__dirname, '/data/postgres_users_data.csv'));
usersStream.write('user_id, username, first_name, photo_url');
let numberOfUsers = 100;

function usersGenerator() {
  if (numberOfUsers === 0) return usersStream.end();
  const gender = ['men', 'women'];
  const user_id = numberOfUsers;
  const username = faker.internet.userName();
  const first_name = faker.name.firstName();
  const photo_url = `https://randomuser.me/api/portraits/thumb/${gender[i % 2]}/${i % 100}.jpg`;
  const user_entry = `${user_id},${username},${first_name},${photo_url}\n`;
  const streamOkay = usersStream.write(user_entry);
  numberOfUsers -= 1;
  if (!streamOkay) usersStream.once('drain', usersGenerator);
  else usersGenerator();
}

usersGenerator();
