// eslint-disable-next-line
import React, { useEffect } from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Navigate, Route, Routes } from 'react-router';
import { App_url } from './components/common/Constant';
import { useSelector } from 'react-redux';
import './App.css';
import firebase from "firebase/compat/app"
import AuthLogin from'./components/Layout/Auth/AuthLogin'
import AuthRegister from './components/Layout/Auth/AuthRegister'
import LandingPage from './components/Landing/LandingPage'
import CommonInitial from "./components/common/CommonInitial"
import MessagePage from './components/Message/MessagePage';
import DashboardPage from './components/Landing/DashboardPage';

function App() {
  const {access_token, userDetails} = useSelector(state=>state?.allReducers);
  console.log("firebase", userDetails)
  const getUserloginRoute = () =>{
    if(access_token !=="" ){
      if(userDetails?.is_admin === true && userDetails?.user_type === "admin"){
        return(
          <React.Fragment>
            <Route exact path={App_url.Dashboard}  element={<DashboardPage/>} />
            <Route exact path={App_url.Home}  element={<Navigate to={App_url.Dashboard}/>} />
          </React.Fragment>
        )
      }
      return(
        <React.Fragment>
          <Route exact path={App_url.Home}  element={<LandingPage/>} />
          <Route exact path={`${App_url.Message}/:friend_id`}  element={<MessagePage/>} />
          <Route exact path={App_url.PageNotFound}  element={<LandingPage/>} />
        </React.Fragment>
      )
    }
    return(
      <React.Fragment>
        <Route exact path={App_url.Login}  element={<AuthLogin/>} />
        <Route exact path={App_url.Register}  element={<AuthRegister/>} />
        <Route exact path={App_url.PageNotFound}  element={<Navigate replace={App_url?.Login} to={App_url.Login}/>} />
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <Routes>
        {getUserloginRoute()}
      </Routes>
      <CommonInitial/>
    </React.Fragment>
  );
}

export default React.memo(App, [firebase.auth()]);
