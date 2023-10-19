const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must type name"],
    unique: true,
  },
  token: {
    type: String,
  },
  // TODO: 추후 온라인 상태확인 구현
  online: {
    type: Boolean,
    default: false,
  },
});
