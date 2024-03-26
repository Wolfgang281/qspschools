let courseSchema = require("../models/courseSchema");

exports.addCourse = async (req, res) => {
  let payload = await courseSchema.create(req.body);
  res.status(201).json({ success: true, message: "course added successfully", payload });
};

exports.allCourse = async (req, res) => {
  try {
    let payload = await courseSchema.find({}).populate("chapter");
    res.status(200).json({
      status: true,
      payload,
      message: "getting all data ",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.fetchSingleCourse = async (req, res) => {
  try {
    let payload = await courseSchema.findOne({ _id: req.params.id }).populate("chapter");
    res.status(200).json({
      success: true,
      payload,
      message: "successfully fetching one data",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateCourse = async (req, res) => {
  try {
    let updatePayload = await courseSchema.updateOne(
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

exports.deleteCourse = async (req, res) => {
  try {
    await courseSchema.deleteOne({ _id: req.params.id });
    res.status(203).json({
      success: true,
      message: "successfully deleted ",
    });
  } catch (err) {
    console.log(err);
  }
};
