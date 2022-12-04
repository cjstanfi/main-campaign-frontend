import requiredParam from "../helpers/utils/required-param";

export default function makeMainCampaignBusiness(mainCampaignBusinessInfo) {

    mainCampaignBusinessInfo = toCamel(mainCampaignBusinessInfo)
    const validMainCampaignBusiness = validate(mainCampaignBusinessInfo)
    return Object.freeze(validMainCampaignBusiness)
    function validate({
                          mainCampaignAccountId = requiredParam('main_campaign_account_id'),
                          mainCampaignBusinessName = requiredParam('main_campaign_business_name'),
                          mainCampaignBusinessId = requiredParam('main_campaign_business_id'),
                      } = {}) {
        return {
            mainCampaignAccountId,
            mainCampaignBusinessName,
            mainCampaignBusinessId
        }
    }
}
