import { User } from 'firebase';
import { useEffect, useState } from 'react';
import app, { setUserFbLogin } from '../utils/firebase';

const db = process.env.FIREBASE_DB;

export const useTracking = (trackingId: string, customUserToken: string) => {
  const [trackingData, setTrackingData] = useState<any>({});
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const listen = app.auth().onAuthStateChanged(authUser => {
      setUser(authUser);
    });
    return () => {
      listen();
    };
  });

  const getDBPath = () => {
    return `/${db}/${trackingId}`;
  };

  useEffect(() => {
    if (user) {
      const dbRoot = app.database().ref(getDBPath());
      dbRoot.on('value', snap => {
        if (snap.val()) {
          setTrackingData(snap.val());
        }
      });

      return () => dbRoot.off('value');
    }
  }, [user]);

  const signInFirebase = (token: string | undefined) => {
    if (token) {
      setUserFbLogin(token);
    }
  };

  useEffect(() => {
    if (!user) {
      signInFirebase(customUserToken);
    }
  }, [user]);

  return { trackingData, user };
};
