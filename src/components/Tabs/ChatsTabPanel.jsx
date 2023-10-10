import React, { useEffect } from 'react'
import { API_GET_CHAT_LIST, TabLabel } from '../common/Constant'
import InputGroup from '../common/InputGroup'
// import Avatar from '../common/Avatar'
import ChatListItem from "../common/ChatListItem"
// import Link from '../common/Link'
import { GetRequestAPI } from '../common/GetRequest'
import { useDispatch, useSelector } from 'react-redux'
import { setStoreChatList } from '../../redux/actions'
import { initialData } from '../../redux/reducers/allReducers'

export default function ChatsTabPanel() {
    const { access_token, chatList } = useSelector((state)=>state?.allReducers);
    const dispatch = useDispatch();
    useEffect(()=>{
        getCallChatUsersList();
        // eslint-disable-next-line
    },[])
    const getCallChatUsersList = async () =>{
        const payload = {
            limit:7,
            page:1
        }
        const response = await GetRequestAPI(API_GET_CHAT_LIST, access_token, payload);
        if(response?.status === 200){
            dispatch(setStoreChatList(response?.data))
        }else{
            dispatch(setStoreChatList(initialData?.chatList));
        }
    }

  return (
    <div className="tab-pane fade h-100 show active" id={TabLabel?.ChatsTabPanel} role="tabpanel">
        <div className="d-flex flex-column h-100 position-relative">
            <div className="hide-scrollbar">

                <div className="container py-8 pb-0">
                    {/* <!-- Title --> */}
                    <div className="mb-8">
                        <h2 className="fw-bold m-0">Chats</h2>
                    </div>

                    {/* <!-- Search --> */}
                    <div className="mb-6">
                        <form action="#">
                            <InputGroup  placeholder="Search messages or users" leftIcon={"SearchIcon"} />
                        </form>
                    </div>
                </div>
                    {/* <!-- Chats --> */}
                    <div className="card-list">
                        {/* <!-- Card --> */}
                        {chatList?.data?.map((item, index)=>(
                            <ChatListItem
                                key={index}
                                message={item?.last_message}
                                // unread={"3"}
                                {...item}
                            />
                        ))}
                        {/* <Link href="chat-group.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <Avatar variant={"online"}/>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0 ellipsis">William Wright</h5>
                                            <span className="text-muted extra-small ms-2 w-nowrap">12:45 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet my friend of mine at the departments stores now.
                                            </div>

                                            <div className="badge badge-circle bg-primary ms-5">
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer">
                                <div className="row align-items-center gx-4">
                                    <div className="col-auto">
                                            <Avatar variant={"xs"}/>
                                    </div>

                                    <div className="col">
                                        <h6 className="mb-0">Bootstrap Community</h6>
                                    </div>

                                    <div className="col-auto">
                                        <div className="avatar-group">
                                            <Avatar variant={"xs"}/>
                                            <Avatar variant={"xs"}/>
                                            <Avatar variant={"xs"}/>
                                            <Avatar variant={"xs"} text={"+5"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="chat-direct.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatars/6.jpg" alt="#" className="avatar-img"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Ollie Chandler</h5>
                                            <span className="text-muted extra-small ms-2">08:45 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet friend of mine at the departments stores now.
                                            </div>

                                            <div className="badge badge-circle bg-primary ms-5">
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="chat-empty.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatars/8.jpg" alt="#" className="avatar-img"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Elise Dennis</h5>
                                            <span className="text-muted extra-small ms-2">08:35 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                is typing<span className='typing-dots'><span>.</span><span>.</span><span>.</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="chat-direct.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar-group-trigon avatar-group-trigon-sm">
                                            <div className="avatar avatar-sm">
                                                <img className="avatar-img" src="assets/img/avatars/7.jpg" alt="#"/>
                                            </div>

                                            <div className="avatar avatar-sm">
                                                <img className="avatar-img" src="assets/img/avatars/9.jpg" alt="#"/>
                                            </div>

                                            <div className="avatar avatar-sm">
                                                <span className="avatar-text bg-primary">D</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Don Knight</h5>
                                            <span className="text-muted extra-small ms-2">08:35 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                I'm going to meet my friend of mine at the departments stores as soon as possible.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="chat-direct.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar">
                                            <img src="assets/img/avatars/4.jpg" alt="#" className="avatar-img"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Warren White</h5>
                                            <span className="text-muted extra-small ms-2">06:20 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="chat-direct.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar">
                                            <img src="assets/img/avatars/11.jpg" alt="#" className="avatar-img"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Mila White</h5>
                                            <span className="text-muted extra-small ms-2">04:40 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="chat-direct.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar avatar-online">
                                            <img src="assets/img/avatars/5.jpg" alt="#" className="avatar-img"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Damian Binder</h5>
                                            <span className="text-muted extra-small ms-2">02:45 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="chat-direct.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar avatar-online">
                                            <span className="avatar-text">B</span>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Bill Marrow</h5>
                                            <span className="text-muted extra-small ms-2">12:20 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="#" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar avatar-online">
                                            <span className="avatar-text">M</span>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="me-auto mb-0">Marshall Wallaker</h5>
                                            <span className="text-muted extra-small ms-2">12:18 PM</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="line-clamp me-auto">
                                                Hello! Yeah, I'm going to meet my friend of mine at the departments stores as soon as possible.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <Link href="chat-direct.html" className="card border-0 text-reset">
                            <div className="card-body">
                                <div className="row gx-5">
                                    <div className="col-auto">
                                        <div className="avatar">
                                            <svg className="avatar-img placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                <title>Placeholder</title>
                                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="d-flex align-items-center mb-3">
                                            <h5 className="placeholder-glow w-100 mb-0">
                                                <span className="placeholder col-5"></span>
                                            </h5>
                                        </div>

                                        <div className="placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-8"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link> */}
                        {/* <!-- Card --> */}

                        {/* <!-- Card --> */}
                        {/* <ChatListItem loaded/> */}
                    </div>

            </div>
        </div>
    </div>
  )
}
