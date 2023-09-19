import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { App_url } from './components/common/Constant';
import AuthLogin from './components/Layout/Auth/AuthLogin';
const LandingPage = React.lazy(()=>import('./components/Landing/LandingPage'));

function App() {
  return (
    <Routes>
      <Route exact path={App_url.Home}  element={<LandingPage/>} />
      <Route exact path={App_url.PageNotFound}  element={<LandingPage/>} />
      <Route exact path={App_url.Login}  element={<AuthLogin/>} />
    </Routes>
  );
}

export default App;
