import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";
import optionalParam from "../helpers/utils/optional-param";


export default function makeFacebookCampaign(facebookCampaignInfo) {

    facebookCampaignInfo = toCamel(facebookCampaignInfo)
    const validFacebookCampaign = validate(facebookCampaignInfo)
    return Object.freeze(validFacebookCampaign)
    function validate({   facebookAdAccountId = requiredParam('facebook_ad_account_id'),
                          facebookCampaignEffectiveStatus = requiredParam('facebook_campaign_effective_status'),
                          facebookCampaignImpressions = optionalParam(),
                          facebookCampaignName = requiredParam('facebook_campaign_name'),
                          facebookCampaignReach = optionalParam(),
                          facebookCampaignSpend = optionalParam(),
                          facebookCampaignStatus = requiredParam('facebook_campaign_status'),
                          facebookCampaignStartTime = requiredParam('facebook_campaign_start_time'),
                          facebookCampaignStopTime = optionalParam(),
                          facebookCampaignUpdatedTime = optionalParam(),
                          marketingPlatformBusinessId = requiredParam('marketing_platform_business_id'),
                          facebookCampaignId = requiredParam('facebook_campaign_id'),
                      } = {}) {
        return {
            facebookAdAccountId,
            facebookCampaignEffectiveStatus,
            facebookCampaignImpressions,
            facebookCampaignName,
            facebookCampaignReach,
            facebookCampaignSpend,
            facebookCampaignStartTime,
            facebookCampaignStatus,
            facebookCampaignStopTime,
            facebookCampaignUpdatedTime,
            marketingPlatformBusinessId,
            facebookCampaignId
        }
    }
}
