import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import { serverpath } from './globalVariables';
import { updateBio } from './redux/reducers/user';

function App() {
  // @ts-ignore: Unreachable code error
  const { userName, userBio } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [bio, setbio] = useState('');

  return (
    <div>
      <h1>User name:{userName}</h1>
      <h1>User Bio:{userBio}</h1>
      <form>
        <label>
          Update Bio:
          <textarea
            value={bio}
            onChange={(e) => {
              setbio(e.target.value);
            }}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(bio);
            dispatch(updateBio(bio));
          }}
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setbio('');
          }}
        >
          Clear
        </button>
      </form>
      <h1>{serverpath}</h1>
      <h1>Rendereing from APP.tsx</h1>
      <HomeContainer />
    </div>
  );
}

export default App;
