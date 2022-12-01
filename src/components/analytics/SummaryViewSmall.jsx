import exclamation from "../../assets/img/exclamation.svg";
import React from "react";
import {Link} from "react-router-dom";
import greenvector from "../../assets/img/green-vector.svg";

export default function SummaryViewSmall({title, amount, percent}) {
    return (
        <div className="col-2-half">
            <div className="slide-content">
                <div className="content">
                    <div className="data p-3 px-3">
                        <div className="d-flex">
                            <div className="me-auto d-flex align-items-center">
                                <h5 className="color-grey mb-0">{title}</h5>
                                <img src={exclamation} className="ms-2" alt="" />
                            </div>
                            <div className="ms-auto">
                                <div className="dropdown stats-opts">
                                    <button
                                        className="dropdown-toggle d-flex p-0"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <svg
                                            width="31"
                                            height="31"
                                            viewBox="0 0 31 31"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_100_907)">
                                                <path
                                                    d="M7.74996 12.9167C6.32913 12.9167 5.16663 14.0792 5.16663 15.5001C5.16663 16.9209 6.32913 18.0834 7.74996 18.0834C9.17079 18.0834 10.3333 16.9209 10.3333 15.5001C10.3333 14.0792 9.17079 12.9167 7.74996 12.9167ZM23.25 12.9167C21.8291 12.9167 20.6666 14.0792 20.6666 15.5001C20.6666 16.9209 21.8291 18.0834 23.25 18.0834C24.6708 18.0834 25.8333 16.9209 25.8333 15.5001C25.8333 14.0792 24.6708 12.9167 23.25 12.9167ZM15.5 12.9167C14.0791 12.9167 12.9166 14.0792 12.9166 15.5001C12.9166 16.9209 14.0791 18.0834 15.5 18.0834C16.9208 18.0834 18.0833 16.9209 18.0833 15.5001C18.0833 14.0792 16.9208 12.9167 15.5 12.9167Z"
                                                    fill="#040310"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_100_907">
                                                    <rect width="31" height="31" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <li>
                                            <Link className="dropdown-item">Action</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item">Another action</Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item">
                                                Something else here
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-sm-3 mt-2">
                            <h3 className="color-black3 mb-0">{amount}</h3>
                            <div className="stats-box ms-3 bg-green">
                  <span className="color-green font-14 text-center font-600 letter-1">
                    {percent}
                  </span>
                            </div>
                        </div>
                    </div>
                    <img src={greenvector} className="w-100 img-vector" alt="" />
                </div>
            </div>
        </div>
    )
}