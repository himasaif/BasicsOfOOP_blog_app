import { connect } from "mongoose";

export const connectionDb = async (uri?: string): Promise<void> => {
  const mongoUri = process.env.MONGO_URI ?? uri;

  if (!mongoUri) {
    throw new Error("MONGO_URI is missing. Put it in .env or pass it to connectionDb()");
  }

  try {
    await connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};
