const mongoose = require("mongoose");
const { MONGODB_ATLAS } = require("./index");

exports.DbConnection = async () => {
  //connecting to the database using mongodb url
  await mongoose.connect(MONGODB_ATLAS);
  console.log("Db Connected");
};
