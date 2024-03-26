const { model, Schema } = require("mongoose");

let courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  chapter: {
    type: Schema.Types.ObjectId,
    ref: "Chapter",
  },
});

module.exports = model("Course", courseSchema);
