import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

export default function useFetch(url, params) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [cookies, setCookies] = useCookies()

    useEffect(() => {
        if(isArrayItemNotNull(params)) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + cookies['_auth']);

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
            };

            fetch(url, requestOptions)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data from resource')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
        }
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