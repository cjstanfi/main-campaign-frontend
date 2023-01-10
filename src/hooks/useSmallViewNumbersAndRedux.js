import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import useFetch from "./useFetch";
import makeSmallViewNumbers from "../models/small-view-numbers-model";
import {setSmallViewNumbersData} from "../reducer/SmallViewNumbersSlice";
import axios from "axios";
import {dateTimeToTimestamp} from "../helpers/utils/date-to-unix-timestamp";
import useAccessToken from "./useAccessToken";

export default function useSmallViewNumbersAndRedux(marketingPlatformBusinessId, startDate, endDate) {
    const { accessToken } = useAccessToken()
    const [validDataArray, setValidDataArray] = useState([])
    const dispatch = useDispatch()


    useEffect( () => {
        const getAllSmallViewNumbers = async (marketingPlatformBusinessId) => {
            if (marketingPlatformBusinessId && startDate && endDate && accessToken) {
                const startTime = dateTimeToTimestamp(startDate)
                const endTime = dateTimeToTimestamp(endDate)
                const resultsArray = []
                const urlArray = [
                     `${process.env.REACT_APP_MAIN_CAMPAIGN_API_URL}/small-view-numbers/${marketingPlatformBusinessId}?category=leads&startTime=${startTime}&endTime=${endTime}`,
                     `${process.env.REACT_APP_MAIN_CAMPAIGN_API_URL}/small-view-numbers/${marketingPlatformBusinessId}?category=revenue&startTime=${startTime}&endTime=${endTime}`,
                     `${process.env.REACT_APP_MAIN_CAMPAIGN_API_URL}/small-view-numbers/${marketingPlatformBusinessId}?category=campaign&startTime=${startTime}&endTime=${endTime}`,
                     `${process.env.REACT_APP_MAIN_CAMPAIGN_API_URL}/small-view-numbers/${marketingPlatformBusinessId}?category=ad_set&startTime=${startTime}&endTime=${endTime}`,
                     `${process.env.REACT_APP_MAIN_CAMPAIGN_API_URL}/small-view-numbers/${marketingPlatformBusinessId}?category=ad&startTime=${startTime}&endTime=${endTime}`,
                ]

                const config = {
                    headers:{
                        Authorization: `Bearer ${accessToken}` ,
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
    }, [marketingPlatformBusinessId, startDate, endDate, accessToken])
    return { validDataArray }
}
