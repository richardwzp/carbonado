import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import TopNav from "./TopNav/TopNav";

import Authentication from './pages/Authentication/authentication';
import Home from './pages/Home/home';
import Functions from './pages/Functions/functions';
import Hosting from './pages/Hosting/hosting';
import MachineLearning from './pages/MachineLearning/machineLearning';
import Storage from './pages/Storage/storage';
import { Outlet } from "react-router-dom";
import NavBar from './component/NavBar/NavBar';

/*function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}*/
//<NavBar />
function App() {
  return (
    <BrowserRouter>
    <>
        <TopNav/>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/database" element={<Home />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/machineLearning" element={<MachineLearning />} />
          <Route path="/storage" element={<Storage />} />
          </Route>
        </Routes>
    </>
    </BrowserRouter>
      );
  }

// <Outlet />
export default App;
