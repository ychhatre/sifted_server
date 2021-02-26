import mongoose from "mongoose";
import IReply from "../interfaces/reply";


const ReplySchema = new mongoose.Schema({
    admin: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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

export default mongoose.model<IReply>("Reply", ReplySchema); 