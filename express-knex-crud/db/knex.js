const knex = require("knex");

const connectKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "cars.sqlite3"
    },
    useNullAsDefault: true
});

module.exports = connectKnex;
