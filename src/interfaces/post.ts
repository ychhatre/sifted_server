import mongoose from "mongoose";
import IUser from "../interfaces/user"; 

interface IPost extends mongoose.Document {
    admin: IUser;
    timestamp: number;
    imagesURL: string[];
    description: string;  
    likes: IUser[];
    comments: Comment[];
    tags: string[];
}

export default IPost; 