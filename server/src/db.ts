import mongoose, { ConnectOptions } from "mongoose";
import config from "config";

async function db() {
  const dbUri = config.get("dbUri") as string;
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