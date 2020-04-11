const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverSchema = new Schema(
  {
    initialValue: Number,
    market: true,
    nameDriver: String,
    lastnameDriver: String    
  },
  {
    timestamps: true
  }
);

const Drivers = mongoose.model("Drivers", driverSchema);

module.exports = Drivers;