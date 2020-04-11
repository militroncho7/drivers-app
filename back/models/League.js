const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leagueSchema = new Schema(
  {
    name: String,
    players: [{ type: Schema.Types.ObjectId, ref: "User" }],
    drivers: [{ type: Schema.Types.ObjectId, ref: "Drivers" }]
    //Meter los drivers de la base de datos
  },
  {
    timestamps: true
  }
);

const League = mongoose.model("League", leagueSchema);

module.exports = Leauge;