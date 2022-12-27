import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";
import optionalParam from "../helpers/utils/optional-param";

export default function makeSalesCrmAccount(salesCrmAccountInfo) {

    salesCrmAccountInfo = toCamel(salesCrmAccountInfo)
    const validSalesCrmAccountInfo = validate(salesCrmAccountInfo)
    return Object.freeze(validSalesCrmAccountInfo)
    function validate({
                          salesCrmAccountAccessToken = requiredParam('sales_crm_account_access_token'),
                          salesCrmAccountDomainUrl = optionalParam(),
                          salesCrmAccountPlatform = requiredParam('sales_crm_account_platform'),
                          salesCrmAccountRefreshToken = optionalParam(),
                          mainCampaignAccountId = requiredParam('main_campaign_account_id'),
                          salesCrmAccountId = requiredParam('sales_crm_account_id')
                      } = {}) {
        return {
            salesCrmAccountAccessToken,
            salesCrmAccountDomainUrl,
            salesCrmAccountPlatform,
            salesCrmAccountRefreshToken,
            mainCampaignAccountId,
            salesCrmAccountId
        }
    }
}
