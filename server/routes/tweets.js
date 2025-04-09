// routes/tweets.js
const express = require("express");
const router = express.Router();
const Tweet = require("../models/Tweet"); // 引入 Tweet 模型
const User = require("../models/User"); // 引入 User 模型

// 获取指定用户的推文
router.get("/:username/tweets", async (req, res) => {
  try {
    // 查找指定用户名的用户
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).send("User not found");

    // 查找该用户的所有推文（根据 userId 排序）
    const tweets = await Tweet.find({ userId: user._id }).sort({
      createdAt: -1,
    });
    res.json(tweets); // 返回推文数据
  } catch (error) {
    res.status(500).json({ error: "Error fetching user tweets" });
  }
});
// 编辑推文
router.put("/:id", async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet) return res.status(404).json({ error: "Tweet not found" });

    tweet.content = req.body.content || tweet.content;
    await tweet.save();
    res.json(tweet);
  } catch (error) {
    res.status(500).json({ error: "Error updating tweet" });
  }
});

// 删除推文
router.delete("/:id", async (req, res) => {
  try {
    const tweet = await Tweet.findByIdAndDelete(req.params.id);
    if (!tweet) return res.status(404).json({ error: "Tweet not found" });

    res.json({ message: "Tweet deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting tweet" });
  }
});
// 添加评论路由
router.post("/:id/comments", async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet) return res.status(404).send("Tweet not found");

    const comment = {
      user: req.body.user || "匿名用户",
      text: req.body.text,
    };

    tweet.comments.push(comment);
    await tweet.save();

    res.json(tweet);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
});
module.exports = router;
