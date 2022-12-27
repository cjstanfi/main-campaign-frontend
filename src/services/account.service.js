import {BehaviorSubject} from 'rxjs';
import axios from 'axios';
import {history} from "../helpers";

const accountSubject = new BehaviorSubject(null);

export const accountService = {
    login,
    logout,
    account: accountSubject.asObservable(),
    get accountValue () { return accountSubject.value; }
};

async function login(mainCampaignAccountId) {
    // login with facebook then authenticate with the API to get a JWT auth token
    const { authResponse } = await new Promise(window.FB.login(function(response) {
        return response
    }, {scope: 'business_management, ads_management, ads_read, pages_read_engagement, leads_retrieval, Page Public Metadata Access, read_insights, pages_show_list, Business Asset User Profile Access'}));

    if(authResponse){
        const response1 = await sendApiToken(mainCampaignAccountId, authResponse.userID, authResponse.accessToken, null)
        const response2 = await populateFacebookData(mainCampaignAccountId, authResponse.userID)
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

async function populateFacebookData(mainCampaignAccountId, facebookAccountId){
    return await axios.put(`https://test.api.maincampaign.com/facebook-everything/${mainCampaignAccountId}/${facebookAccountId}`)
}

async function sendApiToken(mainCampaignAccountId, userId, shortLivedAccessToken, longLivedAccessToken) {
    const body = {
        "mainCampaignAccountId": mainCampaignAccountId,
        "marketingPlatformAccountId": userId,
        "marketingPlatformAccountLongLivedAccessToken": longLivedAccessToken,
        "marketingPlatformAccountShortLivedAccessToken": shortLivedAccessToken,
        "marketingPlatformAccountPlatform": "facebook"
    }
    console.log(body)
    return await axios.put(`https://test.api.maincampaign.com/marketing-platform-account/${userId}`, body)
}

function logout() {
    // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
    accountSubject.next(null);
    history.push('/login');
}
