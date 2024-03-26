const { model, Schema } = require("mongoose");

let schoolSchema = new Schema({
  title: {
    type: String,
    required: true,
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

module.exports = model("School", schoolSchema);
