import React from 'react'
import DefaultLayout from '../Layout/DefaultLayout'
import Link from '../common/Link'

export default function MessagePage() {
  return (
    <DefaultLayout showNavigation={false} className={"is-visible"}>
       <div class="d-flex flex-column h-100 position-relative">
                        <div class="chat-header border-bottom py-4 py-lg-7">
                            <div class="row align-items-center">

                                <div class="col-2 d-xl-none">
                                    <Link class="icon icon-lg text-muted" href="#" data-toggle-chat="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </Link>
                                </div>

                                <div class="col-8 col-xl-12">
                                    <div class="row align-items-center text-center text-xl-start">
                                        <div class="col-12 col-xl-6">
                                            <div class="row align-items-center gx-5">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-online d-none d-xl-inline-block">
                                                        <img class="avatar-img" src="assets/img/avatars/2.jpg" alt=""/>
                                                    </div>
                                                </div>

                                                <div class="col overflow-hidden">
                                                    <h5 class="text-truncate">Ollie Chandler</h5>
                                                    <p class="text-truncate">is typing<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-6 d-none d-xl-block">
                                            <div class="row align-items-center justify-content-end gx-6">
                                                <div class="col-auto">
                                                    <Link href="#" class="icon icon-lg text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                    </Link>
                                                </div>

                                                <div class="col-auto">
                                                    <div class="avatar-group">
                                                        <Link href="#" class="avatar avatar-sm" data-bs-toggle="modal" data-bs-target="#modal-user-profile">
                                                            <img class="avatar-img" src="assets/img/avatars/2.jpg" alt="#"/>
                                                        </Link>

                                                        <Link href="#" class="avatar avatar-sm" data-bs-toggle="modal" data-bs-target="#modal-profile">
                                                            <img class="avatar-img" src="assets/img/avatars/1.jpg" alt="#"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-2 d-xl-none text-end">
                                    <Link href="#" class="icon icon-lg text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div class="chat-body hide-scrollbar flex-1 h-100">
                            <div class="chat-body-inner" style={{paddingBottom:"87px"}}>
                                <div class="py-6 py-lg-12">

                                    
                                    <div class="message">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/2.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Send me the files please.</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="message message-out">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/1.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <blockquote class="blockquote overflow-hidden">
                                                            <h6 class="text-reset text-truncate">William Wright</h6>
                                                            <p class="small text-truncate">Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                        </blockquote>
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="message-content">
                                                    <div class="message-text">

                                                        <div class="row align-items-center gx-4">
                                                            <div class="col-auto">
                                                                <Link href="#" class="avatar avatar-sm">
                                                                    <div class="avatar-text bg-white text-primary">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div class="col overflow-hidden">
                                                                <h6 class="text-truncate text-reset">
                                                                    <Link href="#" class="text-reset">filename.json</Link>
                                                                </h6>
                                                                <ul class="list-inline text-uppercase extra-small opacity-75 mb-0">
                                                                    <li class="list-inline-item">79.2 KB</li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="message-divider">
                                        <small class="text-muted">Monday, Sep 16</small>
                                    </div>

                                    
                                    <div class="message">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/2.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="message message-out">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/1.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-gallery">
                                                        <div class="row gx-3">
                                                            <div class="col">
                                                                <img class="img-fluid rounded" src="assets/img/chat/1.jpg" data-action="zoom" alt="" />
                                                            </div>
                                                            <div class="col">
                                                                <img class="img-fluid rounded" src="assets/img/chat/2.jpg" data-action="zoom" alt="" />
                                                            </div>
                                                            <div class="col">
                                                                <img class="img-fluid rounded" src="assets/img/chat/3.jpg" data-action="zoom" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="message">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/2.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="message-divider">
                                        <small class="text-muted">Friday, Sep 20</small>
                                    </div>

                                    
                                    <div class="message message-out">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/1.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="message">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/2.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Send me the files please</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="message message-out">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/1.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div class="message">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/2.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple?</p>
                                                    </div>

                                                    
                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message message-out">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/1.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Hey, Marshall! How are you? Can you please change the color theme of the website to pink and purple? 😂</p>
                                                    </div>

                                                    <div class="message-action">
                                                        <div class="dropdown">
                                                            <Link class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </Link>

                                                            <ul class="dropdown-menu">
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Edit</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center" href="#">
                                                                        <span class="me-auto">Reply</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <hr class="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                    <Link class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                                        <span class="me-auto">Delete</span>
                                                                        <div class="icon">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-footer">
                                                <span class="extra-small text-muted">08:45 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message">
                                        <Link href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" class="avatar avatar-responsive">
                                            <img class="avatar-img" src="assets/img/avatars/2.jpg" alt=""/>
                                        </Link>

                                        <div class="message-inner">
                                            <div class="message-body">
                                                <div class="message-content">
                                                    <div class="message-text">
                                                        <p>Chandler is typing<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
                            <div class="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
                            </div>

                            <form class="chat-form rounded-pill bg-dark" data-emoji-form="">
                                <div class="row align-items-center gx-0">
                                    <div class="col-auto">
                                        <Link href="#" class="btn btn-icon btn-link text-body rounded-circle dz-clickable" id="dz-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                        </Link>
                                    </div>

                                    <div class="col">
                                        <div class="input-group">
                                            <textarea class="form-control px-0" placeholder="Type your message..." rows="1" data-emoji-input="" data-autosize="true" style={{overflow: "hidden", overflowWrap: "break-word", resize: "none", height: "47.2px"}}></textarea>

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
                    </div> 
    </DefaultLayout>
  )
}
