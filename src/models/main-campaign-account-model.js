import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";


export default function makeMainCampaignAccount(mainCampaignAccountInfo) {

    mainCampaignAccountInfo = toCamel(mainCampaignAccountInfo)
    const validMainCampaignAccount = validate(mainCampaignAccountInfo)
    return Object.freeze(validMainCampaignAccount)
    function validate({
                          mainCampaignAccountName = requiredParam('main_campaign_account_name'),
                          mainCampaignAccountId = requiredParam('main_campaign_account_id'),
                          fullName = requiredParam('full_name'),
                          password = requiredParam('password'),
                          email = requiredParam('email'),
                          phoneNumber = requiredParam('phone_number'),
                      } = {}) {
        return {
            mainCampaignAccountName,
            mainCampaignAccountId,
            fullName,
            password,
            email,
            phoneNumber
        }
    }
}
