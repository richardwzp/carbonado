import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Grid from '@mui/material/Grid';

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
      <div className="appContainer">
        <Grid container className="App">
        </Grid>
      </div>
      );
  }

// <Outlet />
export default App;
