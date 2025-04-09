const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/users"); // 引入用户注册和登录路由

// 连接 MongoDB 数据库
mongoose.connect("mongodb://localhost:27017/mytwitterapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json()); // 允许解析 JSON 请求体
app.use("/api/users", userRoutes); // 使用用户路由

// 启动后端服务器
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
