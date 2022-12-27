import axios from "axios";
import {useDispatch} from "react-redux";

export default function makeAxiosGetCallWithRedux(url, validator, reducer){
    const dispatch = useDispatch()
    axios.get(url).then(data => {
        if(data) {
            const validData = data.map(model => {
                return validator(model)
            })
            dispatch(reducer(validData))
        }
    })
}