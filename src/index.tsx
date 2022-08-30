import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Authentication from './pages/Authentication/authentication';
import Home from './pages/Home/home';
import Functions from './pages/Functions/functions';
import Hosting from './pages/Hosting/hosting';
import MachineLearning from './pages/MachineLearning/machineLearning';
import Storage from './pages/Storage/storage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
