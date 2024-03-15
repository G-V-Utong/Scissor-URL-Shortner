import mongoose, { ConnectOptions } from "mongoose";
import config from "config";
import 'dotenv/config'

async function db() {
  const dbUri = process.env.DB_URI as string
  // config.get("DB_URI") as string;
  console.log("DB URI:", dbUri)
  try {
    await mongoose
      .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
      .then(() => {
        console.log(`DB connected successfully`);
      });
  } catch (e) {
    console.error(e);
  }
}

export {db};