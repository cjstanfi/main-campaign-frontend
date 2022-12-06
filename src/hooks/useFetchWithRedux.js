import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import useFetch from "./useFetch";

export default function useFetchWithRedux(url, validator, reducer) {
    const {data, isPending, error} = useFetch(url)
    const dispatch = useDispatch()

    useEffect(() => {
        if(data && !error){
            const validData = data.map(model => {
                return validator(model)
            })
            dispatch(reducer(validData))
        }
    }, [data])
}