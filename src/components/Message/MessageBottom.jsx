import React, { useState } from 'react'
import Link from '../common/Link'
import { PostRequestCallAPI } from '../common/PostRequest';
import { API_SEND_MESSAGE } from '../common/Constant';
import { useSelector } from 'react-redux';

export default function MessageBottom({userDetails, friendDetails}) {
    const { access_token } = useSelector((state)=>state?.allReducers);
    const [textMessage, setTextMessage] = useState('');
    const onChange = (e) =>{
        setTextMessage(e.target.value);
    }
    const clearData = () =>{
        setTextMessage()
    }

    const callSubmitForm =async (e) =>{
        e.preventDefault();
        if(textMessage!==""){
            const payload = {
                "to_id":userDetails?.id,
                "message":textMessage,
                "message_type":"text",
                "sender_name":"Shrikant Mergu",
                "device_id":"new",
                "chat_type":"single"
            }
            const URL = `${API_SEND_MESSAGE}/${friendDetails?._id}/send`;
            const response = await PostRequestCallAPI(URL, payload, access_token);
            console.log("payload", response);
        }
    }
  return (
    <div class="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
        <div class="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
        </div>

        <form class="chat-form rounded-pill bg-dark" onSubmit={callSubmitForm}>
            <div class="row align-items-center gx-0">
                <div class="col-auto">
                    <Link href="#" class="btn btn-icon btn-link text-body rounded-circle dz-clickable" id="dz-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    </Link>
                </div>

                <div class="col">
                    <div class="input-group">
                        <textarea onChange={onChange} class="form-control px-0" placeholder="Type your message..." rows="1" value={textMessage} style={{overflow: "hidden", overflowWrap: "break-word", resize: "none", height: "47.2px"}}></textarea>

                        <Link href="#" class="input-group-text text-body pe-0" data-emoji-btn="">
                            <span class="icon icon-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                            </span>
                        </Link>
                    </div>
                </div>

                <div class="col-auto">
                    <button class="btn btn-icon btn-primary rounded-circle ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
