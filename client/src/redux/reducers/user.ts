import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userName: string;
  userBio: string;
  firstName: string;
  lastName: string;
  city: string;
  skillLevel: string;
  role: string;
  openTo: string;
  skill1: string;
  skill2: string;
  skill3: string;
  about: string;
  highlightLink1: string;
  highlightTitle1: string;
  highlightLink2: string;
  highlightTitle2: string;
  highlightLink3: string;
  highlightTitle3: string;
  highlightLink4: string;
  highlightTitle4: string;
  ghLink: string;
  liLink: string;
  twLink: string;
}

type User = {
  userName: string;
  userBio: string;
  firstName: string;
  lastName: string;
  city: string;
  skillLevel: string;
  role: string;
  openTo: string;
  skill1: string;
  skill2: string;
  skill3: string;
  about: string;
  highlightLink1: string;
  highlightTitle1: string;
  highlightLink2: string;
  highlightTitle2: string;
  highlightLink3: string;
  highlightTitle3: string;
  highlightLink4: string;
  highlightTitle4: string;
  ghLink: string;
  liLink: string;
  twLink: string;

};

const initialState: UserState = {
  userName: 'Test',
  userBio: 'This is the test users Bio',
  firstName: 'Charlie',
  lastName: 'M.',
  city: 'New York, NY',
  skillLevel: 'Senior Developer',
  role: 'Software Engineer @ RediQLess',
  openTo: 'Mentoring',
  skill1: 'React',
  skill2: 'GraphQL',
  skill3: 'NodeJS',
  about: `I’m an experienced software engineer. Most recently, I've lead an engineering team in building a developer tool, RediQLess, a client and server side caching middleware that leverages the power of GraphQL’s declarative query language and Redis’ inimitable caching mechanism.`,
  highlightLink1: 'https://medium.com/@iankimjudd/introducing-rediqless-a-caching-tool-for-graphql-apis-e4846302f040',
  highlightTitle1: 'RediQLess Medium Article',
  highlightLink2: 'https://charliemalave.com/',
  highlightTitle2: 'Portfolio Website',
  highlightLink3:  'https://anchor.fm/javaunscripted',
  highlightTitle3: 'JavaUnscripted (Podcast)',
  highlightLink4: 'https://www.canva.com/design/DAEsnmc1EOA/sl6ZPcmhpVmcsKb3mKsHtA/view',
  highlightTitle4: 'Serverless Arcitecture W/AWS Lambda Tech Talk',
  ghLink: 'https://github.com/cmalave13',
  liLink: 'https://www.linkedin.com/in/charlesmalave/',
  twLink: 'https://twitter.com/maxxatlast',
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
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.city = action.payload.city;
      state.skillLevel = action.payload.skillLevel;
      


    },
    updateBio: (state, action: PayloadAction<string>) => {
      state.userBio = action.payload;
    },


  },
});

// Action creators are generated for each case reducer function
export const { updateBio } = userSlice.actions;

export default userSlice.reducer;
