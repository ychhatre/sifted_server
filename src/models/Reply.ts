import mongoose from "mongoose";
import IUser from "../interfaces/user";

interface InputReply extends mongoose.Document {
    timestamp: number;
    admin: IUser["uid"];
    reply: string;
}

const ReplySchema = new mongoose.Schema({
    admin: {
        required: true,
        type:String 
    },
    timestamp: {
        default: Date.now()/1000,
        type: Date
    },
    reply: {
        type:String,
        required: true
    }
})

export default mongoose.model<InputReply>("Reply", ReplySchema); 