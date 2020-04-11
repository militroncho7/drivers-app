const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema(
  {
    driver: [{ type: Schema.Types.ObjectId, ref: "Drivers" }],
    userOferta: [{ type: Schema.Types.ObjectId, ref: "User" }],
    userRecibe: [{ type: Schema.Types.ObjectId, ref: "User" }],
    bid: Number,
    status: false
  },
  {
    timestamps: true
  }
);

const Bids = mongoose.model("Bids", bidSchema);

module.exports = Bids;