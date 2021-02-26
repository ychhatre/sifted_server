import mongoose from "mongoose";
import IPost from "../interfaces/post";
import Comment from "./Comment";
import User from "./User";

const PostSchema: mongoose.Schema = new mongoose.Schema({
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    timestamp: {
        default: Date.now()/1000,   
        type: Date
    },
    imagesURL: {
       required: false, 
       type: [String],
       default: []
    },
    description: {
        type:String,
        required: true 
    },
    likes: {
        type: [{
            
        }],
        default: [],
        required: false 
    },
    tags: {
        type: [String],
        default: [],
        required: false 
    },
    comments: {
        type: [Comment.schema],
        required: false,
        default: []
    }
})

export const Post = mongoose.model<IPost>("Post",PostSchema); 