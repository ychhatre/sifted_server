import mongoose from "mongoose"; 
import IUser from "../interfaces/user"; 
 
interface InputComment extends mongoose.Document {
    admin: IUser["uid"]
    timestamp: number   
    comment : string
}

const CommentSchema: mongoose.Schema = new mongoose.Schema({
    admin: {
        type:String,
        required: true
    },
    timestamp: {
        default: Date.now()/1000,
        type: Date
    },
    comment: {
        type:String,
        required: true
    },
})


export default mongoose.model<InputComment>("Comment",CommentSchema); 