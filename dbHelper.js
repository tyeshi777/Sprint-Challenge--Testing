const db = require("./data/dbConfig");

module.exports = {
  retrieve,
  insert
};

function retrieve() {
  return db("users");
}

function insert(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return getById(ids[0]);
    });
}
