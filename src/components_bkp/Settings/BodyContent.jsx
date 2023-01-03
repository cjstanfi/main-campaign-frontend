import React from "react";
import settingStyle from "../../assets/Settings/css/settings.module.css";
import settingo from "../../assets/Settings/images/setting-o.svg";
import notifi from "../../assets/Settings/images/notifi.svg";
import profileimage from "../../assets/Settings/images/profile-image.png";
import Badge from "../../assets/Settings/images/Badge.svg";
import profilepicbig from "../../assets/Settings/images/profile-pic-big.png";
import crmicon from "../../assets/Settings/images/crm-icon.png";
import airtablelogo from "../../assets/Settings/images/airtable-logo.png";
import facebook from "../../assets/Settings/images/facebook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPlus,
  faTrashCan,
  faFacebookF,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Header from "../Header";
export default function BodyContent() {
  return (
    <div className="setting-top content px-3">
      <section className="top-nav pb-1">
        <div className="container">
          <div className="row">
            <Header page="setting" />
          </div>
        </div>
      </section>
      <section className="settings">
        <div className="container">
          <div className="lead-scroll">
            <ul className="nav nav-tabs mt-3 setting-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#profile"
                  aria-selected="true"
                  role="tab"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#facebook"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  Facebook
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#crm"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  CRM
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#business"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  Business
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#privacy"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  Privacy
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#billing"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  Billing
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#team"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  Team
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#security"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              id="profile"
              className="container tab-pane shadow-sm my-3 rounded active"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="color-light">
                    <b>Profile Settings</b>
                  </h5>
                  <span className="color-light">
                    Update your profile Picture
                  </span>
                </div>
                <form action="">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                      <div className="img-div align-center">
                        <img
                          src={profilepicbig}
                          className="rounded-circle"
                          height="120"
                          width="120"
                          alt=""
                        />
                      </div>
                      <div className="py-3 align-center">
                        <div className="file btn btn-lg btn-primary upload-btn">
                          <FontAwesomeIcon icon={faPlus} />
                          Upload Picture
                          <input
                            type="file"
                            name="file"
                            className="upload-input"
                          />
                        </div>
                      </div>
                      <div className="py-2 input-field">
                        <label htmlFor="firstname" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstname"
                          placeholder="john"
                        />
                      </div>
                      <div className="py-2 input-field">
                        <label htmlFor="lastname" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="last-name"
                          placeholder="doe"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 py-3 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-save rounded-pill px-4"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              id="facebook"
              className="container tab-pane shadow-sm my-3 rounded fade"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="color-light">
                    <b>Facebook Settings</b>
                  </h5>
                  <span className="color-light">
                    Update your facebook settings
                  </span>
                </div>
                <form action="">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                      <div className="bg-grey rounded px-4 py-4 my-2">
                        <div className="d-md-flex justify-content-between">
                          <div className="">
                            <img src={facebook} alt="" className="faceboo" />
                            <span className="color-light">
                              <b>Facebook Account</b>
                            </span>
                            <div className="pt-3 ps-5">
                              <span className="color-light">
                                johnwick12344566
                              </span>
                            </div>
                          </div>
                          <div className="m-padd">
                            <span className="color-blue">Change Account</span>
                            <span className="display-block connected-pill rounded-pill px-4 py-2 mt-2">
                              Connected
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-grey rounded px-4 py-4 my-2">
                        <img src={facebook} alt="" className="faceboo" />
                        <span className="color-light">
                          <b>Facebook Pixel</b>
                        </span>
                        <div className="pt-3 ps-5">
                          <p className="color-light">
                            Track your Facebook campaigns, see converion rates,
                            and more.
                          </p>
                        </div>
                        <div className="ps-5">
                          <button
                            type="button"
                            className="btn btn-primary btn-save rounded-pill px-4"
                          >
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 pt-5 pb-3 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-save rounded-pill px-4"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div
              id="crm"
              className="container tab-pane shadow-sm my-3 rounded fade"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="color-light">
                    <b>CRM Settings</b>
                  </h5>
                  <span className="color-light">Update your CRM settings</span>
                </div>
                <form action="">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                      <div className="bg-grey rounded px-4 py-4 my-2">
                        <div className="">
                          <div className="">
                            <span className="color-light">
                              <b>Current CRM</b>
                            </span>
                          </div>
                          <div className="d-md-flex justify-content-between">
                            <div className="d-flex justify-content-center pt-2">
                              <div className="bg-white crm-logo-div shadow-sm py-3 px-4">
                                <img
                                  src={airtablelogo}
                                  width="110"
                                  height="25"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="m-padd">
                              <span className="color-blue">Change CRM</span>
                              <span className="display-block connected-pill rounded-pill px-4 py-2 mt-2">
                                Connected
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-9 p-0">
                          <div className="pb-5 input-field">
                            <label htmlFor="firstname" className="form-label">
                              Business Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Business Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 pe-0">
                          <div className="pb-5 input-field">
                            <label htmlFor="firstname" className="form-label">
                              CRM Icon
                            </label>
                            <div className="d-flex justify-content-between crm-icon-box bg-grey rounded py-2 px-3">
                              <img src={crmicon} alt="" />
                              <FontAwesomeIcon
                                icon={faPen}
                                className="rounded-circle px-2 py-2 edit-icon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 pt-5 pb-3 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-save rounded-pill px-4"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div
              id="business"
              className="container tab-pane shadow-sm my-3 rounded fade"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="color-light">
                    <b>Business Name Settings</b>
                  </h5>
                  <span className="color-light">Update your Business Name</span>
                </div>
                <form action="">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-5 py-5">
                      <div className="pb-5 input-field">
                        <label htmlFor="firstname" className="form-label">
                          Business Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Business Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 py-3 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-save rounded-pill px-4"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div
              id="privacy"
              className="container tab-pane shadow-sm my-3 rounded fade"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="color-light">
                    <b>Privacy Settings</b>
                  </h5>
                  <span className="color-light">Update your Password</span>
                </div>
                <form action="">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                      <div className="py-2 input-field">
                        <span className="d-flex justify-content-between">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <span className="font-12 color-blue">
                            Change Email
                          </span>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="d-flex justify-content-between pt-3 pb-1">
                        <span>
                          <b>Password</b>
                        </span>
                        <span className="font-12 color-light">
                          Last change 10 OCT, 2022
                        </span>
                      </div>
                      <div className="py-2 input-field">
                        <label htmlFor="oldpass" className="form-label">
                          Enter Old Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="old-pass"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="py-2 input-field">
                        <label htmlFor="newpass" className="form-label">
                          Enter New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="new-pass"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="py-2 input-field">
                        <label htmlFor="confirmpass" className="form-label">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="confirm-pass"
                          placeholder="Enter Password"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 py-3 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-save rounded-pill px-4"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              id="billing"
              className="container tab-pane shadow-sm my-3 rounded fade"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="color-light">
                    <b>Payment Method</b>
                  </h5>
                  <span className="color-light">
                    Update your payment method
                  </span>
                </div>
                <form action="">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                      <div className="pb-4">
                        <span>
                          <b>Payment Options</b>
                        </span>
                        <div className="bg-grey rounded px-4 pt-4 pb-3 my-2">
                          <div className="d-flex justify-content-between">
                            <div className="">
                              <svg
                                width="37"
                                height="29"
                                viewBox="0 0 37 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_199_1844)">
                                  <path
                                    d="M6.72659 28.8558V26.9365C6.72659 26.2005 6.2823 25.7208 5.52076 25.7208C5.14007 25.7208 4.72757 25.8487 4.44198 26.2646C4.21998 25.9127 3.90273 25.7208 3.42679 25.7208C3.1094 25.7208 2.7923 25.8167 2.53836 26.1686V25.7848H1.87207V28.8558H2.53836V27.1603C2.53836 26.6166 2.82395 26.3605 3.26824 26.3605C3.71224 26.3605 3.93453 26.6485 3.93453 27.1603V28.8558H4.60082V27.1603C4.60082 26.6166 4.91792 26.3605 5.33041 26.3605C5.7747 26.3605 5.9967 26.6485 5.9967 27.1603V28.8558H6.72659ZM16.5939 25.7848H15.5152V24.8571H14.849V25.7848H14.2461V26.3924H14.8488V27.8002C14.8488 28.5041 15.1344 28.9198 15.8959 28.9198C16.1815 28.9198 16.4986 28.8239 16.7209 28.696L16.5304 28.1201C16.3401 28.248 16.1181 28.2801 15.9594 28.2801C15.6421 28.2801 15.5152 28.0881 15.5152 27.7681V26.3924H16.5939V25.7848ZM22.2416 25.7206C21.8609 25.7206 21.6071 25.9127 21.4484 26.1686V25.7848H20.7821V28.8558H21.4484V27.1284C21.4484 26.6166 21.6704 26.3286 22.0829 26.3286C22.2098 26.3286 22.3685 26.3607 22.4954 26.3926L22.6857 25.7528C22.5588 25.7208 22.3685 25.7208 22.2416 25.7208V25.7206ZM13.7067 26.0407C13.3893 25.8167 12.9452 25.7208 12.4692 25.7208C11.7079 25.7208 11.2003 26.1046 11.2003 26.7125C11.2003 27.2244 11.581 27.5122 12.2472 27.6083L12.5645 27.6403C12.9135 27.7042 13.1039 27.8002 13.1039 27.9602C13.1039 28.184 12.8501 28.344 12.4058 28.344C11.9617 28.344 11.6126 28.184 11.3905 28.0242L11.0732 28.536C11.4223 28.7919 11.8982 28.9198 12.374 28.9198C13.2624 28.9198 13.7702 28.5041 13.7702 27.9281C13.7702 27.3843 13.3577 27.0963 12.723 27.0004L12.4058 26.9684C12.1202 26.9363 11.8982 26.8725 11.8982 26.6806C11.8982 26.4566 12.1202 26.3286 12.4692 26.3286C12.8501 26.3286 13.2308 26.4885 13.4211 26.5845L13.7067 26.0407ZM31.4111 25.7208C31.0302 25.7208 30.7764 25.9127 30.6178 26.1686V25.7848H29.9515V28.8558H30.6178V27.1284C30.6178 26.6166 30.8399 26.3286 31.2522 26.3286C31.3793 26.3286 31.538 26.3607 31.6649 26.3926L31.8552 25.7528C31.7283 25.7208 31.538 25.7208 31.4111 25.7208ZM22.9079 27.3203C22.9079 28.248 23.5424 28.9198 24.526 28.9198C24.9702 28.9198 25.2874 28.8239 25.6047 28.568L25.2874 28.0242C25.0336 28.2161 24.7798 28.312 24.4942 28.312C23.9549 28.312 23.5742 27.9281 23.5742 27.3203C23.5742 26.7445 23.9549 26.3605 24.4942 26.3286C24.7798 26.3286 25.0336 26.4245 25.2874 26.6166L25.6047 26.0727C25.2874 25.8167 24.9702 25.7208 24.526 25.7208C23.5424 25.7208 22.9079 26.3926 22.9079 27.3203ZM29.0632 27.3203V25.7848H28.3969V26.1686C28.1747 25.8808 27.8575 25.7208 27.445 25.7208C26.5884 25.7208 25.9221 26.3926 25.9221 27.3203C25.9221 28.248 26.5884 28.9198 27.445 28.9198C27.8891 28.9198 28.2065 28.76 28.3969 28.472V28.8558H29.0632V27.3203ZM26.62 27.3203C26.62 26.7764 26.9691 26.3286 27.5401 26.3286C28.0795 26.3286 28.4603 26.7445 28.4603 27.3203C28.4603 27.8642 28.0795 28.312 27.5401 28.312C26.9691 28.2799 26.62 27.8642 26.62 27.3203ZM18.6563 25.7208C17.7679 25.7208 17.1333 26.3605 17.1333 27.3203C17.1333 28.2801 17.7678 28.9198 18.688 28.9198C19.1321 28.9198 19.5764 28.7919 19.9255 28.5041L19.6081 28.0242C19.3543 28.2161 19.037 28.344 18.7198 28.344C18.3073 28.344 17.8948 28.1521 17.7996 27.6081H20.0524V27.3524C20.0842 26.3605 19.513 25.7208 18.6562 25.7208H18.6563ZM18.6563 26.2966C19.0687 26.2966 19.3544 26.5526 19.4177 27.0325H17.8314C17.8948 26.6166 18.1804 26.2966 18.6563 26.2966ZM35.1867 27.3203V24.5691H34.5204V26.1686C34.2982 25.8808 33.981 25.7208 33.5685 25.7208C32.7119 25.7208 32.0456 26.3926 32.0456 27.3203C32.0456 28.248 32.7119 28.9198 33.5685 28.9198C34.0128 28.9198 34.33 28.76 34.5204 28.472V28.8558H35.1867V27.3203ZM32.7437 27.3203C32.7437 26.7764 33.0926 26.3286 33.6637 26.3286C34.2031 26.3286 34.5838 26.7445 34.5838 27.3203C34.5838 27.8642 34.2031 28.312 33.6637 28.312C33.0926 28.2799 32.7437 27.8642 32.7437 27.3203ZM10.4704 27.3203V25.7848H9.80409V26.1686C9.58195 25.8808 9.2647 25.7208 8.85221 25.7208C7.99557 25.7208 7.32928 26.3926 7.32928 27.3203C7.32928 28.248 7.99557 28.9198 8.85221 28.9198C9.2965 28.9198 9.61374 28.76 9.80409 28.472V28.8558H10.4704V27.3203ZM7.99557 27.3203C7.99557 26.7764 8.34461 26.3286 8.91566 26.3286C9.45505 26.3286 9.83589 26.7445 9.83589 27.3203C9.83589 27.8642 9.45505 28.312 8.91566 28.312C8.34461 28.2799 7.99557 27.8642 7.99557 27.3203Z"
                                    fill="black"
                                  ></path>
                                  <path
                                    d="M13.4844 2.46326H23.4787V20.5702H13.4844V2.46326Z"
                                    fill="#FF5F00"
                                  ></path>
                                  <path
                                    d="M14.1191 11.5168C14.1191 7.83787 15.8324 4.57471 18.4657 2.46325C16.5305 0.927709 14.0875 0 11.4223 0C5.10817 0 0 5.15049 0 11.5168C0 17.8829 5.10817 23.0336 11.4222 23.0336C14.0873 23.0336 16.5303 22.1059 18.4657 20.5702C15.8324 18.4908 14.1191 15.1957 14.1191 11.5168Z"
                                    fill="#EB001B"
                                  ></path>
                                  <path
                                    d="M36.9628 11.5168C36.9628 17.8829 31.8546 23.0336 25.5407 23.0336C22.8755 23.0336 20.4325 22.1059 18.4971 20.5702C21.1622 18.4589 22.8438 15.1957 22.8438 11.5168C22.8438 7.83787 21.1304 4.57471 18.4971 2.46325C20.4323 0.927709 22.8755 0 25.5407 0C31.8546 0 36.963 5.18255 36.963 11.5168H36.9628Z"
                                    fill="#F79E1B"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_199_1844">
                                    <rect
                                      width="37"
                                      height="29"
                                      fill="white"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className="color-light ms-2 text-space-2 font-18">
                                <b>**** **** **** 4521</b>
                              </span>
                            </div>
                            <div className="">
                              <span className="color-red">Delete</span>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between pt-4">
                            <span className="color-light">
                              <b>Exp: 04/2025</b>
                            </span>
                            <span className="color-light">
                              <b>Credit</b>
                            </span>
                          </div>
                        </div>
                        <div className="text-center py-2">
                          <button
                            type="button"
                            className="btn btn-lg btn-primary upload-btn"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                            Add New Card
                          </button>
                        </div>
                      </div>
                      <div className="pb-2">
                        <span>
                          <b>Billing</b>
                        </span>
                        <div className="bg-grey rounded py-1 px-1 my-2">
                          <Link href="" className="text-style-none">
                            <div className="billing-option rounded inline-block selected">
                              <span>Monthly</span>
                            </div>
                          </Link>
                          <Link href="" className="text-style-none">
                            <div className="billing-option rounded inline-block">
                              <span>
                                Yearly
                                <span className="font-12">
                                  (Get 2 Month Free)
                                </span>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="">
                        <span>
                          <b>Payment Options</b>
                        </span>
                        <div className="bg-grey rounded px-4 py-4 my-2">
                          <div className="d-flex justify-content-between">
                            <span className="color-light ms-2 font-18">
                              <b>Regular Monthly Subscription - 59$ / month</b>
                            </span>
                            <Link href="text-style-none"></Link>
                            <span className="color-blue">Change </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 pt-5 pb-3 d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-save rounded-pill px-4"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              id="team"
              className="container tab-pane shadow-sm my-3 rounded fade"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="color-light">
                    <b>Team Members</b>
                  </h5>
                  <span className="color-light">
                    Add team members for management
                  </span>
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-between">
                    <span className="color-light">
                      <b>User Details</b>
                    </span>
                    <Link
                      href=""
                      className="btn btn-lg btn-primary add-user-btn"
                    >
                      <FontAwesomeIcon icon={faPlus} /> Add New User{" "}
                    </Link>
                  </div>
                  <div className="col-md-12">
                    <div className="lead-scroll">
                      <table className="table table-striped user-table">
                        <thead>
                          <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>john42</td>
                            <td>John Wick</td>
                            <td>johnwick42@gmail.com</td>
                            <td>Admininsterator</td>
                            <td>
                              <Link href="#">
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  className="color-red me-2"
                                />
                              </Link>
                              <Link href="#">
                                <FontAwesomeIcon
                                  icon={faPen}
                                  className="color-blue"
                                />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>ryan_parker11</td>
                            <td>Rayan Parker</td>
                            <td>ryanparker1142@gmail.com</td>
                            <td>Analysts</td>
                            <td>
                              <Link href="#">
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  className="color-red me-2"
                                />
                              </Link>
                              <Link href="#">
                                <FontAwesomeIcon
                                  icon={faPen}
                                  className="color-blue"
                                />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>bershan_122</td>
                            <td>Bershan Shaw</td>
                            <td>bershanwarrioe@gmail.com</td>
                            <td>Member</td>
                            <td>
                              <Link href="#">
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                  className="color-red me-2"
                                />
                              </Link>
                              <Link href="#">
                                <FontAwesomeIcon
                                  icon={faPen}
                                  className="color-blue"
                                />
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="security"
              className="container tab-pane shadow-sm my-3 rounded fade"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-md-12 py-3">
                  <h5 className="color-light">
                    <b>Security</b>
                  </h5>
                  <span className="color-light">
                    Setup your accound Secuity
                  </span>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-6 pb-5">
                    <div className="bg-grey rounded px-4 py-4 my-5">
                      <div className="">
                        <span className="color-light">
                          <b>Two-Factor Authentication</b>
                        </span>
                        <p className="color-light mt-2">
                          Aproven way to protect your account and keep the
                          internet safer from cyberattacks by enabling two way
                          authentication.
                        </p>
                      </div>
                      <div className="d-flex justify-content-end ">
                        <button
                          type="button"
                          className="btn btn-primary btn-save rounded-pill px-4"
                        >
                          Enable
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
