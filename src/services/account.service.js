import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import { history } from "../helpers";

const accountSubject = new BehaviorSubject(null);

export const accountService = {
    login,
    logout,
    account: accountSubject.asObservable(),
    get accountValue () { return accountSubject.value; }
};

async function login() {
    // login with facebook then authenticate with the API to get a JWT auth token
    console.log("doggy 1")
    const { authResponse } = await new Promise(window.FB.login);
    console.log(authResponse)
    if(authResponse){
        const response1 = await sendApiToken(authResponse.userID, authResponse.accessToken, null)
        const response2 = await populateFacebookData('0', authResponse.userID)
        console.log(response1)
        console.log(response2)
        if (!response1) return;
    } else {
        console.log("Authorization failed from facebook")
    }

    // get return url from location state or default to home page
    const { from } = history.location.state || { from: { pathname: "/" } };
    history.push(from);
}

async function populateFacebookData(mainCampaignBusinessId, facebookAccountId){
    const response = await axios.put(`https://test.api.maincampaign.com/facebook-everything/${mainCampaignBusinessId}/${facebookAccountId}`)
    return response
}

async function sendApiToken(userId, shortLivedAccessToken, longLivedAccessToken) {
    const mainCampaignId = '0'
    const body = {
        "mainCampaignAccountId": mainCampaignId,
        "marketingPlatformAccountId": userId,
        "marketingPlatformAccountLongLivedAccessToken": longLivedAccessToken,
        "marketingPlatformAccountShortLivedAccessToken": shortLivedAccessToken,
        "marketingPlatformAccountPlatform": "facebook"
    }
    console.log(body)
    const response = await axios.put(`https://test.api.maincampaign.com/marketing-platform-account/${userId}`, body)
    return response
}

function logout() {
    // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
    accountSubject.next(null);
    history.push('/login');
}
