import { createSlice } from "@reduxjs/toolkit";

const initialState = { role: "Salesman"  };

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserRole: (state, action) => {
        state.role = action.payload.role
     }
  }
});

export const { setUserRole} = UserSlice.actions;
export const userRole = (state) => state.user.role;
export default UserSlice.reducer;
