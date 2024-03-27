const chapterSchema = require("../models/chapterSchema");
const courseSchema = require("../models/courseSchema");

exports.addChapter = async (req, res) => {
  let payload = await chapterSchema.create(req.body);
  res.status(201).json({ success: true, message: "Chapter added successfully", payload });
};

exports.allChapter = async (req, res) => {
  let payload = await chapterSchema.find({}).populate("content");
  res.status(200).json({ success: true, message: "successfully fetching one data", payload });
};

exports.singleChapter = async (req, res) => {
  await chapterSchema.updateMany({}, { $set: { status: "Inactive" } });

  await chapterSchema.updateOne({ _id: req.params.id }, { $set: { status: "Active" } });

  let payload = await chapterSchema.findOne({ _id: req.params.id }).populate("content");
  res.status(200).json({ success: true, message: "successfully fetching one data", payload });
};

exports.particularCourseChapter = async (req, res) => {
  let payload = await chapterSchema
    .find({ courseID: req.params.id })
    .select("-courseID")
    .populate("content");
  res.status(200).json({ success: true, message: "successfully fetching one data", payload });
};

exports.updateChapter = async (req, res) => {
  try {
    let updatePayload = await chapterSchema.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json({
      success: true,
      message: "successfully updated ",
      updatePayload,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteChapter = async (req, res) => {
  try {
    await chapterSchema.deleteOne({ _id: req.params.id });
    res.status(203).json({
      success: true,
      message: "successfully deleted ",
    });
  } catch (err) {
    console.log(err);
  }
};
