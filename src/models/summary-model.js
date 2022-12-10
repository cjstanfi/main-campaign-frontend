import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";
import optionalParam from "../helpers/utils/optional-param";


export default function makeSummary(summaryInfo) {

    summaryInfo = toCamel(summaryInfo)
    const validSummary = validate(summaryInfo)
    return Object.freeze(validSummary)
    function validate({   id = requiredParam('id'),
                          name = requiredParam('name'),
                          adSetCount = optionalParam(),
                          adCount = optionalParam(),
                          revenue = requiredParam('revenue'),
                          spend = requiredParam('spend'),
                          roas = requiredParam('roas'),
                          impressions = requiredParam('impressions'),
                          reach = requiredParam('reach'),
                          leads = requiredParam('leads'),
                          conversions = requiredParam('conversions'),
                      } = {}) {
        return {
            id,
            name,
            adSetCount,
            adCount,
            revenue,
            spend,
            roas,
            impressions,
            reach,
            leads,
            conversions
        }
    }
}
