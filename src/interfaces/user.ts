import mongoose from "mongoose"; 

interface IUser extends mongoose.Document {
    uid: string;
    displayName: string;
    username: string;
    email: string;
    downloadURL: string;
    aesthetic: string;
    website: string;
    bio: string;
    followers: [{ uid: string; timestamp: number }];
    following: [{ uid: string; timestamp: number }];
    isPrivate: boolean;
  }

export default IUser; 