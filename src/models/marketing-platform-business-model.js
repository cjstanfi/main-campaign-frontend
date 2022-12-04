import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";

export default function makeMarketingPlatformBusiness(marketingPlatformBusinessInfo) {

    marketingPlatformBusinessInfo = toCamel(marketingPlatformBusinessInfo)
    const validMarketingPlatformBusiness = validate(marketingPlatformBusinessInfo)
    return Object.freeze(validMarketingPlatformBusiness)
    function validate({
                          marketingPlatformBusinessName = requiredParam('marketing_platform_business_name'),
                          marketingPlatformBusinessType = requiredParam('marketing_platform_business_type'),
                          mainCampaignBusinessId = requiredParam('main_campaign_business_id'),
                          marketingPlatformBusinessId = requiredParam('marketing_platform_business_id'),

                      } = {}) {
        return {
            marketingPlatformBusinessName,
            marketingPlatformBusinessType,
            mainCampaignBusinessId,
            marketingPlatformBusinessId,
        }
    }
}
