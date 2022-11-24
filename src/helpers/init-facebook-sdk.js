import { accountService } from '../services';

// const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
const facebookAppId = '593152215811984'

export function initFacebookSdk() {
    return new Promise(resolve => {
        console.log("initializing fb sdk")
        // wait for facebook sdk to initialize before starting the react app
        window.fbAsyncInit = function () {
            console.log("doggy 2")
            window.FB.init({
                appId: facebookAppId,
                cookie: true,
                xfbml: true,
                version: 'v15.0'
            });

            // auto authenticate with the api if already logged in with facebook
            window.FB.getLoginStatus(response => {
                console.log("doggy 3")
                console.log(response)
                if (response.status === "connected") {
                    accountService.apiAuthenticate(response.authResponse.accessToken).then(resolve);
                } else {
                    resolve();
                }
            });
        };

        // load facebook sdk script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
}
