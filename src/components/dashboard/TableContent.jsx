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
import useFetchWithRedux from "../../hooks/useFetchWithRedux";
import makeSummary from "../../models/summary-model";
import { addSummaryData } from "../../reducer/FacebookSummarySlice";
import upperFirst from "../../helpers/utils/upper-first";
import MarketingDropdown from "./MarketingDropdown";
import makeGeneratedLead from "../../models/generated-lead-model";
import { addGeneratedLeadData } from "../../reducer/GeneratedLeadSlice";
import makeChart from "../../models/chart-model";
import { addChartData } from "../../reducer/ChartSlice";
import formatUnderscores from "../../helpers/utils/format_underscores";
import Sorting from "../Sorting";
export default function TableContent() {
  const [currentId, setCurrentId] = useState(null);
  const [idQueue, setIdQueue] = useState([]);
  const [childType, setChildType] = useState("campaign");
  const [leadChildType, setLeadChildType] = useState(
    "marketingPlatformBusiness"
  );
  const [orderBy, setOrderBy] = useState("id");
  const [orderDirection, setOrderDirection] = useState("ASC");

  const [recordLimit, setRecordLimit] = useState("10");

  const [statedata, setstatedata] = useState(false);
  const {
    currentMarketingPlatformBusinessData: { marketingPlatformBusinessId },
  } = useSelector((state) => state.marketingPlatformBusiness);

  //Marketing Platform Businesses
  // //Leads Center
  // useFetchWithRedux(`https://test.api.maincampaign.com/generated-lead/marketingPlatformBusiness/0`, makeGeneratedLead, addGeneratedLeadData)

  //TODO: pass array to useFetch with redux to ensure all params are not null
  //Campaign Summary
  const { validData: summaryData } = useFetchWithRedux(
    `https://test.api.maincampaign.com/summary/facebook/${currentId}?childType=${childType}&orderBy=${orderBy}&recordLimit=${recordLimit}&orderDirection=${orderDirection}&recordOffset=0`,
    [currentId, childType, orderBy, recordLimit],
    makeSummary,
    addSummaryData
  );
  const { validData: leadSummaryData } = useFetchWithRedux(
    `https://test.api.maincampaign.com/generated-lead/${leadChildType}/${currentId}`,
    [leadChildType, currentId],
    makeGeneratedLead,
    addGeneratedLeadData
  );

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (childType === "campaign") {
      setCurrentId(marketingPlatformBusinessId);
    } else if (childType === "ad") {
      setChildType("campaign");
      setCurrentId(marketingPlatformBusinessId);
    }
  }, [marketingPlatformBusinessId]);

  function handleTableRowClick(summaryRowId) {
    if (childType === "campaign") {
      setChildType("ad_set");
      setIdQueue([...idQueue, currentId]);
      setCurrentId(summaryRowId);
      console.log("summaryRowId: ", summaryRowId);
      console.log("switching to ad set");
    } else if (childType === "ad_set") {
      setChildType("ad");
      setIdQueue([...idQueue, currentId]);
      setCurrentId(summaryRowId);
      console.log("summaryRowId: ", summaryRowId);
      console.log("switching to ad");
    }
  }

  function handleRefreshClick() {
    if (childType === "ad_set") {
      setChildType("campaign");
      setCurrentId(idQueue.pop());
      setIdQueue([...idQueue]);
      console.log("switching to campaign");
    } else if (childType === "ad") {
      setChildType("ad_set");
      setCurrentId(idQueue.pop());
      setIdQueue([...idQueue]);
      console.log("switching to ad_set");
    }
  }

  // const [toggledclassfilter, settoggledclassfilter] = useState(false);
  const [load, setload] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [recordsPerPage, setrecordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  let currentRecords = currentUser.slice(indexOfFirstRecord, indexOfLastRecord);

  useEffect(() => {
    if (currentRecords.length === 0) {
      setstatedata(true);
    } else {
      setstatedata(false);
    }
  }, [currentRecords]);
  const nPages = Math.ceil(currentUser.length / recordsPerPage);

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

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
      <div className="d-flex mt-sm-0 mt-3 Statistics_mob">
        <h4 className="color-grey me-auto">
          Statistics: {formatUnderscores(childType)}
        </h4>
        {childType !== "campaign" ? (
          <button
            onClick={handleRefreshClick}
            className={`btn theme-btn w-auto ${load ? "displayclass" : ""}`}
          >
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
          </button>
        ) : null}
        <Sorting
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
        />
      </div>
      <div className="table-scroll">
        <div className="table-container table_content">
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
              <label className="color-grey">Leads</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Conversions</label>
            </div>
            {summaryData &&
            summaryData.length > 0 &&
            summaryData[0]?.childType !== "ad" ? (
              <div className="w-8">
                <label className="color-grey">Budget</label>
              </div>
            ) : null}
            <div className="w-6">
              <label className="color-grey"></label>
            </div>
          </div>
          {is_loading && (
            <div className="">
              <h1 className="color-black2 text-center">
                <div className="loading-main">
                  <img src={loading} className="" alt="" />
                </div>
              </h1>
            </div>
          )}
          {summaryData?.map((summaryRow) => (
            <div
              className="d-flex mt-4 bg-grey p-sm-3 p-1 px-2 px-sm-4 pt-sm-4 pt-3 tableRow"
              key={summaryRow.id}
              onClick={() => handleTableRowClick(summaryRow.id)}
            >
              <div className="w-10">
                <h5 className="color-black2">{summaryRow?.campaignName}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">
                  {summaryRow?.childType === "ad_set" ||
                  summaryRow?.childType === "ad"
                    ? summaryRow.adSetName
                    : summaryRow?.adSetCount}
                </h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">
                  {summaryRow?.childType === "ad"
                    ? summaryRow?.adName
                    : summaryRow?.adCount}
                </h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{"$" + summaryRow.revenue}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{"$" + summaryRow.spend}</h5>
              </div>
              <div className="w-10">
                <h5 className="color-black2">{summaryRow.roas}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{summaryRow.impressions}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{summaryRow.reach}</h5>
              </div>
              <div className="w-10">
                <h5 className="color-black2">{summaryRow.leads}</h5>
              </div>
              <div className="w-8">
                <h5 className="color-black2">{summaryRow.conversions}</h5>
              </div>
              {summaryRow.childType !== "ad" ? (
                <div className="w-8">
                  <h5 className="color-black2">{"$" + summaryRow.lifetimeBudget}</h5>
                </div>
              ) : null}
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
