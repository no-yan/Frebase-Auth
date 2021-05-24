import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { UserContext, FirebaseContext } from "./contexts/contexts";
import { StyledFirebaseAuth } from "react-firebaseui";

const SignIn = () => {
  const { userName, setUserName } = useContext(UserContext);
  const { auth } = useContext(FirebaseContext);
  const [st, setSt] = useState<firebase.User | null>(null);
  const firebaseAuthConfig = {
    signInFlow: "popup",

    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: { lang: "ja", prompt: "select_account" },
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: (
        { user }: firebase.auth.UserCredential,
        redirectUrl: string
      ) => {
        setUserName(user?.displayName ?? "err");
        // const credential = authResult.credential;
        // const isNewUser = authResult.additionalUserInfo?.isNewUser;
        // const providerId = authResult.additionalUserInfo?.providerId;
        // const operationType = authResult.operationType;
        // Do something with the returned AuthResult.
        // Return type determines whether we continue the redirect
        // automatically or whether we leave that to developer to handle.
        return false;
      },
    },
  };

  return (
    <div className="flex  flex-end items-center">
      {userName ? (
        <p
          className="bg-white w-full p-2 shadow-2xl border text-center font-bold　tracking-wider"
          style={{ width: 140 }}
        >
          {userName}!
        </p>
      ) : (
        <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={auth} />
      )}
    </div>
  );
};

export default SignIn;
