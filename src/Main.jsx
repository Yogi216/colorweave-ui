import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/utilities.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/explore.css";
import "./styles/palette-card.css";
import "./styles/favorites.css";
import "./styles/login.css";
import "./styles/toast.css";
import "./styles/responsive.css";
import "./styles/scrollToTop.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <FavoritesProvider>
              <App />
            </FavoritesProvider>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
