import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DialogProvider } from "./context/Dialog.jsx";
import { SessionProvider } from "./context/session.jsx";
import { AuthProvider } from "./context/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DialogProvider>
        <SessionProvider>
          <App />
        </SessionProvider>
      </DialogProvider>
    </AuthProvider>
  </React.StrictMode>
);
