import React from 'react'
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router';

export default function MessageItem(props) {
    const {user_id} = useSelector((state)=>state?.allReducers?.userDetails);
    const item = props?.message;
    // const params = useParams();
    // const { access_token, openFriendDetails, MessageList } = useSelector((state)=>state?.allReducers);
    // const Message = MessageList[params?.friend_id];
  return (
    <div class={`message ${user_id === item?.from_id ? "message-out":""}`}>
        {/* <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">
            <img class="avatar-img" src="assets/img/avatars/1.jpg" alt=""/>
        </Link> */}

        <div class="message-inner">
            <div class="message-body">
                <div class="message-content">
                    <div class="message-text">
                        <p>{item?.message}</p>
                    </div>
                </div>
            </div>

            <div class="message-footer">
                <span class="extra-small text-muted">08:45 PM</span>
            </div>
        </div>
    </div>
  )
}
