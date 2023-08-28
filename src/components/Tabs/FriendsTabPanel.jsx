import React from 'react'
import { TabLabel } from '../common/Constant'
import Link from '../common/Link'

export default function FriendsTabPanel() {
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* <!-- List --> */}
                    <div className="card-list">
                        <div className="my-5">
                            <small className="text-uppercase text-muted">B</small>
                        </div>

                        {/* <!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar ">
                                            
                                            <img className="avatar-img" src="assets/img/avatars/6.jpg" alt=""/>
                                            
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">Bill Marrow</Link></h5>
                                        <p>last seen 3 days ago</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --> */}

                        <div className="my-5">
                            <small className="text-uppercase text-muted">D</small>
                        </div>

                        {/* <!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar ">
                                            
                                            <img className="avatar-img" src="assets/img/avatars/5.jpg" alt=""/>
                                            
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">Damian Binder</Link></h5>
                                        <p>last seen within a week</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --><!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar avatar-online">
                                            
                                            
                                            <span className="avatar-text">D</span>
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">Don Knight</Link></h5>
                                        <p>online</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --> */}

                        <div className="my-5">
                            <small className="text-uppercase text-muted">E</small>
                        </div>

                        {/* <!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar avatar-online">
                                            
                                            <img className="avatar-img" src="assets/img/avatars/8.jpg" alt=""/>
                                            
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">Elise Dennis</Link></h5>
                                        <p>online</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --> */}

                        <div className="my-5">
                            <small className="text-uppercase text-muted">M</small>
                        </div>

                        {/* <!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar ">
                                            
                                            
                                            <span className="avatar-text">M</span>
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">Marshall Wallaker</Link></h5>
                                        <p>last seen within a month</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --><!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar ">
                                            
                                            <img className="avatar-img" src="assets/img/avatars/11.jpg" alt=""/>
                                            
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">Mila White</Link></h5>
                                        <p>last seen a long time ago</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --> */}

                        <div className="my-5">
                            <small className="text-uppercase text-muted">O</small>
                        </div>

                        {/* <!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar avatar-online">
                                            
                                            
                                            <span className="avatar-text">O</span>
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">Ollie Chandler</Link></h5>
                                        <p>online</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --> */}

                        <div className="my-5">
                            <small className="text-uppercase text-muted">W</small>
                        </div>

                        {/* <!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar ">
                                            
                                            <img className="avatar-img" src="assets/img/avatars/4.jpg" alt=""/>
                                            
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">Warren White</Link></h5>
                                        <p>last seen recently</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --><!-- Card --> */}
                        <div className="card border-0">
                            <div className="card-body">

                                <div className="row align-items-center gx-5">
                                    <div className="col-auto">
                                        <Link href="#" className="avatar avatar-online">
                                            
                                            <img className="avatar-img" src="assets/img/avatars/7.jpg" alt=""/>
                                            
                                            
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <h5><Link href="#">William Wright</Link></h5>
                                        <p>online</p>
                                    </div>

                                    <div className="col-auto">
                                        {/* <!-- Dropdown --> */}
                                        <div className="dropdown">
                                            <Link className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
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
                        {/* <!-- Card --> */}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
