import React, { useEffect, useMemo } from 'react'
import { API_GET_USERS, TabLabel } from '../common/Constant'
import Link from '../common/Link'
import { useDispatch, useSelector } from 'react-redux'
import { GetRequestAPI } from '../common/GetRequest';
import { setStoreUsersList } from '../../redux/actions';
import UsersList from '../FriendsTab/UsersList';

export default function FriendsTabPanel() {
    const {access_token, usersList} = useSelector(state=>state?.allReducers);
    const dispatch = useDispatch();
    useEffect(()=>{
        getCallUserFriendList()
        // eslint-disable-next-line
    },[]);
    const getCallUserFriendList =async () =>{
        const response = await GetRequestAPI(API_GET_USERS, access_token);
        if(response?.status === 200){
            console.log("response?.data?.data", response?.data?.data)
            dispatch(setStoreUsersList(response?.data?.data))
        }else{
            dispatch(setStoreUsersList([]))
        }
        // console.log("response", usersList)
    }
    const getListGroup = () =>{
        const grouped = [];
        if(usersList){
            usersList?.forEach(obj => {
                const firstLetter = obj?.username?.charAt(0).toUpperCase();
                const groupIndex = grouped.findIndex(item => item.letter === firstLetter);
    
                if (groupIndex === -1) {
                grouped.push({ letter: firstLetter, list: [obj] });
                } else {
                grouped[groupIndex].list.push(obj);
                }
            });
    
            // Sort the grouped array by the 'letter' property
            grouped.sort((a, b) => a.letter.localeCompare(b.letter));
    
            return grouped;
        }else{
            return [];
        }
    }
    const GetUserGroupList = useMemo(getListGroup, [usersList]);
    console.log("GetUserGroupList", GetUserGroupList, usersList)
  return (
    <div className="tab-pane fade h-100 show active" id={TabLabel?.FriendsTabPanel} role="tabpanel">
        <div className="d-flex flex-column h-100">
            <div className="hide-scrollbar">
                <div className="container py-8">

                    {/* <!-- Title --> */}
                    <div className="mb-8">
                        <h2 className="fw-bold m-0">Friends</h2>
                    </div>

                    {/* <!-- Search --> */}
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

                        {/* <!-- Invite button --> */}
                        <div className="mt-5">
                            <Link href="#" className="btn btn-lg btn-primary w-100 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#modal-invite">
                                Find Friends

                                <span className="icon ms-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* <!-- List --> */}
                    {GetUserGroupList?.map((item, index)=>(
                        <div className="card-list" key={index}>
                            <div className="my-5">
                                <small className="text-uppercase text-muted">{item?.letter}</small>
                            </div>
                            {item?.list?.map((item1, index)=>(
                                <UsersList {...item1} letter={item?.letter} key={index} />
                            ))}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}
