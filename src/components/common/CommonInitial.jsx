import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetRequestAPI } from './GetRequest';
import { API_USER_GET } from './Constant';
import { setStoreLoginUser } from '../../redux/actions';

export default function CommonInitial() {
  const {access_token} = useSelector(state=>state?.allReducers);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(access_token){
        callGetUserDetails();
    }
    // eslint-disable-next-line 
  },[access_token]);

  const callGetUserDetails =async () =>{
    const response = await GetRequestAPI(API_USER_GET, access_token);
    if(response?.status === 200){
      dispatch(setStoreLoginUser({...response?.data?.userDetails, token: access_token}))
    }else if(response?.status === 403){
      dispatch(setStoreLoginUser(null))
    }
  }

  return (
    <div>
      
    </div>
  )
}
