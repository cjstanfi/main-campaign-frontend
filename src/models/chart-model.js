import {toCamel} from "../helpers/utils/case";
import requiredParam from "../helpers/utils/required-param";


export default function makeChart(chartInfo) {

    chartInfo = toCamel(chartInfo)
    const validChart = validate(chartInfo)
    return Object.freeze(validChart)
    function validate({   valueDuringTimeframe = requiredParam('value_during_timeframe'),
                          timeframe = requiredParam('timeframe'),
                      } = {}) {
        return {
            valueDuringTimeframe,
            timeframe,
        }
    }
}
