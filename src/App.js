import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import { App_url } from './components/common/Constant';
import AuthLogin from './components/Layout/Auth/AuthLogin';
import AuthRegister from './components/Layout/Auth/AuthRegister';
import { useSelector } from 'react-redux';
const LandingPage = React.lazy(()=>import('./components/Landing/LandingPage'));

function App() {
  const {access_token} = useSelector(state=>state?.allReducers);
  if(!access_token){
    return(
    <Routes>
          <Route exact path={App_url.Login}  element={<AuthLogin/>} />
          <Route exact path={App_url.Register}  element={<AuthRegister/>} />
          <Route exact path={App_url.PageNotFound}  element={<Navigate replace={App_url?.Login} to={App_url.Login}/>} />
    </Routes>
    )
  }
  return (
    <Routes>
           <Route exact path={App_url.Home}  element={<LandingPage/>} />
            <Route exact path={App_url.PageNotFound}  element={<LandingPage/>} />
    </Routes>
  );
}

export default App;
