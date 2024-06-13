// utils/tokenRefresh.js

import nookies from 'nookies';
import { auth } from '../lib/firebase';

const refreshToken = async () => {
    try {
        const user = await auth.currentUser;
        if (user) {
            const token = await user.getIdToken(true);
            nookies.set(null, 'token', token, { path: '/' });
        }
    } catch (error) {
        console.error('Token refresh error', error);
    }
};

export default refreshToken;
