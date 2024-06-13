// pages/api/protected.js
import { verifyToken } from '../../src/middlewares/authMiddleware';

export default async function handler(req, res) {
    const decodedToken = await verifyToken(req, res);
    if (!decodedToken) return;

    res.status(200).json({ message: 'This is a protected route', user: decodedToken });
}
