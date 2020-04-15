const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema(
  {
    driverId: String,
    permanentNumber: Number,
    code: String,
    url: String,
    givenName: String,
    familyName: String,
    dateOfBirth: String,
    nationality: String,
    initialValue: Number,
    market: { type: Boolean, default: true },
    img: String,
    car: String,
    logo: String,
  },
  {
    timestamps: true,
  }
);

const Drivers = mongoose.model("Drivers", driverSchema);

module.exports = Drivers;
