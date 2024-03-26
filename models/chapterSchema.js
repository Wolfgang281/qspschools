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
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Inactive",
  },
});

module.exports = model("Chapter", chapterSchema);

//  git status
// git add .
// git commit -m "message"
// git push origin master
//
