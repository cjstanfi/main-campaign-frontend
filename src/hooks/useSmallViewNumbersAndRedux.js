import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import useFetch from "./useFetch";
import makeSmallViewNumbers from "../models/small-view-numbers-model";
import {setSmallViewNumbersData} from "../reducer/SmallViewNumbersSlice";
import axios from "axios";
import {dateTimeToTimestamp} from "../helpers/utils/datetoUnixTimestamp";
import {end} from "@popperjs/core";
import {useCookies} from "react-cookie";

export default function useSmallViewNumbersAndRedux(marketingPlatformBusinessId, startDate, endDate) {
    const [cookies, setCookies] = useCookies()
    const [validDataArray, setValidDataArray] = useState([])
    const dispatch = useDispatch()

    useEffect( () => {
        const getAllSmallViewNumbers = async (marketingPlatformBusinessId) => {
            if (marketingPlatformBusinessId && startDate && endDate) {
                const startTime = dateTimeToTimestamp(startDate)
                const endTime = dateTimeToTimestamp(endDate)
                const resultsArray = []
                const urlArray = [
                     `https://test.api.maincampaign.com/small-view-numbers/${marketingPlatformBusinessId}?category=leads&startTime=${startTime}&endTime=${endTime}`,
                     `https://test.api.maincampaign.com/small-view-numbers/${marketingPlatformBusinessId}?category=revenue&startTime=${startTime}&endTime=${endTime}`,
                     `https://test.api.maincampaign.com/small-view-numbers/${marketingPlatformBusinessId}?category=campaign&startTime=${startTime}&endTime=${endTime}`,
                     `https://test.api.maincampaign.com/small-view-numbers/${marketingPlatformBusinessId}?category=ad_set&startTime=${startTime}&endTime=${endTime}`,
                     `https://test.api.maincampaign.com/small-view-numbers/${marketingPlatformBusinessId}?category=ad&startTime=${startTime}&endTime=${endTime}`,
                ]

                const config = {
                    headers:{
                        Authorization: `Bearer ${cookies['_auth']}` ,
                    }
                }

                for (const url of urlArray) {
                    const {data} = await axios.get(url, config).catch(e => {
                        console.log(e)
                    })
                    if (data) {
                        const tempData = data.map(model => {
                            return makeSmallViewNumbers(model)
                        })
                        resultsArray.push(...tempData)
                    }
                }
                if(resultsArray) {
                    dispatch(setSmallViewNumbersData(resultsArray))
                    setValidDataArray(resultsArray)
                }
            }
        }
        getAllSmallViewNumbers(marketingPlatformBusinessId)
    }, [marketingPlatformBusinessId, startDate, endDate])
    return { validDataArray }
}
