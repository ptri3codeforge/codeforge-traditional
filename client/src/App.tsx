import React from 'react';
import './App.css';
import HomeContainer from './Containers/DashboardContainer';
import { serverpath } from './globalVariables';
import AppContainer from './Containers/AppContainer';


function App() {
  return (
    <div className="grid w-full h-full bg-white auto-rows-auto auto-cols-auto gap-x-1 gap-y-1">
      {/* <h1>{serverpath}</h1> */}
      <AppContainer />
    </div>
  );
}

export default App;
