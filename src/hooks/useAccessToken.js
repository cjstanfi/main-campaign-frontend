import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";

export default function useAccessToken() {
    const [accessToken, setToken] = useState(null)

    const {REACT_APP_AUTH0_AUDIENCE, REACT_APP_AUTH0_SCOPE} = process.env
    const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();

    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently({
                    audience: REACT_APP_AUTH0_AUDIENCE, // Value in Identifier field for the API being called.
                    scope: REACT_APP_AUTH0_SCOPE, // Scope that exists for the API being called. You can create these through the Auth0 Management API or through the Auth0 Dashboard in the Permissions view of your API.
                });
                setToken(token)
            } catch (e) {
                console.error(e);
                try{
                    const token = await getAccessTokenWithPopup({
                        audience: REACT_APP_AUTH0_AUDIENCE, // Value in Identifier field for the API being called.
                        scope: REACT_APP_AUTH0_SCOPE, // Scope that exists for the API being called. You can create these through the Auth0 Management API or through the Auth0 Dashboard in the Permissions view of your API.
                    })
                    setToken(token)
                }catch(error) {
                    console.log(error)
                }
            }
        })();
    }, [getAccessTokenSilently]);

    return { accessToken }
}