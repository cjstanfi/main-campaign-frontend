import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";
import optionalParam from "../helpers/utils/optional-param";


export default function makeSummary(summaryInfo) {

    summaryInfo = toCamel(summaryInfo)
    const validSummary = validate(summaryInfo)
    return Object.freeze(validSummary)
    function validate({   campaignName = optionalParam(),
                          adSetName = optionalParam(),
                          adName = optionalParam(),
                          childType = requiredParam('child_type'),
                          id = requiredParam('id'),
                          adSetCount = optionalParam(),
                          adCount = optionalParam(),
                          status = requiredParam('status'),
                          revenue = requiredParam('revenue'),
                          spend = requiredParam('spend'),
                          roas = requiredParam('roas'),
                          impressions = requiredParam('impressions'),
                          reach = requiredParam('reach'),
                          leads = requiredParam('leads'),
                          conversions = requiredParam('conversions'),
                          lifetimeBudget = optionalParam(),
                          dailyBudget = optionalParam()
                      } = {}) {
        return {
            campaignName,
            adSetName,
            adName,
            childType,
            id,
            adSetCount,
            adCount,
            status,
            revenue,
            spend,
            roas,
            impressions,
            reach,
            leads,
            conversions,
            lifetimeBudget,
            dailyBudget
        }
    }
}
