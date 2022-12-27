import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";


export default function makeFacebookAdSetDailyInsight(facebookAdSetDailyInsightInfo) {

    facebookAdSetDailyInsightInfo = toCamel(facebookAdSetDailyInsightInfo)
    const validFacebookAdSetDailyInsightInfo = validate(facebookAdSetDailyInsightInfo)
    return Object.freeze(validFacebookAdSetDailyInsightInfo)
    function validate({
                          facebookAdSetDailyInsightCreatedTime = requiredParam('facebook_ad_set_daily_insight_created_time'),
                          facebookAdSetDailyInsightImpressions = requiredParam('facebook_ad_set_daily_insight_impressions'),
                          facebookAdSetDailyInsightReach = requiredParam('facebook_ad_set_daily_insight_reach'),
                          facebookAdSetDailyInsightSpend = requiredParam('facebook_ad_set_daily_insight_spend'),
                          facebookAdSetId = requiredParam('facebook_ad_set_id'),
                      } = {}) {
        return {
            facebookAdSetDailyInsightCreatedTime,
            facebookAdSetDailyInsightImpressions,
            facebookAdSetDailyInsightReach,
            facebookAdSetDailyInsightSpend,
            facebookAdSetId
        }
    }
}
