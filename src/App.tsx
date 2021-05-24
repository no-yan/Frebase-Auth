import React, { FC } from "react";
import initFirebase from "./firebase/initFirebase";
import SignIn from "./SignIn";

initFirebase();
const App: FC = () => {
  return (
    <div className="flex flex-row justify-between m-12 items-center px-6 h-16 bg-yellow-300">
      <p>hoge</p>
      <SignIn />
    </div>
  );
};

export default App;
