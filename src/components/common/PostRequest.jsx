export const PostRequestCallAPI = async (apiurl, payload, access_token) => {
    const headers = {
      'Accept':"application/json",
    }
    if(access_token){
      headers.Authorization = `Bearer ${access_token}`
    }
    const getResponse = window.axios.post(`${process.env.REACT_APP_BASE_API}/${apiurl}`,payload,{
      headers:headers,
    }).then(function (result) {
      return result;
    }).catch((e)=>e.response);
    return getResponse;
};