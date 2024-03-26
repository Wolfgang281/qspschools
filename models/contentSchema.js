const { model, Schema } = require("mongoose");

let contentSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  example: {
    type: String,
  },
});

module.exports = model("Content", contentSchema);
