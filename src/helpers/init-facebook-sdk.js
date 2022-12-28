export function facebookLogin() {
    return new Promise(async (resolve, reject) => {
        await window.FB.login((response) => {
            console.log(response)
            resolve(response)
        }, {
            scope: 'business_management, ads_management, ads_read, pages_read_engagement, leads_retrieval, read_insights, pages_show_list'
        })
    })
}