import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import TopNav from "./TopNav/TopNav";

import Authentication from './pages/Authentication/authentication';
import Home from './pages/Home/home';

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
          </Route>
        </Routes>
    </>
    </BrowserRouter>
      );
  }

// <Outlet />
export default App;
