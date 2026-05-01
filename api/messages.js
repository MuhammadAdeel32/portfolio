import connectDB from "./lib/db.js";
import Message from "./models/Message.js";

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    await connectDB();

    if (req.method === "POST") {
        try {
            const { name, email, message } = req.body;
            const newMessage = await Message.create({ name, email, message });
            return res.status(201).json({ success: true, data: newMessage });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    } else if (req.method === "GET") {
        try {
            const messages = await Message.find().sort({ createdAt: -1 });
            return res.status(200).json(messages);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
