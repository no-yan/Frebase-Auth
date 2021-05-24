import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import FirebaseApp from "./firebase/FirebaseApp";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseApp>
      <App />
    </FirebaseApp>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
