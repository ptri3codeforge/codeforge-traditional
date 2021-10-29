import React, { useState, useContext } from 'react';
import ProfileContainer from './ProfileContainer';
import { viewContext } from './AppContainer';

import SearchBar from '../Components/SearchBar'
import BoardContainer from './BoardContainer';

const DashboardContainer = () => {

  const { view } = useContext<any>(viewContext)

  return (
    <div className="w-full bg-mint-default">
     {/* <SidebarContainer />
      <button onClick={() => setView('profile')}>Profile</button>
      {view === 'profile' ? <ProfileContainer /> : ''} */}
      {view === 'profile' && <ProfileContainer />}
      {view ==='dashboard' && <BoardContainer /> }

    </div>
  );
};

export default DashboardContainer;
