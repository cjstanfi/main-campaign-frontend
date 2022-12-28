import {BehaviorSubject} from 'rxjs';
import axios from 'axios';
import {history} from "../helpers";

const accountSubject = new BehaviorSubject(null);

export const accountService = {
    logout,
    account: accountSubject.asObservable(),
    get accountValue () { return accountSubject.value; }
};

export async function populateFacebookData(mainCampaignAccountId, apiToken, facebookAccountId){
    return await axios.put(`https://test.api.maincampaign.com/facebook-everything/${mainCampaignAccountId}/${facebookAccountId}`,{}, {
        headers: {
            'Authorization': `Bearer ${apiToken}`
        }
    })
}

export async function sendApiToken(mainCampaignAccountId, apiToken, userId, shortLivedAccessToken, longLivedAccessToken) {

    const body = {
        "mainCampaignAccountId": mainCampaignAccountId,
        "marketingPlatformAccountId": userId,
        "marketingPlatformAccountLongLivedAccessToken": longLivedAccessToken,
        "marketingPlatformAccountShortLivedAccessToken": shortLivedAccessToken,
        "marketingPlatformAccountPlatform": "facebook"
    }
    console.log(body)
    return await axios.put(`https://test.api.maincampaign.com/marketing-platform-account/${userId}`, body, {
        headers: {
            'Authorization': `Bearer ${apiToken}`
        }
    })
}

function logout() {
    // revoke app permissions to logout completely because FB.logout() doesn't remove FB cookie
    window.FB.api('/me/permissions', 'delete', null, () => window.FB.logout());
    accountSubject.next(null);
    history.push('/login');
}