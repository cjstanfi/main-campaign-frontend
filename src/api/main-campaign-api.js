import axios from "axios";

export function getAnything(id) {
   return axios.get(`https://test.api.maincampaign.com/facebook-ad-set-daily-insight/${id}`).then(result => {
       return result
   })
}
