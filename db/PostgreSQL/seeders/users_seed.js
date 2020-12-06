const seed = require('./connect_and_import');

const usersTable = `
  DROP TABLE IF EXISTS reviews;
  DROP TABLE IF EXISTS users;
  CREATE TABLE users (
    user_id SERIAL primary key,
    username VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    photo_url VARCHAR(255) DEFAULT NULL
  );
`;

const importData = `
  COPY users (user_id, username, first_name, email, photo_url)
  FROM '${process.env.PG_USERS_DATA}'
  DELIMITER ','
  CSV HEADER;
`;

seed('users', usersTable, importData);

async function seedUsers() {
  await seed('users', usersTable, importData);
}

module.exports = seedUsers;
