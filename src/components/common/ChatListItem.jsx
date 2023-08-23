import React from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import Avatar from "./Avatar"
export default function ChatListItem(props) {
    const LayoutChat = () =>{
        if(props?.loaded){
            return(
                <>
                    <div className="col-auto">
                        <div className="avatar">
                            <svg className="avatar-img placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="#868e96"></rect>
                            </svg>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center mb-3">
                            <h5 className="placeholder-glow  w-100  mb-0">
                                <span className="placeholder col-5"></span>
                            </h5>
                        </div>

                        <div className="placeholder-glow">
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-8"></span>
                        </div>
                    </div>
                </>
            )
        }
        return(
            <>
                <div className="col-auto">
                    <Avatar variant={"online"}/>
                </div>

                <div className="col">
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="me-auto mb-0 ellipsis">{props?.name}</h5>
                        <span className="text-muted extra-small ms-2 w-nowrap">{props?.time}</span>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="line-clamp me-auto">
                        {props?.message}
                        </div>

                        {props?.unread &&(
                            <div className="badge badge-circle bg-primary ms-5">
                                <span>{props?.unread}</span>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
    const CommunityLayout = () =>{
        if(props?.community){
            return(
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
            )
        }
    }
  return (
    <Link href="chat-direct.html" className="card border-0 text-reset">
        <div className="card-body">
            <div className="row gx-5">
                {LayoutChat()}
                {CommunityLayout()}
            </div>
        </div>
    </Link>
  )
}

ChatListItem.propTypes = {
    loaded: PropTypes.bool,
    name: PropTypes.any,
    message: PropTypes.any,
    time: PropTypes.any,
    unread: PropTypes.any
}
ChatListItem.defaultProps = {
    loaded: false,
    name: "",
    message: "",
    time: "",
    unread:""
}