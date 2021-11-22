import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeFirebase from "../components/Login/Firebase/Firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState();

  //set up firebase
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //google sign in
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //email sign in
  const emailPassSignIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //user create
  const createUserWithEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign out method
  const signOutUser = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "LogOut Safely!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setIsLoading(true);
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .then(() => setIsLoading(false))
          .then(() => setMessage("LogOut Safely!"));
      }
    });
  };

  //observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, [auth]);

  //get user
  useEffect(() => {
    fetch(`https://pacific-waters-14584.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user.email]);

  return {
    user,
    message,
    isLoading,
    name,
    auth,
    admin,
    email,
    password,
    googleSignIn,
    emailPassSignIn,
    createUserWithEmail,
    setMessage,
    setName,
    signOutUser,
    setEmail,
    setPassword,
    setIsLoading,
  };
};

export default useFirebase;
