import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// Use existing model if already compiled (to prevent overwriting in serverless dev environments)
export default mongoose.models.Message || mongoose.model("Message", messageSchema);
