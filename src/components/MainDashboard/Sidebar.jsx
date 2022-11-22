import React from "react";
import logo from "../../assets/MainDashboard/assets/images/logo.svg";
import dashboard from "../../assets/MainDashboard/assets/images/dashboard.svg";
import campaign from "../../assets/MainDashboard/assets/images/campaign.svg";
import adsmanager from "../../assets/MainDashboard/assets/images/ads-manager.svg";
import adsets from "../../assets/MainDashboard/assets/images/ad-sets.svg";
import ads from "../../assets/MainDashboard/assets/images/ads.svg";
import leads from "../../assets/MainDashboard/assets/images/leads.svg";
import Settings from "../../assets/MainDashboard/assets/images/Settings.svg";
import support from "../../assets/MainDashboard/assets/images/support.svg";

import analytics from "../../assets/MainDashboard/assets/images/analytics.svg";
import { Link } from "react-router-dom";
import "../../assets/MainDashboard/css/styles.css";
export default function Sidebar() {
  return (
    <header>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="d-flex align-items-center px-4 pb-3 ">
            <Link to={"/"} className="">
              <img src={logo} alt="Main Campaign" />
            </Link>
          </div>
          <div className="list-group list-group-flush mx-3 mt-5">
            <Link
              to={"/"}
              className="list-group-item list-group-item-action py-3 active-item"
              aria-current="true"
            >
              <img src={dashboard} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Dashboard</span>
            </Link>
            <Link
              to={"/"}
              className="list-group-item list-group-item-action py-3"
              aria-current="true"
            >
              <img src={campaign} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Campaign</span>
            </Link>
            <Link
              to={"/"}
              className="list-group-item list-group-item-action py-3"
              aria-current="true"
            >
              <img src={adsmanager} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Ads Manager</span>
            </Link>
            <Link
              to={"/"}
              className="list-group-item list-group-item-action py-3"
              aria-current="true"
            >
              <img src={adsets} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Ads Sets</span>
            </Link>
            <Link
              to={"/"}
              className="list-group-item list-group-item-action py-3"
              aria-current="true"
            >
              <img src={ads} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Ads</span>
            </Link>
            <Link
              to={"/analytics"}
              className="list-group-item list-group-item-action py-3"
              aria-current="true"
            >
              <img src={analytics} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Analytics</span>
            </Link>
            <Link
              to={"/"}
              className="list-group-item list-group-item-action py-3"
              aria-current="true"
            >
              <img src={leads} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Leads</span>
            </Link>
            <span className="mt-5 mx-3 more-text">MORE</span>
            <Link
              to={"/"}
              className="list-group-item list-group-item-action py-3"
              aria-current="true"
            >
              <img src={Settings} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Settings</span>
            </Link>
            <Link
              to={"/"}
              className="list-group-item list-group-item-action py-3"
              aria-current="true"
            >
              <img src={support} className="me-3" alt="Main Campaign" />
              <span className="mt-3">Support</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
