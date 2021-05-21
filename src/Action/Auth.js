

import axios from 'axios';


export const authSuccess = authData => {
  return {
    
    payload: authData,
  };
};

export const authFailure = error => {
  return {
    
    payload: error,
  };
};

export const login = payload => dispatch => {
  
  axios
    .post(`/login`, payload)
    .then(res => {
      const { data } = res;
      if (data?.status === 400) {
        
      }
     
     
        
      
      
    

    }
    )
}