import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

let isConnected; // Track the connection status

export const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  await mongoose.connect(MONGODB_URI);

  isConnected = true;
  console.log("Connected to MongoDB");
};
