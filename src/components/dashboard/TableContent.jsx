import React, { useEffect } from "react";
import greenup from "../../assets/img/green-up.svg";
import loading from "../../assets/img/loading-gif.gif";
import { useState } from "react";
import "../../assets/css_dashboard/classadd.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getallPost,
  updatePostdesc,
  updatePostasc,
} from "../../actions/action";
import axios from "axios";
import {addCampaignData} from "../../reducer/CampaignSlice";
export default function TableContent() {
  const [statedata, setstatedata] = useState(false);
  const dispatch = useDispatch();
  const { campaignData } = useSelector((state) => state.campaign)

  const { is_loading } = useSelector((state) => {
    return state.data;
  });

  // console.log(is_loading);
  const currentUser = useSelector((state) => {
    return state.data.datas;
  });
  useEffect(() => {
    dispatch(getallPost());
  }, []);

  const [toggledclass, settoggledclass] = useState(false);
  // const [toggledclassfilter, settoggledclassfilter] = useState(false);
  const [load, setload] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [recordsPerPage, setrecordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  let currentRecords = currentUser.slice(indexOfFirstRecord, indexOfLastRecord);

  useEffect(() => {
    document.title = "TableContent Page";
    getCampaigns()
  }, []);

  const getCampaigns = async () => {
    const { data: data1 } = await axios.get(`https://test.api.maincampaign.com/facebook-campaign/marketing-platform-business/0`)
    dispatch(addCampaignData(data1))
    console.log("Result from axios", [data1])
  }

  useEffect(() => {
    if (currentRecords.length === 0) {
      setstatedata(true);
    } else {
      setstatedata(false);
    }
  }, [currentRecords]);
  const nPages = Math.ceil(currentUser.length / recordsPerPage);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  function addremoveEventsort() {
    settoggledclass(!toggledclass);
  }

  function addremoveEventsortmouseleave() {
    settoggledclass(false);
  }
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  // function addremoveEventfilter() {
  //   settoggledclassfilter(!toggledclassfilter);
  // }
  // function addremoveEventfiltermouseleave() {
  //   settoggledclassfilter(false);
  // }
  function sortdesc() {
    dispatch(updatePostdesc());
  }

  function sortasc() {
    dispatch(updatePostasc());
  }
  function nextPagemob() {
    setrecordsPerPage(recordsPerPage + 1);
    if (currentPage === nPages) {
      setload(true);
    }
  }

  return (
    <div className="row m-0 p-0 position-relative statistics-section my-sm-5 p-sm-4 p-2 text-center">
      <div className="d-flex mt-sm-0 mt-3">
        <h4 className="color-grey me-auto">Statistics</h4>
        <div className="ms-auto d-flex align-items-center">
          <div
            className="dropdown desktop"
            onMouseLeave={addremoveEventsortmouseleave}
          >
            <Link
              className={`btn custom-dropdown2 dropdown-toggle d-flex align-items-center ${
                toggledclass ? "show" : ""
              }`}
              role="button"
              id="dropdownMenuLink"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
              onClick={addremoveEventsort}
            >
              <span className="me-auto">Sort by</span>
              <svg
                className="ms-auto"
                width="11"
                height="9"
                viewBox="0 0 13 9"
                fillRule="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2812 0.947999L6.5 5.71883L1.71875 0.947999L0.25 2.41675L6.5 8.66675L12.75 2.41675L11.2812 0.947999Z"
                  fill="#7D889E"
                />
              </svg>
            </Link>
            <ul
              className="dropdown-menu   newclass"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item" onClick={sortdesc}>
                  Sort Z-A
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" onClick={sortasc}>
                  Sort A-Z
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown ms-3 desktop">
            <Link
              className="btn custom-dropdown2 dropdown-toggle d-flex align-items-center"
              role="button"
              id="dropdownMenuLink"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="me-auto">Filter by</span>
              <svg
                className="ms-auto"
                width="11"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2812 0.947999L6.5 5.71883L1.71875 0.947999L0.25 2.41675L6.5 8.66675L12.75 2.41675L11.2812 0.947999Z"
                  fill="#7D889E"
                />
              </svg>
            </Link>

            <ul
              className="dropdown-menu newclass"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link className="dropdown-item">Sort 1</Link>
              </li>
              <li>
                <Link className="dropdown-item">Sort 2</Link>
              </li>
              <li>
                <Link className="dropdown-item">Sort 3</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown stats-opts ms-3">
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
                <g clipath="url(#clip0_100_907)">
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
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item">Action</Link>
              </li>
              <li>
                <Link className="dropdown-item">Another action</Link>
              </li>
              <li>
                <Link className="dropdown-item">Something else here</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="table-scroll">
        <div className="table-container">
          <div className="d-flex mt-sm-5 mt-4 px-sm-4 px-2">
            <div className="w-10">
              <label className="color-grey">Campaigns</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Ad sets</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Ads</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Revenue</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Spend</label>
            </div>
            <div className="w-10">
              <label className="color-grey">ROAS</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Impressions</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Reach</label>
            </div>
            <div className="w-10">
              <label className="color-grey">Conversions</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Leads</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Budget</label>
            </div>
            <div className="w-6">
              <label className="color-grey"></label>
            </div>
          </div>
          {console.log(is_loading)}
          {is_loading && (
            <div className="">
              <h1 className="color-black2 text-center">
                <div className="loading-main">
                  <img src={loading} className="" alt="" />
                </div>
              </h1>
            </div>
          )}
          {campaignData?.map((user) => (
            <div
              className="d-flex mt-4 bg-grey p-sm-3 p-1 px-2 px-sm-4 pt-sm-4 pt-3"
              key={user.facebookCampaignName}
            >
              <div className="w-10">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">${user.facebookCampaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-10">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-10">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{user.facebookCampaignName}</h5>
              </div>
              <div className="w-6">
                <img src={greenup} alt="" />
              </div>
            </div>
          ))}
          {statedata && (
            <div className="d-flex mt-4 bg-grey p-sm-3 p-1 px-2 px-sm-4 pt-sm-4 pt-3">
              <p
                className="color-black2 margin-auto"
                style={{ textAlign: "center" }}
              >
                No Data To Show
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="row m-0 p-0 position-relative desktop ">
        <div className="d-flex my-5 p-3 px-4 align-items-center pagination">
          <div className="me-auto">
            <Link className="page-icon bg-blue" onClick={prevPage}>
              <svg
                className="mx-1"
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.54826 8.63375L2.92242 5L6.54826 1.36625L5.43201 0.25L0.682007 5L5.43201 9.75L6.54826 8.63375Z"
                  fill="white"
                />
              </svg>
            </Link>
            {pageNumbers.map((pgNumber) => (
              <Link
                className="page-icon ms-3 bg-blue"
                onClick={() => setCurrentPage(pgNumber)}
                key={pgNumber}
              >
                <span className="color-white">{pgNumber}</span>
              </Link>
            ))}

            <Link className="page-icon ms-3 bg-blue" onClick={nextPage}>
              <svg
                className="mx-1"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.507347 9.13375L4.13318 5.5L0.507347 1.86625L1.6236 0.75L6.3736 5.5L1.6236 10.25L0.507347 9.13375Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <p className="ms-auto color-black2">
            {currentRecords.length} result showing out of {currentUser.length}
          </p>
        </div>
      </div>

      <div className="row m-0 p-0 position-relative mobile mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <button
            className={`btn theme-btn w-auto ${load ? "displayclass" : ""}`}
            onClick={nextPagemob}
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}
