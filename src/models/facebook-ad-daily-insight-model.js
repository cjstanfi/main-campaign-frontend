import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";

export default function makeFacebookAdDailyInsight(facebookAdDailyInsightInfo) {

    facebookAdDailyInsightInfo = toCamel(facebookAdDailyInsightInfo)
    const validFacebookAdDailyInsightInfo = validate(facebookAdDailyInsightInfo)
    return Object.freeze(validFacebookAdDailyInsightInfo)
    function validate({
                          facebookAdDailyInsightCreatedTime = requiredParam('facebook_ad_daily_insight_created_time'),
                          facebookAdDailyInsightImpressions = requiredParam('facebook_ad_daily_insight_impressions'),
                          facebookAdDailyInsightReach = requiredParam('facebook_ad_daily_insight_reach'),
                          facebookAdDailyInsightSpend = requiredParam('facebook_ad_daily_insight_spend'),
                          facebookAdId = requiredParam('facebook_ad_id'),
                          facebookAdDailyInsightId = requiredParam('facebook_ad_daily_insight_id'),
                      } = {}) {
        return {
            facebookAdDailyInsightCreatedTime,
            facebookAdDailyInsightImpressions,
            facebookAdDailyInsightReach,
            facebookAdDailyInsightSpend,
            facebookAdId,
            facebookAdDailyInsightId
        }
    }
}
