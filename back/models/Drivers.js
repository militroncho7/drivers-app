const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    idPiloto: String,
    initialValue: Number,
    market: true,
    nameDriver: String,
    lastnameDriver: String,
    //idNumberDriver: Number
  },
  {
    timestamps: true
  }
);

const Drivers = mongoose.model("Drivers", userSchema);

module.exports = Drivers;