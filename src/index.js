import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
  <CookiesProvider>
    <BrowserRouter>
      <Auth0Provider
          domain="dev-2q246pibwgnsbdgt.us.auth0.com"
          clientId="cAVdqVHKSZsyHEXoaJOvbZbCuUOwpdiP"
          redirectUri={window.location.origin}
          audience="https://dev-2q246pibwgnsbdgt.us.auth0.com/api/v2/"
          scope="read:current_user update:current_user_metadata"
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </BrowserRouter>
  </CookiesProvider>
  </React.StrictMode>
);
