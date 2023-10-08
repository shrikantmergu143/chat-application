import React from 'react'
import Link from '../common/Link'
import Avatar from '../common/Avatar'

export default function MessageHeader({userDetails, friendDetails}) {
  return (
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
                                <Avatar text={userDetails?.email} variant={"avatar avatar-online d-none d-xl-inline-block"} />
                            </div>

                            <div class="col overflow-hidden">
                                {userDetails?.first_name &&userDetails?.last_name ?(
                                    <h5 class="text-truncate">{userDetails?.first_name} {userDetails?.last_name}</h5>
                                ):(
                                    <h5 class="text-truncate">{userDetails?.email}</h5>
                                )}
                                {friendDetails?.is_typing && <p class="text-truncate">is typing<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></p>}
                                {(!friendDetails?.is_typing && friendDetails?.last_message) && (
                                        <p class="text-truncate">{friendDetails?.last_message?.created_at}</p>
                                )}
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

                            <div class="col-auto" hidden>
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
  )
}
