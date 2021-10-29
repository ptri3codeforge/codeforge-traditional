import React, { useState } from 'react';
import ProfileContainer from './ProfileContainer';

const HomeContainer = () => {
  const [view, setView] = useState('home');
  return (
    <div>
      <h3>Rendering from Home Container</h3>
      <button onClick={() => setView('profile')}>Profile</button>
      {view === 'profile' ? <ProfileContainer /> : ''}
    </div>
  );
};

export default HomeContainer;
