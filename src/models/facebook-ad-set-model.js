import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";
import optionalParam from "../helpers/utils/optional-param";

export default function makeAdSet(adSetInfo) {
    adSetInfo = toCamel(adSetInfo)
    const validAdSet = validate(adSetInfo)
    return Object.freeze(validAdSet)
    function validate({
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
