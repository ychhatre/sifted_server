import mongoose, { Schema } from "mongoose"; 
import IAesthetic from "../interfaces/aesthetic";

const AestheticSchema:mongoose.Schema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }, 
    aestheticURL: {
      type: String,
      required: true
    }
})


export default mongoose.model<IAesthetic>("Aesthetic", AestheticSchema); 