import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment', // Reference to the Comment model
  }],
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
