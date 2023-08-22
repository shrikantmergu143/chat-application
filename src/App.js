import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { App_url } from './components/common/Constant';
const LandingPage = React.lazy(()=>import('./components/Landing/LandingPage'));

function App() {
  return (
    <Routes>
      <Route exact path={App_url.Home}  element={<LandingPage/>} />
      <Route exact path={App_url.PageNotFound}  element={<LandingPage/>} />
    </Routes>
  );
}

export default App;
