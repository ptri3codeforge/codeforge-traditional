import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userName: string;
  userBio: string;
}

type User = {
  userName: string;
  userBio: string;
};

const initialState: UserState = {
  userName: 'Test',
  userBio: 'This is the test users Bio',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //make sure whats passed in follows the UserState interface
    // initUser: (state, action: PayloadAction<UserState>) => {
    initUser: (state, action: PayloadAction<User>) => {
      // Use this once user is logged in and the backend has sent the user details

      // state = action.payload;  // This might work instead of below.
      state.userBio = action.payload.userBio;
      state.userName = action.payload.userName;
    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.userBio = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateBio } = userSlice.actions;

export default userSlice.reducer;
