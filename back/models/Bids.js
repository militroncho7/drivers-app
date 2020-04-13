const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema(
  {
    driver: [{ type: Schema.Types.ObjectId, ref: "Drivers" }],
    userOffer: [{ type: Schema.Types.ObjectId, ref: "User" }],
    userReceives: [{ type: Schema.Types.ObjectId, ref: "User" }],
    bid: Number,
    status: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

const Bids = mongoose.model("Bids", bidSchema);

module.exports = Bids;