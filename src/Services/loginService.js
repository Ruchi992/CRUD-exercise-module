import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";

export function login(payload) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/login`, payload)
    .then((res) => res.data)
    .catch((error) => {
      throw error.response;
    });
}

export function validation(payload) {
  return axios.post(`${process.env.REACT_APP_API_URL}/login/validate`,payload).then(res=>res.data);
}

export function userInfo(payload,id){
  return axios.get("http://localhost:3001/login?q=" + this.state.name).then((data)=>{

    headers :{
      Authorization : 'Bearer' +" "+ payload
    },
    method : 'GET'
  }).then(res=>res.data).catch(error =>{
    console.log(error)
  })

}

const loginService = (props) => {
  return <div></div>;
};

// loginService.propTypes = {

// };

export default loginService;