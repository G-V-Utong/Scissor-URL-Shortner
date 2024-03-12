import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuv0987654321", 8);

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
  Clicks: number;
  createdBy: mongoose.Schema.Types.ObjectId
}

const schema = new mongoose.Schema({
  Clicks: {
    type: Number,
    required: true,
    default: 0
  },
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "User",
  },
  
}, { timestamps: true });

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;