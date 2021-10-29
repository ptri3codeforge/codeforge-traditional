import React, { useState } from 'react';
import ProfileContainer from './ProfileContainer';


import SearchBar from '../Components/SearchBar'
import BoardContainer from './BoardContainer';

const DashboardContainer = () => {
  const [view, setView] = useState('home');
  return (
    <div className="w-full bg-mint-default">
     {/* <SidebarContainer />
      <button onClick={() => setView('profile')}>Profile</button>
      {view === 'profile' ? <ProfileContainer /> : ''} */}
      <BoardContainer />

    </div>
  );
};

export default DashboardContainer;
