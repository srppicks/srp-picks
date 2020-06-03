/* eslint-disable camelcase */
const { Model } = require("objection");

const Result = require("./Result");

class Course extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "Course";
  }

  // Objection.js assumes primary key is `id` by default

  static get jsonSchema() {
    return {
      type: "object",
      //      required: ["id"],

      properties: {
        id: { type: "integer" },
        pgaId: { type: "integer" },
        name: { type: "string" },
        schedule2018: { type: "integer" },
        schedule2019: { type: "integer" },
        schedule2020: { type: "integer" }
        //photo: { type: "unknown" },
      }
    };
  }

  static get relationMappings() {
    return {
      results: {
        relation: Model.HasManyRelation,
        modelClass: Result,
        join: {
          from: "Course.id",
          to: "Result.courseId"
        }
      }
    };
  }



}

module.exports = Course;
