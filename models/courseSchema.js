const { model, Schema } = require("mongoose");

let courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model("Course", courseSchema);
