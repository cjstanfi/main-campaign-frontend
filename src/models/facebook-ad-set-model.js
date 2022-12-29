import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";
import optionalParam from "../helpers/utils/optional-param";

export default function makeFacebookAdSet(facebookAdSetInfo) {

    facebookAdSetInfo = toCamel(facebookAdSetInfo)
    const validFacebookAdSet = validate(facebookAdSetInfo)
    return Object.freeze(validFacebookAdSet)
    function validate({
                          facebookAdSetLifetimeBudget = optionalParam(),
                          facebookAdSetDailyBudget = optionalParam(),
                          facebookAdSetEffectiveStatus = requiredParam('facebook_ad_set_effective_status'),
                          facebookAdSetImpressions = optionalParam(),
                          facebookAdSetName = requiredParam('facebook_ad_set_name'),
                          facebookAdSetReach = optionalParam(),
                          facebookAdSetSpend = optionalParam(),
                          facebookAdSetStatus = requiredParam('facebook_ad_set_status'),
                          facebookAdSetStartTime = requiredParam('facebook_ad_set_start_time'),
                          facebookAdSetStopTime = optionalParam(),
                          facebookAdSetUpdatedTime  = optionalParam(),
                          facebookCampaignId = requiredParam('facebook_campaign_id'),
                          facebookAdSetId = requiredParam('facebook_ad_set_id'),
                      } = {}) {
        return {
            facebookAdSetLifetimeBudget,
            facebookAdSetDailyBudget,
            facebookAdSetEffectiveStatus,
            facebookAdSetImpressions,
            facebookAdSetName,
            facebookAdSetReach,
            facebookAdSetSpend,
            facebookAdSetStartTime,
            facebookAdSetStatus,
            facebookAdSetStopTime,
            facebookAdSetUpdatedTime,
            facebookCampaignId,
            facebookAdSetId
        }
    }
}
