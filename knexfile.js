// Update with your config settings.
require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
console.log(process.env.dbhost);
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "grimwood",
      user: "grimwood",
      password: "Meldave07",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: process.env.dbhost,
      port: process.env.dbport,
      user: process.env.dbusername,
      password: process.env.dbpassword,
      database: process.env.dbdatabase,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.dbhost,
      port: process.env.dbport,
      user: process.env.dbusername,
      password: process.env.dbpassword,
      database: process.env.dbdatabase,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
