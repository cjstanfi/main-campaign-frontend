import {toCamel} from "../helpers/utils/case";
import optionalParam from "../helpers/utils/optional-param";
import requiredParam from "../helpers/utils/required-param";

export default function makeGeneratedLead(generatedLeadInfo) {

    generatedLeadInfo = toCamel(generatedLeadInfo)
    const validGeneratedLead = validate(generatedLeadInfo)
    return Object.freeze(validGeneratedLead)
    function validate({
                          adId = optionalParam(),
                          adSetId = optionalParam(),
                          campaignId = optionalParam(),
                          generatedLeadClosedRevenue = optionalParam(),
                          generatedLeadClosedTime = optionalParam(),
                          generatedLeadCreatedTime = requiredParam('generated_lead_created_time'),
                          generatedLeadEmail = requiredParam('generated_lead_email'), //normalize email
                          generatedLeadIsConverted = requiredParam('generated_lead_is_converted'),
                          generatedLeadMainCampaignId = requiredParam('generated_lead_main_campaign_id'),
                          generatedLeadName = optionalParam(),
                          generatedLeadPhoneNumber = optionalParam(),
                          generatedLeadPlatformId = optionalParam(),
                          generatedLeadPlatformName = optionalParam(),
                          generatedLeadSalesCrmId = optionalParam(),
                          generatedLeadSalesCrmName = optionalParam(),
                          marketingPlatformBusinessId = optionalParam(),
                          mainCampaignBusinessId = optionalParam(),
                      } = {}) {
        return {
            adId,
            adSetId,
            campaignId,
            generatedLeadClosedTime,
            generatedLeadClosedRevenue,
            generatedLeadCreatedTime,
            generatedLeadEmail,
            generatedLeadIsConverted,
            generatedLeadMainCampaignId,
            generatedLeadName,
            generatedLeadPhoneNumber,
            generatedLeadPlatformId,
            generatedLeadPlatformName,
            generatedLeadSalesCrmId,
            generatedLeadSalesCrmName,
            marketingPlatformBusinessId,
            mainCampaignBusinessId
        }
    }
}
