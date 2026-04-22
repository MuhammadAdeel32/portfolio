import express from "express";
import {
    createMessage,
    getMessages,
} from "../controllers/messagecontroller.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

// POST → contact form
router.post("/", createMessage);

// GET → admin messages page
router.get("/", authMiddleware, getMessages);

export default router;