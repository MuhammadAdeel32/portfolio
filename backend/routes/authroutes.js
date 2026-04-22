import express from "express";
import { login } from "../controllers/authcontroller.js";

const router = express.Router();

// POST → admin login
router.post("/login", login);

export default router;
