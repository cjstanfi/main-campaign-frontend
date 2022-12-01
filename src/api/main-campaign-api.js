import axios from "axios";

export async function getAnything(id) {
    await axios.get(`https://test.api.maincampaign.com/facebook-ad-set-daily-insight/${id}`)
}
