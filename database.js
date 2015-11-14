var knex = require('knex')({
    client: "sqlite3",
    debug: false,
    connection: {
        filename: './dev.db'
    }
});

module.exports = knex;