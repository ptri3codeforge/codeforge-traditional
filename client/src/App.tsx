import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import { serverpath } from './globalVariables';

function App() {
  return (
    <div>
      <h1>{serverpath}</h1>
      <h1>Rendereing from APP.tsx</h1>
      <HomeContainer />
    </div>
  );
}

export default App;
