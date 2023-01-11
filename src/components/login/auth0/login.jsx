import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ({ className, text }) => {
    const { loginWithRedirect } = useAuth0();

    return <button className={className} onClick={() => loginWithRedirect()}>{text ? text : "Sign In"}</button>;
};

export default Login;