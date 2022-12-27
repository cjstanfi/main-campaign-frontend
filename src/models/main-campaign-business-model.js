import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";

export default function makeMainCampaignBusiness(mainCampaignBusinessInfo) {

    mainCampaignBusinessInfo = toCamel(mainCampaignBusinessInfo)
    const validMainCampaignBusiness = validate(mainCampaignBusinessInfo)
    return Object.freeze(validMainCampaignBusiness)
    function validate({
                          mainCampaignAccountId = requiredParam('main_campaign_account_id'),
                          mainCampaignBusinessName = requiredParam('main_campaign_business_name'),
                          mainCampaignBusinessId = requiredParam('main_campaign_business_id'),
                          mainCampaignBusinessUseFbConversionsApi = requiredParam('main_campaign_business_use_fb_conversions_api'),
                          mainCampaignBusinessConversionType = requiredParam('main_campaign_business_conversion_type')

                      } = {}) {
        return {
            mainCampaignAccountId,
            mainCampaignBusinessName,
            mainCampaignBusinessId,
            mainCampaignBusinessUseFbConversionsApi,
            mainCampaignBusinessConversionType
        }
    }
}
