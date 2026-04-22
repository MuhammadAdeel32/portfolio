import Message from "../models/Message.js";

// Save message
export const createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const newMessage = await Message.create({
            name,
            email,
            message,
        });

        res.status(201).json({
            success: true,
            data: newMessage,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Get all messages (Admin page)
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};