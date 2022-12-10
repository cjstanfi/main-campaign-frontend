import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";

export default function makeFacebookCampaignDailyInsight(facebookCampaignDailyInsightInfo) {

    facebookCampaignDailyInsightInfo = toCamel(facebookCampaignDailyInsightInfo)
    const validFacebookCampaignDailyInsightInfo = validate(facebookCampaignDailyInsightInfo)
    return Object.freeze(validFacebookCampaignDailyInsightInfo)
    function validate({
                          facebookCampaignDailyInsightCreatedTime = requiredParam('facebook_campaign_daily_insight_created_time'),
                          facebookCampaignDailyInsightClicks = requiredParam('facebook_campaign_daily_insight_clicks'),
                          facebookCampaignDailyInsightId = requiredParam('facebook_campaign_daily_insight_id'),
                          facebookCampaignDailyInsightImpressions = requiredParam('facebook_campaign_daily_insight_impressions'),
                          facebookCampaignDailyInsightReach = requiredParam('facebook_campaign_daily_insight_reach'),
                          facebookCampaignDailyInsightSpend = requiredParam('facebook_campaign_daily_insight_spend'),
                          facebookCampaignId = requiredParam('facebook_campaign_id')
                      } = {}) {
        return {
            facebookCampaignDailyInsightCreatedTime,
            facebookCampaignDailyInsightClicks,
            facebookCampaignDailyInsightId,
            facebookCampaignDailyInsightImpressions,
            facebookCampaignDailyInsightReach,
            facebookCampaignDailyInsightSpend,
            facebookCampaignId
        }
    }
}
