const tweetSchema = new mongoose.Schema({
  content: String,
  userId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: String,
      text: String,
    },
  ],
});
