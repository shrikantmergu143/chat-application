import React, { useMemo } from 'react'
import Link from '../common/Link'
import Avatar from '../common/Avatar'

export default function UsersList(props) {
    const callGetName = () =>{
        const name = {
            first:"",
            last:"",
            profile:"",
            text:""
        }
        if(props?.first_name && props?.last_name){
            name.first = `${props?.first_name} ${props?.last_name}`
        }
        if((!props?.first_name || !props?.last_name) && props?.username){
            name.first = props?.username
        }
        if(props?.letter){
            name.text = props?.letter
        }
        name.last = props?.email
        return name
    }
    const names = useMemo(callGetName, [props]) 
  return (
    <div className="card border-0">
        <div className="card-body">
            <div className="row align-items-center gx-5">
                <div className="col-auto">
                    {/* <Link href="#" className="avatar ">
                        <img className="avatar-img" src="assets/img/avatars/6.jpg" alt=""/>
                    </Link> */}
                    <Avatar text={names?.text} src={""} />
                </div>

                <div className="col">
                    <h5><Link href="#">{names?.first}</Link></h5>
                    <p>{names?.last}</p>
                </div>

                <div className="col-auto">
                    {/* <!-- Dropdown --> */}
                    <div className="dropdown">
                        <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="#">New message</Link></li>
                            <li><Link className="dropdown-item" href="#">Edit contact</Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <Link className="dropdown-item text-danger" href="#">Block user</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
