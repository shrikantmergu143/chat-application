import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { GetRequestAPI } from './GetRequest';
import { API_USER_GET } from './Constant';

export default function CommonInitial() {
  const {access_token} = useSelector(state=>state?.allReducers);

  useEffect(()=>{
    if(access_token){
        callGetUserDetails();
    }
  },[access_token]);

  const callGetUserDetails =async () =>{
    const response = await GetRequestAPI(API_USER_GET, access_token);
    console.log("response", response)
  }

  return (
    <div>
      
    </div>
  )
}
