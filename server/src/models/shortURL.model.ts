import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuv0987654321", 8);

export interface ShortURL extends Document {
  shortId: string;
  destination: string;
  Clicks: number;
  createdBy: string
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
    type: String,
  },
  
}, { timestamps: true });

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;