import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    setUserStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {login, logout, setUserStatus} = userSlice.actions;
export default userSlice.reducer;
