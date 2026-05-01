import mongoose from "mongoose";

let cachedDb = null;

const connectDB = async () => {
    if (cachedDb) {
        console.log("✅ Using cached MongoDB connection");
        return cachedDb;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        cachedDb = db;
        console.log("✅ MongoDB Atlas Connected");
        return db;
    } catch (error) {
        console.error("❌ DB Connection Error:", error.message);
        throw error;
    }
};

export default connectDB;