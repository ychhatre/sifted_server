import mongoose from "mongoose";
import IUser from "../interfaces/user"; 

interface IReply extends mongoose.Document {
    commentID: string;
    timestamp: number;
    admin: IUser;
    reply: string;
}

export default IReply; 
