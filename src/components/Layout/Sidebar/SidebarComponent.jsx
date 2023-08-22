import React from 'react'
import CreateTabPanel from '../../Tabs/CreateTabPanel'
import FriendsTabPanel from '../../Tabs/FriendsTabPanel'
import ChatsTabPanel from '../../Tabs/ChatsTabPanel'
import NotificationsTabPanel from '../../Tabs/NotificationsTabPanel'
import SettingsTabPanel from '../../Tabs/SettingsTabPanel'
import { TabLabel } from '../../common/Constant'
import { useSelector } from 'react-redux'

export default function SidebarComponent() {
  const activeTab = useSelector((state)=>state?.allReducers?.activeTab);

  return (
    <aside className="sidebar bg-light">
        <div className="tab-content h-100" role="tablist">
          {activeTab === TabLabel?.CreateTabPanel && <CreateTabPanel/>}
          {activeTab === TabLabel?.FriendsTabPanel && <FriendsTabPanel/>}
          {activeTab === TabLabel?.ChatsTabPanel && <ChatsTabPanel/>}
          {activeTab === TabLabel?.NotificationsTabPanel && <NotificationsTabPanel/>}
          {activeTab === TabLabel?.SettingsTabPanel && <SettingsTabPanel/>}
        </div>
    </aside>
  )
}
