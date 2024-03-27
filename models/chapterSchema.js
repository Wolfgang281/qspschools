let { model, Schema } = require("mongoose");

let chapterSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: Schema.Types.ObjectId,
    ref: "Content",
  },
  courseID: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Inactive",
  },
});

module.exports = model("Chapter", chapterSchema);
