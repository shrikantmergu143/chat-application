import React from 'react'
import CreateTabPanel from '../../Tabs/CreateTabPanel'
import FriendsTabPanel from '../../Tabs/FriendsTabPanel'
import ChatsTabPanel from '../../Tabs/ChatsTabPanel'
import NotificationsTabPanel from '../../Tabs/NotificationsTabPanel'
import SettingsTabPanel from '../../Tabs/SettingsTabPanel'
import { TabLabel } from '../../common/Constant'
import { useSelector } from 'react-redux'

function SidebarComponent() {
  const activeTab = useSelector((state)=>state?.allReducers?.activeTab);
  const getTabComponent = () =>{
    if(activeTab === TabLabel?.CreateTabPanel){
      return <CreateTabPanel/>
    }
    if(activeTab === TabLabel?.FriendsTabPanel){
      return <FriendsTabPanel/>
    }
    if(activeTab === TabLabel?.ChatsTabPanel){
      return <ChatsTabPanel/>
    }
    if(activeTab === TabLabel?.NotificationsTabPanel){
      return <NotificationsTabPanel/>
    }
    if(activeTab === TabLabel?.SettingsTabPanel){
      return <SettingsTabPanel/>
    }
  }
  return (
    <aside className="sidebar bg-light">
        <div className="tab-content h-100" role="tablist">
          {getTabComponent()}
        </div>
    </aside>
  )
}
export default React.memo(SidebarComponent)