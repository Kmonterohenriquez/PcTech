const { CONNECTION_STRING } = process.env;
let { Pool } = require('pg');
let fs = require('fs');
let sql;
try {
  sql = fs.readFileSync('./seed.sql', 'utf8');
  console.log(sql);
} catch (err) {
  console.error(err);
}

// console.log("data entered from file:", sql)

const pool = new Pool(CONNECTION_STRING)

// Create a pool instance and pass in our config, which we set in our env vars
// const pool = new Pool({
//     host,
//     user,
//     database,
//     password,
//     port,
// });

module.exports = {
    query: (sql, params, callback) => {
        return pool.query(sql, params, callback);
    },
    connect: (err, client, done) => {
        return pool.connect(err, client, done);
    },
};
    