import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import messageRoutes from "./routes/messageroutes.js";
import authRoutes from "./routes/authroutes.js";

dotenv.config();

const app = express();

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});