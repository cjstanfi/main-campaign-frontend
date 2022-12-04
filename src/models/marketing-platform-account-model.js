import {toCamel} from "../helpers/utils/case";
import optionalParam from "../helpers/utils/optional-param";
import requiredParam from "../helpers/utils/required-param";

export default function makeMarketingPlatformAccount(marketingPlatformAccountInfo) {

    marketingPlatformAccountInfo = toCamel(marketingPlatformAccountInfo)
    const validMarketingPlatformAccount = validate(marketingPlatformAccountInfo)
    return Object.freeze(validMarketingPlatformAccount)
    function validate({   marketingPlatformAccountLongLivedAccessToken = optionalParam(),
                          marketingPlatformAccountPlatform = requiredParam('marketing_platform_account_platform'),
                          marketingPlatformAccountShortLivedAccessToken = optionalParam(),
                          mainCampaignAccountId = requiredParam('main_campaign_account_id'),
                          marketingPlatformAccountId = requiredParam('marketing_platform_account_id'),
                      } = {}) {
        return {
            marketingPlatformAccountLongLivedAccessToken,
            marketingPlatformAccountPlatform,
            marketingPlatformAccountShortLivedAccessToken,
            mainCampaignAccountId,
            marketingPlatformAccountId
        }
    }
}
