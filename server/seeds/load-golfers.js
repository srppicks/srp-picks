/* eslint-disable func-names */
const fs = require("fs");

exports.seed = function(knex) {
  const contents = fs.readFileSync("seed_golfers.json");
  const data = JSON.parse(contents);

  // Deletes ALL existing entries
  // Use batch insert because we have too many articles for simple insert
  return knex("Golfer")
    .del()
    .then(() => knex.batchInsert("Golfer", data, 3));
};
