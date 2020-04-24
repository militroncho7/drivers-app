require('dotenv').config();
const mongoose = require('mongoose');
const Drivers = require('../models/Drivers');
const drivers = require('../drivers.json');

mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

async function seed() {
  try {
    await Drivers.insertMany(drivers);
  } catch (exception) {
    console.log(exception);
  }
}

seed();
