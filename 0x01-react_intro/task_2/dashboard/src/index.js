import React from "react";
import ReactDOM from "react-dom/client";
import Notifications from "./Notifications";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const rootNotifications = ReactDOM.createRoot(document.getElementById("Notifications"));
rootNotifications.render(
    <React.StrictMode>
        <Notifications />
    </React.StrictMode>
);

reportWebVitals();
