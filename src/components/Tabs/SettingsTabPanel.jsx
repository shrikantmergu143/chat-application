import React from 'react'
import { TabLabel } from '../common/Constant'
import Link from '../common/Link'

export default function SettingsTabPanel() {
  return (
    <div className="tab-pane fade h-100 show active" id={TabLabel?.SettingsTabPanel} role="tabpanel">
        <div className="d-flex flex-column h-100">
            <div className="hide-scrollbar">
                <div className="container py-8">
                    <div className="mb-8">
                        <h2 className="fw-bold m-0">Settings</h2>
                    </div>
                    <div className="mb-6">
                        <form action="#">
                            <div className="input-group">
                                <div className="input-group-text">
                                    <div className="icon icon-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </div>
                                </div>

                                <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users" aria-label="Search for messages or users..."/>
                            </div>
                        </form>
                    </div>

                    <div className="card border-0">
                        <div className="card-body">
                            <div className="row align-items-center gx-5">
                                <div className="col-auto">
                                    <div className="avatar">
                                        <img src="assets/img/avatars/1.jpg" alt="#" className="avatar-img"/>

                                        <div className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        </div>
                                        <input id="upload-profile-photo" className="d-none" type="file"/>
                                        <label className="stretched-label mb-0" for="upload-profile-photo"></label>
                                    </div>
                                </div>
                                <div className="col">
                                    <h5>William Pearson</h5>
                                    <p>wright@studio.com</p>
                                </div>
                                <div className="col-auto">
                                    <Link href="#" className="text-muted">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Profile --> */}

                    {/* <!-- Account --> */}
                    <div className="mt-8">
                        <div className="d-flex align-items-center mb-4 px-6">
                            <small className="text-muted me-auto">Account</small>
                        </div>

                        <div className="card border-0">
                            <div className="card-body py-2">
                                {/* <!-- Accordion --> */}
                                <div className="accordion accordion-flush" id="accordion-profile">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accordion-profile-1">
                                            <Link href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-1" aria-expanded="false" aria-controls="accordion-profile-body-1">
                                                <div>
                                                    <h5>Profile settings</h5>
                                                    <p>Change your profile settings</p>
                                                </div>
                                            </Link>
                                        </div>

                                        <div id="accordion-profile-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-profile-1" data-parent="#accordion-profile">
                                            <div className="accordion-body">
                                                <div className="form-floating mb-6">
                                                    <input type="text" className="form-control" id="profile-name" placeholder="Name"/>
                                                    <label for="profile-name">Name</label>
                                                </div>

                                                <div className="form-floating mb-6">
                                                    <input type="email" className="form-control" id="profile-email" placeholder="Email address"/>
                                                    <label for="profile-email">Email</label>
                                                </div>

                                                <div className="form-floating mb-6">
                                                    <input type="text" className="form-control" id="profile-phone" placeholder="Phone"/>
                                                    <label for="profile-phone">Phone</label>
                                                </div>

                                                <div className="form-floating mb-6">
                                                    <textarea className="form-control" placeholder="Bio" id="profile-bio" data-autosize="true" style={{minHeight: "120px"}}></textarea>
                                                    <label for="profile-bio">Bio</label>
                                                </div>

                                                <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accordion-profile-2">
                                            <Link href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-2" aria-expanded="false" aria-controls="accordion-profile-body-2">
                                                <div>
                                                    <h5>Connected accounts</h5>
                                                    <p>Connect with your accounts</p>
                                                </div>
                                            </Link>
                                        </div>

                                        <div id="accordion-profile-body-2" className="accordion-collapse collapse" aria-labelledby="accordion-profile-2" data-parent="#accordion-profile">
                                            <div className="accordion-body">
                                                <div className="form-floating mb-6">
                                                    <input type="text" className="form-control" id="profile-twitter" placeholder="Twitter"/>
                                                    <label for="profile-twitter">Twitter</label>
                                                </div>

                                                <div className="form-floating mb-6">
                                                    <input type="text" className="form-control" id="profile-facebook" placeholder="Facebook"/>
                                                    <label for="profile-facebook">Facebook</label>
                                                </div>

                                                <div className="form-floating mb-6">
                                                    <input type="text" className="form-control" id="profile-instagram" placeholder="Instagram"/>
                                                    <label for="profile-instagram">Instagram</label>
                                                </div>

                                                <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Switch --> */}
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h5>Appearance</h5>
                                                    <p>Choose light or dark theme</p>
                                                </div>
                                                <div className="col-auto">
                                                    <Link className="switcher-btn text-reset" href="#!" title="Themes">
                                                        <div className="switcher-icon switcher-icon-dark icon icon-lg d-none" data-theme-mode="dark">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                                        </div>
                                                        <div className="switcher-icon switcher-icon-light icon icon-lg d-none" data-theme-mode="light">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Account --> */}

                    {/* <!-- Security --> */}
                    <div className="mt-8">
                        <div className="d-flex align-items-center my-4 px-6">
                            <small className="text-muted me-auto">Security</small>
                        </div>

                        <div className="card border-0">
                            <div className="card-body py-2">
                                {/* <!-- Accordion --> */}
                                <div className="accordion accordion-flush" id="accordion-security">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accordion-security-1">
                                            <Link href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-security-body-1" aria-expanded="false" aria-controls="accordion-security-body-1">
                                                <div>
                                                    <h5>Password</h5>
                                                    <p>Change your password</p>
                                                </div>
                                            </Link>
                                        </div>

                                        <div id="accordion-security-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-security-1" data-parent="#accordion-security">
                                            <div className="accordion-body">
                                                <form action="#" autoComplete="on">
                                                    <div className="form-floating mb-6">
                                                        <input type="password" className="form-control" id="profile-current-password" placeholder="Current Password" autoComplete=""/>
                                                        <label for="profile-current-password">Current Password</label>
                                                    </div>

                                                    <div className="form-floating mb-6">
                                                        <input type="password" className="form-control" id="profile-new-password" placeholder="New password" autoComplete=""/>
                                                        <label for="profile-new-password">New password</label>
                                                    </div>

                                                    <div className="form-floating mb-6">
                                                        <input type="password" className="form-control" id="profile-verify-password" placeholder="Verify Password" autoComplete=""/>
                                                        <label for="profile-verify-password">Verify Password</label>
                                                    </div>
                                                </form>
                                                <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Switch --> */}
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h5>Two-step verifications</h5>
                                                    <p>Enable two-step verifications</p>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="accordion-security-check-1"/>
                                                        <label className="form-check-label" for="accordion-security-check-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Security --> */}

                    {/* <!-- Storage --> */}
                    <div className="mt-8">
                        <div className="d-flex align-items-center my-4 px-6">
                            <small className="text-muted me-auto">Storage</small>

                            <div className="flex align-items-center text-muted">
                                <Link href="#" className="text-muted small">Clear storage</Link>

                                <div className="icon icon-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                </div>
                            </div>
                        </div>

                        <div className="card border-0">
                            <div className="card-body py-2">
                                {/* <!-- Accordion --> */}
                                <div className="accordion accordion-flush" id="accordion-storage">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accordion-storage-1">
                                            <Link href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-storage-body-1" aria-expanded="false" aria-controls="accordion-storage-body-1">
                                                <div>
                                                    <h5>Cache</h5>
                                                    <p>Maximum cache size</p>
                                                </div>
                                            </Link>
                                        </div>

                                        <div id="accordion-storage-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-storage-1" data-parent="#accordion-storage">
                                            <div className="accordion-body">
                                                <div className="row justify-content-between mb-4">
                                                    <div className="col-auto">
                                                        <small>2 GB</small>
                                                    </div>
                                                    <div className="col-auto">
                                                        <small>4 GB</small>
                                                    </div>
                                                    <div className="col-auto">
                                                        <small>6 GB</small>
                                                    </div>
                                                    <div className="col-auto">
                                                        <small>8 GB</small>
                                                    </div>
                                                </div>
                                                <input type="range" className="form-range" min="1" max="4" step="1" id="custom-range-1"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h5>Keep media</h5>
                                                    <p>Photos, videos and other files</p>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="accordion-storage-check-1"/>
                                                        <label className="form-check-label" for="accordion-storage-check-1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Storage --> */}

                    {/* <!-- Notifications --> */}
                    <div className="mt-8">
                        <div className="d-flex align-items-center my-4 px-6">
                            <small className="text-muted me-auto">Notifications</small>
                        </div>

                        {/* <!-- Accordion --> */}
                        <div className="card border-0">
                            <div className="card-body py-2">
                                <div className="accordion accordion-flush" id="accordion-notifications">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="accordion-notifications-1">
                                            <Link href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-notifications-body-1" aria-expanded="false" aria-controls="accordion-notifications-body-1">
                                                <div>
                                                    <h5>Message</h5>
                                                    <p>Set custom notifications for users</p>
                                                </div>
                                            </Link>
                                        </div>

                                        <div id="accordion-notifications-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-notifications-1" data-parent="#accordion-notifications">
                                            <div className="accordion-body">
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <h5>Text</h5>
                                                        <p>Show text in notifications</p>
                                                    </div>

                                                    <div className="col-auto">
                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" type="checkbox" id="accordion-notifications-check-1"/>
                                                            <label className="form-check-label" for="accordion-notifications-check-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h5>Sound</h5>
                                                    <p>Enable sound notifications</p>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="accordion-notifications-check-3"/>
                                                        <label className="form-check-label" for="accordion-notifications-check-3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h5>Browser notifications</h5>
                                                    <p>Enable browser notifications</p>
                                                </div>
                                                <div className="col-auto">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="accordion-notifications-check-2" checked/>
                                                        <label className="form-check-label" for="accordion-notifications-check-2"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Notifications --> */}

                    {/* <!-- Devices --> */}
                    <div className="mt-8">
                        <div className="d-flex align-items-center my-4 px-6">
                            <small className="text-muted me-auto">Devices</small>

                            <div className="flex align-items-center text-muted">
                                <Link href="#" className="text-muted small">End all sessions</Link>

                                <div className="icon icon-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                </div>
                            </div>
                        </div>

                        <div className="card border-0">
                            <div className="card-body py-3">

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h5>Windows ⋅ USA, Houston</h5>
                                                <p>Today at 2:48 pm ⋅ Browser: Chrome</p>
                                            </div>
                                            <div className="col-auto">
                                                <span className="text-primary extra-small">active</span>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h5>iPhone ⋅ USA, Houston</h5>
                                                <p>Yesterday at 2:48 pm ⋅ Browser: Chrome</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                    {/* <!-- Devices --> */}

                </div>
            </div>
        </div>
    </div>
  )
}
