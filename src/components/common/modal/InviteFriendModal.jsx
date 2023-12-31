// eslint-disable-next-line 
import React, { useEffect, useState } from 'react'
import { Modal } from 'rsuite'
import Button from '../Button'
import Icon from '../Icon'
import { useDispatch, useSelector } from 'react-redux'
import { setShowModal, setShowToast } from '../../../redux/actions'
import InputGroup from '../InputGroup'
import { validateEmail } from '../utils'
import { PostRequestCallAPI } from '../PostRequest'
import { API_FRIEND_SEND_REQUEST } from '../Constant'

export default function InviteFriendModal() {
    const { ModalPopup, access_token } = useSelector((state)=>state?.allReducers);
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        callCloseModal();
        // eslint-disable-next-line
    },[])
    const callCloseModal = () =>{
        setEmail("");
        setError("");
        dispatch(setShowModal());
    }
    const callSubmitForm = async () =>{
        const validation = validateEmail(email);
        if(!validation){
            const payload = {
                email_to:email
            }
            const response = await PostRequestCallAPI(API_FRIEND_SEND_REQUEST, payload, access_token)
            if(response?.status === 200){
                dispatch(setShowToast({message:response?.data?.msg, type:"success"}))
            }else{
                dispatch(setShowToast({message:response?.data?.error, type:"info"}))
            }
            callCloseModal();
        }else{
            setError(validation);
        }
    }
  return (
    <Modal className='modal fade show' open={ModalPopup?.show === "INVITE"}  onClose={callCloseModal} prefix='modal ' dialogClassName='modal-dialog modal-dialog-centered modal-fullscreen-xl-down' containerClassName='modal-content' >
        <Modal.Body className='modal-body py-0 pb-5'>
            <div class="profile modal-gx-n">
                <div class="profile-img text-primary rounded-top-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 400 140.74"><defs></defs><g><g><path d="M400,125A1278.49,1278.49,0,0,1,0,125V0H400Z"></path><path class="cls-2" d="M361.13,128c.07.83.15,1.65.27,2.46h0Q380.73,128,400,125V87l-1,0a38,38,0,0,0-38,38c0,.86,0,1.71.09,2.55C361.11,127.72,361.12,127.88,361.13,128Z"></path><path class="cls-2" d="M12.14,119.53c.07.79.15,1.57.26,2.34v0c.13.84.28,1.66.46,2.48l.07.3c.18.8.39,1.59.62,2.37h0q33.09,4.88,66.36,8,.58-1,1.09-2l.09-.18a36.35,36.35,0,0,0,1.81-4.24l.08-.24q.33-.94.6-1.9l.12-.41a36.26,36.26,0,0,0,.91-4.42c0-.19,0-.37.07-.56q.11-.86.18-1.73c0-.21,0-.42,0-.63,0-.75.08-1.51.08-2.28a36.5,36.5,0,0,0-73,0c0,.83,0,1.64.09,2.45C12.1,119.15,12.12,119.34,12.14,119.53Z"></path><circle class="cls-2" cx="94.5" cy="57.5" r="22.5"></circle><path class="cls-2" d="M276,0a43,43,0,0,0,43,43A43,43,0,0,0,362,0Z"></path></g></g></svg>

                    <div class="position-absolute top-0 start-0 p-5">
                        <Button type="button" onClick={callCloseModal} className="btn-close btn-close-white btn-close-arrow opacity-100" >
                            <Icon className={"CloseIcon"} />
                        </Button>
                    </div>
                </div>

                <div class="profile-body">
                    <div class="avatar avatar-lg">
                        <span class="avatar-text bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                        </span>
                    </div>

                    <h4 class="fw-bold mb-1">Invite your friends</h4>
                    <p >Send invitation links to your friends</p>
                </div>
            </div>
            <div class="modal-py">
                <form class="row gy-6">
                    <div class="col-12">
                        <InputGroup type="email" label={"E-mail"} error={error} onChange={(e)=>setEmail(e.target.value)} value={email} id="invite-email" placeholder="name@example.com"/>
                    </div>

                    <div hidden class="col-12">
                        <label for="invite-message" class="form-label text-muted">Message</label>
                        <textarea class="form-control form-control-lg" id="invite-message" rows="3" placeholder="Custom message"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-py">
                <Button variant={"primary"} onClick={callSubmitForm} size={"lg"} className="w-100 d-flex align-items-center" >
                    Send
                    <span class="icon ms-auto">
                        <Icon className={"AngleRight white"} />
                    </span>
                </Button>
            </div>
        </Modal.Body>
    </Modal>
   )
}
