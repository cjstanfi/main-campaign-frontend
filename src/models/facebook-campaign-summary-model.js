import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";

export default function makeFacebookCampaignSummary(facebookCampaignSummaryInfo) {

    facebookCampaignSummaryInfo = toCamel(facebookCampaignSummaryInfo)
    const validFacebookCampaignSummary = validate(facebookCampaignSummaryInfo)
    return Object.freeze(validFacebookCampaignSummary)
    function validate({   facebookCampaignId = requiredParam('facebook_campaign_id'),
                          facebookCampaignName = requiredParam('facebook_campaign_name'),
                          adSetCount = requiredParam('ad_set_count'),
                          adCount = requiredParam('ad_count'),
                          revenue = requiredParam('revenue'),
                          facebookCampaignSpend = requiredParam('facebook_campaign_spend'),
                          roas = requiredParam('roas'),
                          facebookCampaignImpressions = requiredParam('facebook_campaign_impressions'),
                          facebookCampaignReach = requiredParam('facebook_campaign_reach'),
                          leads = requiredParam('leads'),
                          conversions = requiredParam('conversions'),
                          total = requiredParam('total')
                      } = {}) {
        return {
            facebookCampaignId,
            facebookCampaignName,
            adSetCount,
            adCount,
            revenue,
            facebookCampaignSpend,
            roas,
            facebookCampaignImpressions,
            facebookCampaignReach,
            leads,
            conversions,
            total
        }
    }
}
