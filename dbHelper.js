const db = require("./data/dbConfig");

module.exports = {
  retrieve,
  insert
};

function retrieve() {
  return db("games");
}

async function insert(game) {
  const [id] = await db("games").insert(game, "id"); // second parameter is for heroku and production codes

  return db("games")
    .where({ id })
    .first();
}
