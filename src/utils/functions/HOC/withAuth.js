// components/withAuth.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import nookies from 'nookies';
import { auth } from '@/src/lib/firebase';
import refreshToken from '../../tokenRefresh';
import LoadingComponent from '@/src/components/LoadingComponent/LoadingComponent';

const withAuth = (Component) => {
    return (props) => {
        const [loading, setLoading] = useState(true);
        const router = useRouter();

        useEffect(() => {
            const verify = async () => {
                const cookies = nookies.get(null);
                if (!cookies.token) {
                    router.push('/');
                    return;
                }

                try {
                    const user = await auth.currentUser;
                    const token = await user.getIdToken(true);
                    nookies.set(null, 'token', token, { path: '/' });

                    setLoading(false);

                    // Set up interval to refresh token
                    const interval = setInterval(refreshToken, 30 * 60 * 1000); // Refresh every 30 minutes
                    return () => clearInterval(interval);
                } catch (error) {
                    router.push('/');
                }
            };

            verify();
        }, [router]);

        if (loading) {
            return <LoadingComponent />
        }

        return <Component { ...props } />;
    };
};

export default withAuth;