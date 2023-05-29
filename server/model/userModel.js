const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  todos: [
    {
      todo: {
        type: String,
        required: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      id: this._id,
    },
    "secrete",
    { expiresIn: "7d" }
  );
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
