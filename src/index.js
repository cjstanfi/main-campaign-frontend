import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import {Provider} from "react-redux";
import {AuthProvider} from "react-auth-kit";
import {CookiesProvider} from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CookiesProvider>
        <AuthProvider authType={"cookie"} authName={"_auth"} cookieDomain={window.location.hostname}
                      cookieSecure={false}>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </AuthProvider>
    </CookiesProvider>
);