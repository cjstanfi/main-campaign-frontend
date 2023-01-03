import React, { useState, useEffect } from "react";
import leadStyle from "../../assets/Leads/css/leads.module.css";

import settingo from "../../assets/Settings/images/setting-o.svg";
import notifi from "../../assets/Settings/images/notifi.svg";
import profileimage from "../../assets/Settings/images/profile-image.png";
import Badge from "../../assets/Settings/images/Badge.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faEllipsis,
  faPlus,
  faAngleRight,
  faCircle,
  faAngleLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import check from "../../assets/img/check.svg";
import uncheck from "../../assets/img/uncheck.svg";
import { Link } from "react-router-dom";
import useFetchWithRedux from "../../hooks/useFetchWithRedux";
import makeGeneratedLead from "../../models/generated-lead-model";
import { addGeneratedLeadData } from "../../reducer/GeneratedLeadSlice";
import { useSelector } from "react-redux";
import Sorting from "../Sorting";
import { formatUtcToDate } from "../../helpers/utils/format-utc-to-date.jsx";
import Header from "../Header";

const sort = [
  { value: "None", label: "None " },
  { value: "Converted First", label: "Converted First " },
  { value: "Converted Last", label: "Converted Last " },
  { value: "Highest Revenue", label: "Highest Revenue " },
  { value: "Lowest Revenue", label: "Lowest Revenue " },
  { value: "Created First", label: "Created First " },
  { value: "Created Last", label: "Created Last " },
];

const filter = [
  { value: "None", label: "None" },
  { value: "Converted", label: "Converted" },
];

export default function BodyContent() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const {
    currentMarketingPlatformBusinessData: { marketingPlatformBusinessId },
  } = useSelector((state) => state.marketingPlatformBusiness);
  const { validData: leadData } = useFetchWithRedux(
    `https://test.api.maincampaign.com/generated-lead/marketingPlatformBusiness/${marketingPlatformBusinessId}`,
    [marketingPlatformBusinessId],
    makeGeneratedLead,
    addGeneratedLeadData
  );

  useEffect(() => {
    console.log(leadData);
  }, [leadData]);

  return (
    <div className="col-sm-10 ps-sm-5 p-0 lead-top content">
      <section className="top-nav pb-1">
        <div className="container">
          <div className="row">
            <Header
              page="dashboard"
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container d-flex">
          <Sorting sort={sort} filter={filter} />
        </div>
      </section>
      <section className="settings">
        <div className="container">
          <div className="tab-content">
            <div id="all" className="container tab-pane  my-3 active p-0">
              <div className="row shadow-sm rounded">
                <div className="col-md-12 lead-scroll table-responsive">
                  <table className="table table-striped leads-table">
                    <thead>
                      <tr className="w-8 color-grey">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Campaign</th>
                        <th>Ad Set</th>
                        <th>Ad</th>
                        <th>Converted</th>
                        <th>Created Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leadData?.map((lead) => {
                        return (
                          <tr>
                            <td>{lead.generatedLeadName}</td>
                            <td>{lead.generatedLeadEmail}</td>
                            <td>{lead.generatedLeadPhoneNumber}</td>
                            <td>{lead.campaignId}</td>
                            <td>{lead.adSetId}</td>
                            <td>{lead.adId}</td>
                            <td>
                              {lead.generatedLeadIsConverted === 1 ? (
                                <img
                                  src={check}
                                  className={leadStyle.check_icon}
                                  alt="true"
                                />
                              ) : (
                                <img
                                  src={uncheck}
                                  className={leadStyle.check_icon}
                                  alt="false"
                                />
                              )}
                            </td>
                            <td>
                              {formatUtcToDate(lead.generatedLeadCreatedTime)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col-md-12 d-md-flex justify-content-between">
                  <div>
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item px-1">
                          <Link
                            className="page-link px-3 pagination-arrow"
                            href="#"
                            aria-label="Previous"
                          >
                            <FontAwesomeIcon
                              icon={faAngleLeft}
                              className="color-white"
                            />
                          </Link>
                        </li>
                        <li className="page-item px-1">
                          <Link className="page-link selected px-3" href="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item px-1">
                          <Link className="page-link px-3" href="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item px-1">
                          <Link className="page-link px-3" href="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item px-1">
                          <Link className="page-link px-3" href="#">
                            4
                          </Link>
                        </li>
                        <li className="page-item px-1">
                          <Link className="page-link px-3" href="#">
                            ...
                          </Link>
                        </li>
                        <li className="page-item px-1">
                          <Link className="page-link px-3" href="#">
                            10
                          </Link>
                        </li>
                        <li className="page-item px-1">
                          <Link
                            className="page-link px-3 pagination-arrow"
                            href="#"
                            aria-label="Next"
                          >
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className="color-white"
                            />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div>
                    <span className="color-dark">
                      <b>10 results showing out of 50</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="unread"
              className="container tab-pane shadow-sm my-3 rounded fade"
            ></div>
            <div
              id="rawleads"
              className="container tab-pane shadow-sm my-3 rounded fade"
            ></div>
            <div
              id="inprogressleads"
              className="container tab-pane shadow-sm my-3 rounded fade"
            ></div>
            <div
              id="interestedleads"
              className="container tab-pane shadow-sm my-3 rounded fade"
            ></div>
            <div
              id="convertedleads"
              className="container tab-pane shadow-sm my-3 rounded fade"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
