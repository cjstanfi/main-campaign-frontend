import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";


export default function makeSmallViewNumbers(smallViewNumbersInfo) {

    smallViewNumbersInfo = toCamel(smallViewNumbersInfo)
    const validSmallViewNumbers = validate(smallViewNumbersInfo)
    return Object.freeze(validSmallViewNumbers)
    function validate({   title = requiredParam('title'),
                          valueDuringTimeframe = requiredParam('value_during_timeframe'),
                          valuePercentChange = requiredParam('value_percent_change'),
                      } = {}) {
        return {
            title,
            valueDuringTimeframe,
            valuePercentChange,
        }
    }
}
