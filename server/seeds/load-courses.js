/* eslint-disable func-names */
const fs = require("fs");

exports.seed = function(knex) {
  const contents = fs.readFileSync("seed_courses.json");
  const data = JSON.parse(contents);
  console.log("1");
  console.log(data);
  console.log("ok");

  // Deletes ALL existing entries
  // Use batch insert because we have too many articles for simple insert
  return knex("Course")
    .del()
    .then(() => knex.batchInsert("Course", data, 5));
};
