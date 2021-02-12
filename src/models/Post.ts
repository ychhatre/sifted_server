import mongoose from "mongoose";
import IPost from "../interfaces/post";

interface InputPost extends mongoose.Document {
    admin: IPost["admin"]
    timestamp: Number
    imagesURL: string[];
    description: string;  
    likes: string[]
    tags: string[];
}

const PostSchema: mongoose.Schema = new mongoose.Schema({
    admin: {
        required: true, 
        type:String 
    },
    timestamp: {
        default: Date.now()/1000,
        type: Date
    },
    imagesURL: {
       required: false, 
       type: Array,
       default: []
    },
    description: {
        type:String,
        required: true 
    },
    likes: {
        type: Array,
        default: [],
        required: false 
    },
    tags: {
        type: Array,
        default: [],
        required: false 
    },
})

export default mongoose.model<InputPost>("Post",PostSchema); 