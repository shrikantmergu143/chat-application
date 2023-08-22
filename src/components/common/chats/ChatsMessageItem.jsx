import React from 'react'
import Link from '../Link'

export default function ChatsMessageItem() {
  return (
    <Link href="chat-group.html" className="card border-0 text-reset">
        <div className="card-body">
            <div className="row gx-5">
                <div className="col-auto">
                    <div className="avatar avatar-online">
                        <img src="assets/img/avatars/7.jpg" alt="#" className="avatar-img"/>
                    </div>
                </div>

                <div className="col">
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="me-auto mb-0">William Wright</h5>
                        <span className="text-muted extra-small ms-2">12:45 PM</span>
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
       {is_group&&(
         <div className="card-footer">
            <div className="row align-items-center gx-4">
                <div className="col-auto">
                    <div className="avatar avatar-xs">
                        <img className="avatar-img" src="assets/img/avatars/bootstrap.svg" alt="Bootstrap Community"/>
                    </div>
                </div>

                <div className="col">
                    <h6 className="mb-0">Bootstrap Community</h6>
                </div>

                <div className="col-auto">
                    <div className="avatar-group">
                        <div className="avatar avatar-xs">
                            <img src="assets/img/avatars/12.jpg" alt="#" className="avatar-img"/>
                        </div>

                        <div className="avatar avatar-xs">
                            <img src="assets/img/avatars/11.jpg" alt="#" className="avatar-img"/>
                        </div>

                        <div className="avatar avatar-xs">
                            <img src="assets/img/avatars/9.jpg" alt="#" className="avatar-img"/>
                        </div>

                        <div className="avatar avatar-xs">
                            <span className="avatar-text">+5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )}
    </Link>
  )
}
