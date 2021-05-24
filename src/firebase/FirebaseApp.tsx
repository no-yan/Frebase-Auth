import initFirebase from "./initFirebase";
import firebase from "firebase/app";
import "firebase/auth";
import { useState, useEffect, useContext, FC, useRef } from "react";
import { FirebaseContext, UserContext } from "../contexts/contexts";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

initFirebase();

const auth = firebase.auth();

type Props = { children: JSX.Element };
const FirebaseApp: FC<Props> = ({ children }) => {
  const { userName, setUserName } = useContext(UserContext);
  const counterRef = useRef(0);

  const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
    if (counterRef.current === 1 && user) {
      //processing for signing in
      console.log(user.displayName);
      setUserName(user.displayName);
    } else {
      // processing after signed out
      setUserName(null);
    }
  });

  useEffect(() => {
    if (userName) counterRef.current += 1;
    return unsubscribe;
  });

  return (
    <FirebaseContext.Provider value={{ auth }}>
      <UserContext.Provider value={{ userName, setUserName }}>
        {children}
      </UserContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseApp;
