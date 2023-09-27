import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },

  subheading: {
    type: String,
    required: [true, "Please provide a subheading"],
  },
  tag: {
    type: String,
    required: [true, "Please provide a tag"],
  },
  img: {
    type: String,
    required: [true, "Please provide a img"],
  },
  content: {
    type: String,
    required: [true, "Please provide a content"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Number: {
    type: Number,
    default: Math.floor(Math.random() * 1000),
  },
  author: {
    type: String,
    default: "Anonymous",
  },
  authorImg: {
    type: String,
    required: [true, "Please provide an author image"],
  },

});

const Post = models.Post || model("Post", postSchema);

export default Post;