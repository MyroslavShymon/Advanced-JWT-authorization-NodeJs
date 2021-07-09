const { Schema, model } = require("mongoose");

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
  fingerPrint: { type: String, required: false },
  ipAddress: { type: String, required: false },
});

module.exports = model("Token", TokenSchema);
