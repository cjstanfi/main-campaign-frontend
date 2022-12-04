import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";

export default function makeSalesCrmAccount(salesCrmAccountInfo) {

    salesCrmAccountInfo = toCamel(salesCrmAccountInfo)
    const validSalesCrmAccountInfo = validate(salesCrmAccountInfo)
    return Object.freeze(validSalesCrmAccountInfo)
    function validate({
                          salesCrmAccountAccessToken = requiredParam('sales_crm_account_access_token'),
                          salesCrmAccountPlatform = requiredParam('sales_crm_account_platform'),
                          mainCampaignAccountId = requiredParam('main_campaign_account_id'),
                          salesCrmAccountId = requiredParam('sales_crm_account_id')
                      } = {}) {
        return {
            salesCrmAccountAccessToken,
            salesCrmAccountPlatform,
            mainCampaignAccountId,
            salesCrmAccountId
        }
    }
}
