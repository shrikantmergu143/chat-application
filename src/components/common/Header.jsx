import React from 'react'
import Link from '../common/Link'
import Avatar from '../common/Avatar'

export default function Header({userDetails, friendDetails}) {
  return (
    <div class="chat-header border-bottom py-4 py-lg-7 px-5">
        <div class="row align-items-center">
            <div class="col-8 col-xl-12">
                <div class="row align-items-center text-center text-xl-start">
                    <div class="col-12">
                        <div class="row align-items-center justify-content-end gx-6">
                            <div class="col-auto">
                                <Link href="#" class="icon icon-lg text-muted" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more" aria-controls="offcanvas-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
