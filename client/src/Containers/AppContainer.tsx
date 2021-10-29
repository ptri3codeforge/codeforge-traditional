import React from 'react'
import BoardContainer from './BoardContainer'

import DashboardContainer from './DashboardContainer'
import SidebarContainer from './SidebarContainer'


const AppContainer = () => {
    return (
        <div className="flex flex row">
            <SidebarContainer />
            <DashboardContainer />
        </div>
    )
}

export default AppContainer
