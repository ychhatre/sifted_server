import mongoose from "mongoose";
import IUser from "../interfaces/user";

const UserSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true
    },
    displayName: {
      required: true,
      max: 20,
      min: 1,
      type: String,
    },
    username: {
      required: true,
      max: 20,
      min: 1,
      type: String,
      lowercase: true,
    },
    email: {
      required: true,
      max: 20,
      min: 1,
      type: String,
    },
    downloadURL: {
      required: false,
      max: 20,
      min: 1,
      type: String,
    },
    aesthetic: {
      required: true,
      max: 20,
      min: 1,
      type: String,
    },
    website: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    followers: {
      required: false,
      type: [
      {
        uid: {
          type: String,
          required: true,
        },
        timestamp: {
          default: Date.now() / 1000,
          type: Date,
        },
      },
    ]},
    following: {
      required: false,
      type: [
      {
        uid: {
          type: String,
          required: true,
        },
        timestamp: {
          default: Date.now() / 1000,
          type: Date,
        },
      },
    ]}
  }, 
);
//testing
export default mongoose.model<IUser>("User", UserSchema);
