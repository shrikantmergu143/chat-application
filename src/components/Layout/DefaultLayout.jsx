import React from 'react'
import InviteFriendModal from '../common/modal/InviteFriendModal';
const TabBarComponent = React.lazy(()=>import('./TabBarComponent'));
const SidebarComponent = React.lazy(()=>import('./Sidebar/SidebarComponent'));
// import Index from "./../../assets/img/icons/index.svg";

function DefaultLayout(props) {
  return (
    <div className="layout overflow-hidden">
         <TabBarComponent/>
      <SidebarComponent/>
      <main className={`main ${props?.className}`}>
          <div className="container h-100">
            {props?.children}
          </div>
      </main>
      <InviteFriendModal/>
  </div>
  )
}
DefaultLayout.defaultProps = {
    showNavigation:true
}
export default React.memo(DefaultLayout);