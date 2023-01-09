import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import useFetch from "./useFetch";

export default function useFetchWithRedux(url, params, accessToken, validator, reducer) {
    const [validData, setValidData] = useState(null)
    const {data, isPending, error} = useFetch(url, params, accessToken)
    const dispatch = useDispatch()
    useEffect(() => {
        if(data && !error){
            const tempData = data.map(model => {
                return validator(model)
            })
            dispatch(reducer(tempData))
            setValidData(tempData)
        }
    }, [data])
    return { validData, isPending, error }
}