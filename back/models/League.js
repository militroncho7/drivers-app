const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leagueSchema = new Schema(
  {
    name: String,
    players: [{type: Schema.Types.ObjectId, ref: 'User'}],
    drivers: [{type: Schema.Types.ObjectId, ref: 'Drivers'}],
    unavailableDrivers: [{type: Schema.Types.ObjectId, ref: 'Drivers'}],
    playerAdmin: {type: Schema.Types.ObjectId, ref: 'User'}
  },
  {
    timestamps: true
  }
);

const League = mongoose.model('League', leagueSchema);

module.exports = League;
