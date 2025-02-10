const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    refresh_token: {
      type: String,
    },
    access_token: {
      type: String,
    },
    expiration_date: {
      type: Date,
    },
    new: {
      type: Boolean,
      default: true,
    },
    dev: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("token", tokenSchema);
