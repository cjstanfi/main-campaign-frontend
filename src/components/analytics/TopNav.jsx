import React from "react";
import { Link } from "react-router-dom";
import calender from "../../assets/MainDashboard/assets/images/calender.svg";

import settingo from "../../assets/MainDashboard/assets/images/setting-o.svg";

import notifi from "../../assets/MainDashboard/assets/images/notifi.svg";

import profile from "../../assets/MainDashboard/assets/images/profile-image.png";

import Badge from "../../assets/MainDashboard/assets/images/Badge.svg";
import DatePickerComponent from "../../helpers/utils/DatePicker";
import { useState } from "react";
export default function TopNav() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="top-nav pt-4 pb-1">
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-3 wel-analytices">
            <h4 className="heading mb-0">Welcome Back!</h4>
            <span className="text-thin">
              Track your Facebook Data Analytics here
            </span>
          </div>
          <div className="col-md-8">
            <div className="d-flex justify-content-end align-items-center">
              <div className="d-flex time-filter-div px-1 py-2 my-3">
                <div className="px-2 py-2 inline">
                  <Link className="filter-value">
                    <span>24 hours</span>
                  </Link>
                </div>
                <div className="px-2 py-2 inline">
                  <Link className="filter-value">
                    <span>7 days</span>
                  </Link>
                </div>
                <div className="px-2 py-2 inline">
                  <Link className="filter-value">
                    <span>30 days</span>
                  </Link>
                </div>
                <div className="px-2 py-2 inline selected">
                  <Link className="filter-value">
                    <span>1 year</span>
                  </Link>
                </div>
                <div className="inline ms-auto datepicker_mob">
                  <Link className="top-menu-buttons ms-2">
                    <DatePickerComponent
                      imgsrc={calender}
                      ndate={startDate}
                      setndate={setStartDate}
                    />
                  </Link>
                </div>
              </div>
              <div className="buttons py-2 my-3">
                <Link className="top-menu-buttons ms-2">
                  <DatePickerComponent
                    imgsrc={calender}
                    ndate={startDate}
                    setndate={setStartDate}
                  />
                </Link>
                <Link className="top-menu-buttons ms-2">
                  <img src={settingo} className="" alt="" />
                </Link>
                <Link className="top-menu-buttons ms-2 px-3">
                  <img src={notifi} className="" alt="" />
                </Link>
              </div>
              <div className="profile-div ms-3 my-2">
                <img src={profile} className="profile-img" alt="" />
                <img src={Badge} className="profile-badge" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
