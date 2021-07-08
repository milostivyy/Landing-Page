import React from 'react';
 
import { NavLink } from 'react-router-dom';
import HomeIcon from "@material-ui/icons/Home"
import VideoChaticon from "@material-ui/icons/Call";
import ChatApplication from "@material-ui/icons/Chat";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu"
export const Navigation = () => {
    return (
       <div style={{
        display: 'flex',
        flexDirection :'column' ,
        justifyContent: 'Right',
        alignItems: 'Right',
   }}
       > 
       <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            style={{
              marginRight: 20,
            }}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
            }}
          >
            Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
        <HomeIcon style={{color:"primary" ,fontSize:"50px",padding: '0px 10px 20px 0px'}}/>
          <NavLink to="/">Home </NavLink>
          <VideoChaticon style={{color:"primary", fontSize:"50px",padding: '0px 10px 20px 0px'}}/>
          <NavLink to="/VideoChat">VideoChat</NavLink>
          <ChatApplication style={{color:"primary" ,fontSize:"50px",padding: '0px 10px 20px 0px'}}/>
          <NavLink to="/">Chat</NavLink>
          
         
       </div>
    );
}