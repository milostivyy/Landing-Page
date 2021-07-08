import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import io from "socket.io-client"
import "./App.css"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
  } from "react-router-dom";

import Navbar from './components/Navbar';
import { VideoChat } from "./pages/VideoChat/VideoChat"
import { Home } from "./pages/Home/Home"
import { Navigation } from "./pages/Navigation/Navigation"
import { Login } from "./pages/Login/Login"

const socket = io.connect('http://localhost:5000')

function App() {

const [token, setToken] = useState()

if(!token) {
	return <Login setToken = {setToken}  />
}
	return (
		<Router>
		<div>
          <Navbar />
            <Switch>
             <Route path="/" component= {Home} exact/>
			 <Route path="/VideoChat" exact component={VideoChat}></Route>
			 <Route path="/Login" exact component={Login}></Route>
			 <Route path="/Navigation" exact component={Navigation}></Route>
			 
           </Switch>
        </div>
		</Router>
	)
}

export default App
