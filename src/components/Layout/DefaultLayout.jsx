import React, { useEffect } from 'react'
import InviteFriendModal from '../common/modal/InviteFriendModal';
import { useDispatch, useSelector } from 'react-redux';
import { setStoreMessageInit } from '../../redux/actions';
import { initialData } from '../../redux/reducers/allReducers';
const TabBarComponent = React.lazy(()=>import('./TabBarComponent'));
const SidebarComponent = React.lazy(()=>import('./Sidebar/SidebarComponent'));
// import Index from "./../../assets/img/icons/index.svg";

function DefaultLayout(props) {
  const {MessageList} = useSelector((state)=>state?.allReducers);
  const dispatch = useDispatch();
  useEffect(()=>{
    clear()
    // eslint-disable-next-line
  },[])
  const clear = () =>{
    if(MessageList === undefined){
      dispatch(setStoreMessageInit(initialData?.MessageList));
    }
  }
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