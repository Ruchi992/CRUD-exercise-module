import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from "./pages/Home";
import Contact from "./pages/containers/Contact";
import { UserContext } from "./pages/context";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
  
} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import User from "./users/User";
import signup from "./pages/signup";
import Items from "./pages/Items";
import Logout from "./pages/Logout";
import Login from "./pages/Login";


function App(props) {
  return (
    <Router>
      <div className="App">  
      <UserContext />           

        <Switch>    
        <Route exact path="/" component={Home}  />         
      
          <Route  path="/Login" component={Login} />  
          <Route  path="/Logout" component={Logout} />   
          <Route  path="/Items" component={Items} />        
          <Route  path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;