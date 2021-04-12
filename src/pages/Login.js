import React, { useState, Component } from "react";
import axios from 'axios'

import { useHistory } from "react-router-dom";

 class Login extends Component {
   constructor()
   {
     super();
     this.state={
       name:'',
       password:''

     }
   }
   login()
   {
     console.warn(this.state)
     fetch("http://localhost:3001/login?q=" + this.state.name).then((data)=>{
          data.json().then((resp)=>{
            console.warn("resp", JSON.stringify(resp))
            if(resp.length>=0)
            {
              localStorage.setItem('login', resp)
              console.warn(this.props.history.push('Items'))

            }
            else{
              alert("please check username and password")
            }

          })  
            
          
     })
   }
   render() {
return(
  <div>
    <input type="text" 
    placeholder="enter name"
      name="user" onChange={(event)=> this.setState({name:event.target.value})}/>
    <br/> <br/>
    <input type="password" 
    placeholder="enter password"
    name="password" onChange={(event)=>this.setState({password:event.target.value})} />
    <br/> <br/>
    <button onClick={()=>{this.login()}}>Login</button>
  </div>
)
   }
 };
 export default Login;