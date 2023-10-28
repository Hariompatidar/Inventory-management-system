import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn : false  };

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login : (state) => {
        state.isLoggedIn = true ; 
     } , 
     logout : (state) =>{
        state.isLoggedIn = false ; 
     }
  }
});

export const {login , logout} = LoginSlice.actions;
export const isLoggedIn = (state) => state.login.isLoggedIn;
export default LoginSlice.reducer;
