import mongoose from "mongoose";
import IComment from "../interfaces/comment";
// import IUser from "../interfaces/user";
import Reply from "./Reply";

const CommentSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  timestamp: {
    default: Date.now() / 1000,
    type: Date,
  },
  comment: {
    type: String,
    required: true,
  },
  replies: {
    type: [Reply.schema],
    required: false,
  },
});

export default mongoose.model<IComment>("Comment", CommentSchema);
