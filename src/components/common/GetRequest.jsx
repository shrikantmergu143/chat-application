// GetRequestAPI
export const GetRequestAPI = async (apiurl, access_token, data) => {
    const headers = {
      'Accept':"application/json",
    }
    console.log("access_token", access_token)
    if(access_token){
      headers.Authorization = `Bearer ${access_token}`
    }
    const header = {
      headers:headers,
    }
    if(data){
      header.params = data
    }
    const getResponse = window.axios.get(`${process.env.REACT_APP_BASE_API}/${apiurl}`, header).then(function (result) {
    return result;
    }).catch((e)=>e.response)
    return getResponse;
}