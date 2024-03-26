let contentSchema = require("../models/contentSchema");

exports.addContent = async (req, res) => {
  let payload = await contentSchema.create(req.body);
  res.status(201).json({ success: true, message: "Content added successfully", payload });
};

exports.allContent = async (req, res) => {
  try {
    let payload = await contentSchema.find({});
    res.status(200).json({
      status: true,
      payload,
      message: "getting all data ",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.fetchSingleContent = async (req, res) => {
  try {
    let payload = await contentSchema.findOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      payload,
      message: "successfully fetching one data",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateContent = async (req, res) => {
  try {
    let updatePayload = await contentSchema.updateOne(
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

exports.deleteContent = async (req, res) => {
  try {
    await contentSchema.deleteOne({ _id: req.params.id });
    res.status(203).json({
      success: true,
      message: "successfully deleted ",
    });
  } catch (err) {
    console.log(err);
  }
};
