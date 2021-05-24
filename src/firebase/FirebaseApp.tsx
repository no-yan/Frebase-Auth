import { FC, useState, useEffect, useRef, useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import { FirebaseContext, UserContext } from "../contexts/contexts";

type Props = { children: JSX.Element };
const FirebaseApp: FC<Props> = ({ children }) => {
  console.log("rendered", Date.now());
  const [userName, setUserName] = useState<string | null>(null);
  const counterRef = useRef(0);
  const auth = firebase.auth();

  const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
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
