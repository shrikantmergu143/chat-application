/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react'
import { TabLabel } from '../common/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { setStoreLoginUser, setStoreTabState } from '../../redux/actions';
import Avatar from '../common/Avatar';
import Icon from '../common/Icon';
import Link from '../common/Link';

export default function TabBarComponent() {
    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state?.allReducers?.activeTab);
    // console.log("activeTab", activeTab)
    const onClickTab = (e, state) =>{
        e.preventDefault();
        dispatch(setStoreTabState(state))
    }
    const getTabList = () =>{
        return [
            // { title:"Create Chat", Icon:"EditIcon", id:"tab-create-chat", badge:"", clickData:TabLabel?.CreateTabPanel},
            { title:"Chats", Icon:"ChatsIcon", id:"tab-chats",  clickData:TabLabel?.ChatsTabPanel},
            { title:"Friends", Icon:"UsersIcon", id:"tab-friends", badge:"", clickData:TabLabel?.FriendsTabPanel},
            { title:"Notifications", Icon:"NotificationIcon", id:"tab-notifications", badge:"", clickData:TabLabel?.NotificationsTabPanel},
            { title:"Settings", Icon:"SettingIcon", id:"tab-settings", badge:"", clickData:TabLabel?.SettingsTabPanel},
        ];
    }
    // eslint-disable-next-line
    const TabBarList = useMemo(getTabList, [activeTab])
    const TabListItem = ({item}) =>{
        return(
            <li className="nav-item">
                <Link className={`nav-link cursor-pointer ${activeTab == item?.clickData ?"active":""} `} id={item?.id} onClick={(e)=>onClickTab(e, item?.clickData)} title={item?.title} data-bs-toggle="tab" role="tab">
                    <div className={`icon icon-xl ${item?.badge && "icon-badged"}`}>
                        <Icon onClick={(e)=>onClickTab(e, item?.clickData)} circle className={`${item?.Icon} ${activeTab == item?.clickData ?"primary":""}`} size={"sm"} button />
                        {item?.badge && (
                            <div className="badge badge-circle bg-primary">
                                <span>4</span>
                            </div>
                        )}
                    </div>
                </Link>
            </li>
        )
    }
    const callLogOut = (e) =>{
        e.preventDefault();
        dispatch(setStoreLoginUser(""))
    }
  return (
    <nav className="navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar">
        {/* <!-- Brand --> */}
        {/* <Link title="Messenger" className="d-none d-xl-block mb-6">
            <ImageIcon className={"Logo primary"} size={"xl"}/>

        </Link> */}
         <Link href="#" className="nav-link p-0 mt-lg-2 hide-tab" data-bs-toggle="modal" data-bs-target="#modal-profile">
                   <Avatar className={"avatar avatar-online mx-auto"}/>
                </Link>

        {/* <!-- Nav items --> */}
        <div className='tabs-nav'>
        <ul className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3" role="tablist">
            {TabBarList?.map((item, index)=>(
                <TabListItem item={item} key={index} />
            ))}
            {/* <li className="nav-item">
                <Link className="nav-link py-0 py-lg-8" id="tab-create-chat" onClick={(e)=>onClickTab(e, TabLabel?.CreateTabPanel)} title="Create chat" data-bs-toggle="tab" role="tab">
                    <div className="icon icon-xl">
                        <Icon className={"EditIcon"} />
                    </div>
                </Link>
            </li> */}

            {/* <!-- Friends --> */}
            {/* <li className="nav-item">
                <Link className="nav-link py-0 py-lg-8" id="tab-friends" onClick={(e)=>onClickTab(e, TabLabel?.FriendsTabPanel)} title="Friends" data-bs-toggle="tab" role="tab">
                    <div className="icon icon-xl">
                        <Icon className={"UsersIcon"} />
                    </div>
                </Link>
            </li> */}

            {/* <!-- Chats --> */}
            {/* <li className="nav-item">
                <Link className="nav-link active py-0 py-lg-8" id="tab-chats" href="#tab-content-chats" title="Chats" data-bs-toggle="tab" role="tab">
                    <div className="icon icon-xl icon-badged">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        <div className="badge badge-circle bg-primary">
                            <span>4</span>
                        </div>
                    </div>
                </Link>
            </li> */}

            {/* <!-- Notification --> */}
            {/* <li className="nav-item">
                <Link className="nav-link py-0 py-lg-8" id="tab-notifications" href="#tab-content-notifications" title="Notifications" data-bs-toggle="tab" role="tab">
                    <div className="icon icon-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    </div>
                </Link>
            </li> */}

            {/* <!-- Switcher --> */}
            {/* <li className="nav-item d-none d-xl-block">
                <Link className="switcher-btn nav-link py-0 py-lg-8" href="#!" title="Themes">
                    <div className="switcher-icon switcher-icon-dark icon icon-xl d-none" data-theme-mode="dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </div>
                    <div className="switcher-icon switcher-icon-light icon icon-xl d-none" data-theme-mode="light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    </div>
                </Link>
            </li> */}

            {/* <!-- Settings --> */}
            {/* <li className="nav-item">
                <Link className="nav-link py-0 py-lg-8" id="tab-settings" href="#tab-content-settings" title="Settings" data-bs-toggle="tab" role="tab">
                    <div className="icon icon-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </div>
                </Link>
            </li> */}

            {/* <!-- Profile --> */}
           
        </ul>
        </div>

        <Link  className="nav-link p-0 mt-lg-2  hide-tab" onClick={callLogOut}>
            <Icon className={"SignOutIcon danger"}/>
        </Link>
    </nav>
  )
}
