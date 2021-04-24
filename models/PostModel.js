import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
            default: "Anonymous",
        },
        attachment: String,
        likeCount: {
            type: Number,
            default: 0,
        },
    },
    // if set timestamps => auto add 2 field CreatedAt & UpdatedAt
    { timestamps: true }
);

export const PostModel = mongoose.model("Post", schema);
