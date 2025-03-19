import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { init } from "@emailjs/browser";
// Initialize EmailJS
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
