import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === "POST") {
        const { username, password } = req.body;

        if (
            username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const token = jwt.sign(
                { username: process.env.ADMIN_USERNAME },
                process.env.JWT_SECRET,
                { expiresIn: "1d" }
            );

            return res.status(200).json({ success: true, token });
        }

        return res.status(401).json({ success: false, message: "Invalid credentials" });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
