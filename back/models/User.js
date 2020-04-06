const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;
const IMAGE_URL = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g;
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      index: true,
      required: "Name is required"
    },
    password: {
      type: String,
      // required: [true, 'Password is required'],
      // match: [PASSWORD_PATTERN, 'Invalid password pattern'],
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
      match: [
        EMAIL_PATTERN,
        'Please fill a valid email address',
      ],
      sparse: true,
      unique: false,
      default: null,
      lowercase: true
    },
    rol: {
      type: String,
      enum: ["Admin", "User"],
      default: "User"
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      },
    },
  },
);

userSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR)
    .then((salt) => {
      bcrypt.hash(user.password, salt)
        .then((hash) => {
          user.password = hash;
          next();
        });
    })
    .catch(error => next(error));
});


const User = mongoose.model('User', userSchema);

module.exports = User;
