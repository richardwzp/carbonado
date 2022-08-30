import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { mainNavBarItems } from './consts/navbarListItems';
import {useParams, useNavigate } from 'react-router-dom';

const drawerWidth = 220;

const NavBar = () => {
    const navigate = useNavigate(); 
    return (
	<Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
	    backgroundColor: '#101F33',
	    color: '#ffffff'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavBarItems.map(({id, icon, label, route}, index) => (
            <ListItem 
		button 
		key={id}
		onClick= {() => navigate(route)}>
	    <ListItemIcon style={{color: '#ffffff'}}>{icon}</ListItemIcon>
                <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );


}



export default NavBar;
