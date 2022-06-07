const { Pool } = require("pg");

const {config} = require("./../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

console.log(URI)

const pool = new Pool({ connectionString: URI });
module.exports = pool;

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   user: "brandon",
//   password: "admin123",
//   database: "my_store",
// });
//
// module.exports = pool;
