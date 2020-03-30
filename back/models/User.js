const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      index: true,
      required: "Name is required"

    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    name: {
      type: String,
      required: "Name is required"
    },
    lastname: {
      type: String,
      required: "Name is required"
    },
    email: {
      type: String,
      trim: true,
      sparse: true,
      unique: false,
      default: null
    },
    rol: {
      type: String,
      enum: ["Admin", "User"]
    }
  },
  {
    timestamps: true
  }
);

const Users = mongoose.model("Users", userSchema);

Users.collection.createIndexes([
  {
    key: { username: 1 },
    name: "username"
  }
]);

module.exports = Users;