import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import router from "./routes/Routes";
import FirebaseProvider from "./fireBaseProvider/FirebaseProvider";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);