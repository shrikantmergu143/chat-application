import React, { useEffect } from 'react'
import { API_RECEIVED_FRIEND_REQUESTS, API_UPDATE_FRIEND_REQUEST, TabLabel } from '../common/Constant'
import Link from '../common/Link'
import { useDispatch, useSelector } from 'react-redux';
import { GetRequestAPI } from '../common/GetRequest';
import Avatar from '../common/Avatar';
import { setStoreReceivedFriendRequest } from '../../redux/actions';
import { initialData } from '../../redux/reducers/allReducers';
import { getTimeAgo } from '../common/utils';
import Button from '../common/Button';
import { PutRequestCallAPI } from '../common/PutRequest';
import NoData from "./../../assets/img/no_data.png"

export default function NotificationsTabPanel() {
    const {access_token, ReceivedFriend} = useSelector(state=>state?.allReducers);
    const dispatch = useDispatch();
    useEffect(()=>{
        getReceivedFriendList()
        // eslint-disable-next-line
    },[]);
    const getReceivedFriendList = async () =>{
        const payload = {
            status:"pending"
        }
        const response = await GetRequestAPI(API_RECEIVED_FRIEND_REQUESTS, access_token, payload);
        if(response?.status === 200){
            dispatch(setStoreReceivedFriendRequest(response?.data))
        }else{
            dispatch(setStoreReceivedFriendRequest(initialData.ReceivedFriend))
        }
    }
    const getCallAcceptFriend = async (item, status) =>{
        const URL = `${API_UPDATE_FRIEND_REQUEST}/${item?._id}/status`;
        const payload = {
            friendRequestId:item?._id,
            status:status
        }
        const response = await PutRequestCallAPI(URL, payload, access_token);
        if(response?.status === 200){
            await getReceivedFriendList();
        }else{
        }
    }

  return (
    <div className="tab-pane fade h-100 show active" id={TabLabel?.NotificationsTabPanel} role="tabpanel">
        <div className="d-flex flex-column h-100">
            <div className="hide-scrollbar">
                <div className="container py-8">

                    <div className="mb-8">
                        <h2 className="fw-bold m-0">Notifications</h2>
                    </div>
                    <div className="mb-6">
                        <form action="#">
                            <div className="input-group">
                                <div className="input-group-text">
                                    <div className="icon icon-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                </div>

                                <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users" aria-label="Search for messages or users..."/>
                            </div>
                        </form>
                    </div>

                    <div className="card-list">
                        <div className="d-flex align-items-center my-4 px-6">
                            {/* <small className="text-muted me-auto">Today</small>
                            <Link href="#" className="text-muted small">Clear all</Link> */}
                        </div>
                        {!ReceivedFriend?.data?.length && (
                            <div className='no_data'>
                                <img src={NoData} alt='No Data Found' />
                                <span>No Data Found</span>
                            </div>
                        )}
                        {ReceivedFriend?.data?.map((item, index)=>(
                            <div className="card border-0 mb-5 accept_card" key={index}>
                                <div className="card-body">

                                    <div className="row gx-5">
                                        <div className="col-auto avatar_card">
                                            <Link  className="avatar">
                                                <Avatar text={item?.email_from?.charAt(0).toUpperCase()} />
                                                <div className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="col contact_card">
                                            <div className="d-flex align-items-center mb-2">
                                                <h5 className="me-auto mb-0">
                                                    <Link href="#">{item?.email_from}</Link>
                                                </h5>
                                                <span className="extra-small text-muted ms-2">{getTimeAgo(item?.created_at)}</span>
                                            </div>

                                            <div className="d-flex">
                                                <div className="me-auto">Send you a friend request.</div>

                                                <div hidden className="dropdown ms-5">
                                                    <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" href="#">Show less often</Link></li>
                                                        <li><Link className="dropdown-item" href="#">Hide</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="row gx-4">
                                        <div className="col">
                                            <Button onClick={()=>getCallAcceptFriend(item, "rejected")} className="btn btn-sm btn-soft-primary w-100">Hide</Button>
                                        </div>
                                        <div className="col">
                                            <Button onClick={()=>getCallAcceptFriend(item, "accepted")} className="btn btn-sm btn-primary w-100">Confirm</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
