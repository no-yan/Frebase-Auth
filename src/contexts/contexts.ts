import firebase from "firebase/app";
import { createContext } from "react";

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
});

type UserContextValue = {
  userName: string | null;
  setUserName: (userName: string | null) => void;
};

export const UserContext = createContext<UserContextValue>({
  userName: null,
  setUserName: () => undefined,
});
