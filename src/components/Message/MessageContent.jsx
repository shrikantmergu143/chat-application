import React from 'react'
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router';
import MessageItem from './MessageItem';
import { useSelector } from 'react-redux';

export default function MessageContent(props) {
    const {user_id} = useSelector((state)=>state?.allReducers?.userDetails);
    const { messageList, friend_id } = props;
    console.log("messageList, friend_id",user_id, messageList, friend_id);
  return (
    <React.Fragment>
        {messageList?.map((item, index)=>(
            <MessageItem message={item} key={index} />
        ))}
    </React.Fragment>
  )
}
