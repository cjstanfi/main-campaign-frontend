import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import axios from "axios";

export default function useFetch(url, params) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [cookies, setCookies] = useCookies()

    useEffect(() => {
        async function fetchingData(){
            if (isArrayItemNotNull([...params, cookies['_auth']])) {
                axios.get(url, {
                    headers: {
                        'Authorization': `Bearer ${cookies['_auth']}`
                    }
                })
                    .then(({data}) => {
                        setData(data)
                        setIsPending(false)
                        setError(null)
                    })
                    .catch(err => {
                        setIsPending(false)
                        setError(err.message)
                    })
            }
        }
         fetchingData();
        
    }, [url])

    return {data, isPending, error}

}

function isArrayItemNotNull(arr) {
    if(Array.isArray(arr)){
        const result = arr.map(element => {
            if (element) {
                return true
            } else {
                return false
            }
        })
        return result.some(element => element === false) ? false : true
    } else {
        return arr ? true : false
    }
}