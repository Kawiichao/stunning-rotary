const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  bio: { type: String },
  avatar: { type: String },
  password: { type: String, required: true }, // 密码字段
  createdAt: { type: Date, default: Date.now },
});

// 密码加密
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // 加密密码
  next();
});

// 检查密码是否匹配
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
