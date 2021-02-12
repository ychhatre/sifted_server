import mongoose from "mongoose";
import IReply from "./reply";
import IUser from "../interfaces/user";

interface IComment extends mongoose.Document {
  admin: IUser;
  timestamp: number;
  comment: string;
  replies: IReply[];
}

export default IComment;
