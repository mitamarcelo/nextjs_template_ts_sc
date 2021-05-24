import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from 'utils/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const AuthenticationContext = React.createContext({
  login: null,
  logout: null,
  user: null,
  error: null,
});

const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const provider = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userObserved) => {
      setUser(userObserved);
    });
  }, []);

  const login = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      setUser(result.user);
      // setCredential(result.credential);
    }).catch((e) => {
      setError(e);
    });
  };

  const logout = () => {
    firebase.auth().signOut().then(() => {
      setUser(null);
    }).catch((e) => {
      setError(e);
    });
  };

  return (
    <AuthenticationContext.Provider value={{
      login,
      logout,
      user,
      error,
    }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
