import mongoose from "mongoose";

interface IAesthetic extends mongoose.Document {
    name: string;
    aestheticURL: string;
    description: string;
    aestheticID: string;
}

export default IAesthetic; 