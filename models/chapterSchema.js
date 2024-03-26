let { model, Schema } = require("mongoose");

let chapterSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: Schema.Types.ObjectId,
    ref: "Content",
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Inactive",
  },
});

module.exports = model("Chapter", chapterSchema);
