import connectDB from "./lib/db.js";
import Message from "./models/Message.js";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        await connectDB();
    } catch (err) {
        console.error("Database connection error:", err);
        return res.status(500).json({ success: false, error: "Database connection failed" });
    }

    if (req.method === "POST") {
        try {
            const { name, email, message } = req.body;
            console.log("Received message from:", email);
            const newMessage = await Message.create({ name, email, message });
            return res.status(201).json({ success: true, data: newMessage });
        } catch (error) {
            console.error("Error creating message:", error);
            return res.status(500).json({ success: false, error: error.message });
        }
    } else if (req.method === "GET") {
        try {
            const messages = await Message.find().sort({ createdAt: -1 });
            return res.status(200).json(messages);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else if (req.method === "DELETE") {
        try {
            // Verify JWT Token
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return res.status(401).json({ success: false, message: "Unauthorized: Missing or invalid token" });
            }

            const token = authHeader.split(" ")[1];
            try {
                jwt.verify(token, process.env.JWT_SECRET);
            } catch (err) {
                return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
            }

            // Extract ID and delete message
            const { id } = req.query;
            if (!id) {
                return res.status(400).json({ success: false, message: "Message ID is required" });
            }

            const deletedMessage = await Message.findByIdAndDelete(id);
            if (!deletedMessage) {
                return res.status(404).json({ success: false, message: "Message not found" });
            }

            return res.status(200).json({ success: true, message: "Message deleted successfully" });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
