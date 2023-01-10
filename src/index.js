import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { CookiesProvider } from "react-cookie";

const {REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID} = process.env


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
  <CookiesProvider>
    <BrowserRouter>
      <Auth0Provider
          domain={REACT_APP_AUTH0_DOMAIN}
          clientId={REACT_APP_AUTH0_CLIENT_ID}
          redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </BrowserRouter>
  </CookiesProvider>
  </React.StrictMode>
);
