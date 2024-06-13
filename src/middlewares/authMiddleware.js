import { adminAuth } from '../firebaseAdminConfig'; // Firebase admin setup
import { parseCookies } from 'nookies'; // Nookies to handle cookies in Next.js

export const verifyToken = async (req, res) => {
    const cookies = parseCookies({ req });
    const token = cookies.token;


    try {
        const decodedToken = await adminAuth.verifyIdToken(token);
        return decodedToken;
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
        return null;
    }
};