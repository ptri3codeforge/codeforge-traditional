import React, {useState} from 'react'
import BoardContainer from './BoardContainer'

import DashboardContainer from './DashboardContainer'
import SidebarContainer from './SidebarContainer'
import PostContainer from './PostContainer'

export const viewContext = React.createContext<any>('default');


const AppContainer = () => {
    const [view, setView] = useState('default');

    return (
        <div className="flex flex row h-full">
            <viewContext.Provider value={{view, setView}}>
                <SidebarContainer />
                <DashboardContainer />
                <PostContainer /> 
            </viewContext.Provider>
        </div>
    )
}

export default AppContainer
