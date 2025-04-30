import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./context/apiContext";
import { CartProvider } from "./context/cartContext";
import { MixerProvider } from "./context/mixerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/CoffeShop_frontend">
      <AuthProvider>
        <ApiProvider>
          <CartProvider>
            <MixerProvider>
              <App />
            </MixerProvider>
          </CartProvider>
        </ApiProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
