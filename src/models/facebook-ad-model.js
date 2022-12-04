import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";
import optionalParam from "../helpers/utils/optional-param";

export default function makeFacebookAd(facebookAdInfo) {

    facebookAdInfo = toCamel(facebookAdInfo)
    const validFacebookAd = validate(facebookAdInfo)
    return Object.freeze(validFacebookAd)
    function validate({
                          facebookAdEffectiveStatus = requiredParam('facebook_ad_effective_status'),
                          facebookAdImpressions = optionalParam(),
                          facebookAdName = requiredParam('facebook_ad_name'),
                          facebookAdReach = optionalParam(),
                          facebookAdSetId = requiredParam('facebook_ad_set_id'),
                          facebookAdSpend = optionalParam(),
                          facebookAdStatus = requiredParam('facebook_ad_status'),
                          facebookAdUpdatedTime = optionalParam(),
                          facebookAdId = requiredParam('facebook_ad_id'),
                      } = {}) {
        return {
            facebookAdEffectiveStatus,
            facebookAdImpressions,
            facebookAdName,
            facebookAdReach,
            facebookAdSetId,
            facebookAdSpend,
            facebookAdStatus,
            facebookAdUpdatedTime,
            facebookAdId
        }
    }
}
