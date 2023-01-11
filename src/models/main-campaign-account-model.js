import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";


export default function makeMainCampaignAccount(mainCampaignAccountInfo) {

    mainCampaignAccountInfo = toCamel(mainCampaignAccountInfo)
    const validMainCampaignAccount = validate(mainCampaignAccountInfo)
    return Object.freeze(validMainCampaignAccount)
    function validate({
                          mainCampaignAccountId = requiredParam('main_campaign_account_id'),
                      } = {}) {
        return {
            mainCampaignAccountId,
        }
    }
}
