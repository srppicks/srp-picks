/* eslint-disable camelcase */
const { Model } = require("objection");

const Result = require("./Result");

class Golfer extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "Golfer";
  }

  // Objection.js assumes primary key is `id` by default

  static get jsonSchema() {
    return {
      type: "object",
      //      required: ["id"],

      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        height: { type: "string" },
        weight: { type: "integer" },
        hometown: {type: "string"},
        birthday: { type: "string" }
        //photo: { type: "unknown" },
      }
    };
  }

  // relation
  static get relationMappings() {
    return {
      results: {
        relation: Model.HasManyRelation,
        modelClass: Result,
        join: {
          from: "Golfer.id",
          to: "Result.golferId"
        }
      }
    };
  }

}

module.exports = Golfer;
