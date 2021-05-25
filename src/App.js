import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from "./pages/Home";
import SignInOutContainer from "./pages/containers";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  
  
} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import User from "./users/User";
import signup from "./pages/SignupForm";
import Items from "./pages/Items";
import Logout from "./pages/Logout";
import Login from "./pages/Login";


function App(props) {
  return (
    <Router>
      <div className="App">  
                 

        <Switch>    
        <Route exact path="/" component={Home}  />         
      
          <Route  path="/SignInOutContainer" component={SignInOutContainer} />  
          <Route  path="/Logout" component={Logout} />   
          <Route  path="/Items" component={Items} />        
          
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;