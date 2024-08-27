import { createContext, useEffect, useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setLoading(false);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [auth]);

  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  const createUserByEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
        setLoading(true);
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
        setLoading(true);
        console.log(result.user);
      })
      .catch(error => {
        console.error(error.message);
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        setLoading(true);
        console.log(result.user);
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const authInfo = {
    user,
    createUserByEmailAndPassword,
    signInWithEmail,
    signInWithGithub,
    signInWithGoogle,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
