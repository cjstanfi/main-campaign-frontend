import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";

const FILE_NAME = 'main-campaign-account-login-model.js'

export default function makeMainCampaignLogin(
    mainCampaignLoginInfo = requiredParam('mainCampaignLoginInfo')
) {
    mainCampaignLoginInfo = toCamel(mainCampaignLoginInfo)
    const validMainCampaignLoginInfo = validate(mainCampaignLoginInfo)
    return Object.freeze(validMainCampaignLoginInfo)
    function validate({
                          password = requiredParam('password'),
                          email = requiredParam('email'),
                      } = {}) {
        return {
            login: {
                password,
                email,
            }
        }
    }
}
