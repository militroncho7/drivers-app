const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
  },
  {
    timestamps: true
  }
);

const Points = mongoose.model("Points", userSchema);

module.exports = Points;