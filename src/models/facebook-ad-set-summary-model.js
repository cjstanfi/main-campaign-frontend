import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";

export default function makeAdSetSummary(adSetSummaryInfo) {

    adSetSummaryInfo = toCamel(adSetSummaryInfo)
    const validAdSetSummary = validate(adSetSummaryInfo)
    return Object.freeze(validAdSetSummary)
    function validate({   facebookAdSetId = requiredParam('facebook_ad_set_id'),
                          facebookAdSetName = requiredParam('facebook_ad_set_name'),
                          adCount = requiredParam('ad_count'),
                          revenue = requiredParam('revenue'),
                          facebookAdSetSpend = requiredParam('facebook_ad_set_spend'),
                          roas = requiredParam('roas'),
                          facebookAdSetImpressions = requiredParam('facebook_ad_set_impressions'),
                          facebookAdSetReach = requiredParam('facebook_ad_set_reach'),
                          leads = requiredParam('leads'),
                          conversions = requiredParam('conversions'),
                      } = {}) {
        return {
            facebookAdSetId,
            facebookAdSetName,
            facebookAdSetSpend,
            adCount,
            revenue,
            facebookAdSetImpressions,
            roas,
            facebookAdSetReach,
            leads,
            conversions
        }
    }
}
