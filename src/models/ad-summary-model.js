import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";

export default function makeAdSummary(adSummaryInfo) {

    adSummaryInfo = toCamel(adSummaryInfo)
    const validAdSummary = validate(adSummaryInfo)
    return Object.freeze(validAdSummary)
    function validate({   facebookAdId = requiredParam('facebook_ad_id'),
                          facebookAdName = requiredParam('facebook_ad_name'),
                          revenue = requiredParam('revenue'),
                          facebookAdSpend = requiredParam('facebook_ad_spend'),
                          roas = requiredParam('roas'),
                          facebookAdImpressions = requiredParam('facebook_ad_impressions'),
                          facebookAdReach = requiredParam('facebook_ad_reach'),
                          leads = requiredParam('leads'),
                          conversions = requiredParam('conversions'),
                      } = {}) {
        return {
            facebookAdId,
            facebookAdName,
            revenue,
            facebookAdSpend,
            roas,
            facebookAdImpressions,
            facebookAdReach,
            leads,
            conversions,
        }
    }
}
