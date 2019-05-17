exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", tbl => {
    tbl.increments();

    tbl
      .string("title")
      .notNullable()
      .unique();
    tbl
      .string("genre")
      .notNullable()
      .unique();
    tbl.string("releaseYear");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games");
};
