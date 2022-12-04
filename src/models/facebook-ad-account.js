import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";


export default function makeFacebookAdAccount(facebookAdAccountInfo) {

    facebookAdAccountInfo = toCamel(facebookAdAccountInfo)
    const facebookValidAdAccount = validate(facebookAdAccountInfo)
    return Object.freeze(facebookValidAdAccount)
    function validate({
                          marketingPlatformBusinessId = requiredParam('marketing_platform_business_id'),
                          facebookAdAccountId = requiredParam('facebook_ad_account_id'),
                          facebookAdAccountName = requiredParam('facebook_ad_account_name')
                      } = {}) {
        return {
            marketingPlatformBusinessId,
            facebookAdAccountId,
            facebookAdAccountName
        }
    }
}
