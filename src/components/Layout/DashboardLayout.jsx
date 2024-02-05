import React, { useEffect } from 'react'
import InviteFriendModal from '../common/modal/InviteFriendModal';
import { App_url, TabLabel } from '../common/Constant';
import Link from '../common/Link';
import Avatar from '../common/Avatar';
// import Button from '../common/Button';
// import { useDispatch, useSelector } from 'react-redux';
// import { setStoreMessageInit } from '../../redux/actions';
// import { initialData } from '../../redux/reducers/allReducers';
const TabBarComponent = React.lazy(()=>import('./TabBarComponent'));
const SidebarComponent = React.lazy(()=>import('./Sidebar/SidebarComponent'));

function DashboardLayout(props) {
//   const {MessageList} = useSelector((state)=>state?.allReducers);
//   const dispatch = useDispatch();
  useEffect(()=>{
    clear()
    // eslint-disable-next-line
  },[])
  const clear = () =>{
    // if(MessageList === undefined){
    //   dispatch(setStoreMessageInit(initialData?.MessageList));
    // }
  }
  return (
    <div className="admin layout overflow-hidden">
        <aside className="sidebar bg-light">
            <div className="tab-content h-100" role="tablist">
                <div className="tab-pane fade h-100 show active" id={TabLabel?.FriendsTabPanel} role="tabpanel">
                    <div className="d-flex flex-column h-100">
                        <div className="hide-scrollbar">
                            <div className="container py-8">

                                {/* <!-- Title --> */}
                                <div className="mb-8">
                                    <h2 className="fw-bold m-0">Dashboard</h2>
                                </div>

                                <div className="card-list">
                                    <div className="card border-0">
                                        <div className="card-body py-4">
                                            <div className="row align-items-center gx-5">
                                                <div className="col">
                                                    <h5 className='m-0'>Dashboard</h5>
                                                    {/* <p>{names?.last}</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        <main className={`main ${props?.className}`}>
            {props?.children}
        </main>
        <InviteFriendModal/>
    </div>
  )
}
DashboardLayout.defaultProps = {
    showNavigation:true
}
export default React.memo(DashboardLayout);