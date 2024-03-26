let { model, Schema } = require("mongoose");

let chapterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Schema.Types.ObjectId,
    ref: "School",
  },
});

module.exports = model("Chapter", chapterSchema);
