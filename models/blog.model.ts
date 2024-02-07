import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, by: mongoose.Schema.Types.ObjectId }],
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
}, {
    timestamps: true
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;