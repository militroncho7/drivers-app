const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nameDriver: String,
    lastnameDriver: String,
    user: String
  },
  {
    timestamps: true
  }
);

const Bids = mongoose.model("Bids", userSchema);

module.exports = Bids;