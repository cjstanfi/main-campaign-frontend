import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
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
import formatUnderscores from "../../helpers/utils/format-underscores.jsx";
import Sorting from "../Sorting";
import { numberWithCommas } from "../../helpers/utils/format-commas";
import { useRef } from "react";
const sort = [
  { value: "Highest ROAS", label: "Highest ROAS", ob: "roas", od: "DESC" },
  { value: "Lowest ROAS", label: "Lowest ROAS", ob: "roas", od: "ASC" },
  {
    value: "Highest Impressions",
    label: "Highest Impressions",
    ob: "impressions",
    od: "DESC",
  },
  {
    value: "Lowest Impressions",
    label: "Lowest Impressions",
    ob: "impressions",
    od: "ASC",
  },
  { value: "Highest Reach", label: "Highest Reach", ob: "reach", od: "DESC" },
  { value: "Lowest Reach", label: "Lowest Reach", ob: "reach", od: "ASC" },
  { value: "Highest Spend", label: "Highest Spend", ob: "spend", od: "DESC" },
  { value: "Lowest Spend", label: "Lowest Spend", ob: "spend", od: "ASC" },
  {
    value: "Highest Budget",
    label: "Highest Budget",
    ob: "budget",
    od: "DESC",
  },
  { value: "Lowest Budget", label: "Lowest Budget", ob: "budget", od: "ASC" },
  { value: "Highest Leads", label: "Highest Leads", ob: "leads", od: "DESC" },
  { value: "Lowest Leads", label: "Lowest Leads", ob: "leads", od: "ASC" },
  {
    value: "Highest Conversions",
    label: "Highest Conversions",
    ob: "conversions",
    od: "DESC",
  },
  {
    value: "Lowest Conversions",
    label: "Lowest Conversions",
    ob: "conversions",
    od: "ASC",
  },
];

const filter = [
  { value: "Filter 1", label: "Filter 1" },
  { value: "Filter 2", label: "Filter 2" },
  { value: "Filter 3", label: "Filter 3" },
];
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
  const [isCardActive, setIsCardActive] = useState([]);
  const [recordsPerPage, setrecordsPerPage] = useState(10);
  const checkboxref = useRef(null);
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
  const toggleActiveClass = (e,index) => {
    console.log(e.target.checked )
   if(e.target.checked){
    setIsCardActive([...isCardActive,index]);
   } else {
    const data = isCardActive.filter((i)=> i !== index)
    setIsCardActive(data)
   }
    
  };
  return (
    <div className="row m-0 p-0 position-relative statistics-section my-sm-5 p-sm-4 p-2 text-center">
      <div className="d-flex mt-sm-0 mt-3 Statistics_mob">
        {/* <div class="statBtn_Box me-auto">
          <a class="statBtn" href="#">
            Campaign
          </a>
          <a class="statBtn" href="#">
            Ad Set
          </a>
          <a class="statBtn" href="#">
            Ad
          </a>
        </div> */}
        {/* <h4 className="color-grey me-auto">
          Statistics: {formatUnderscores(childType)}
        </h4> */}
        {/* {childType !== "campaign" ? (
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
        ) : null} */}
        {/* <Sorting
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
        /> */}
        <Sorting
          sort={sort}
          filter={filter}
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
        />
      </div>
      <Tabs
        defaultActiveKey="Campaign"
        id="uncontrolled-tab-example"
        className="tabList mt-3"
        fill
        justify
      >
        <Tab eventKey="campaign" title="Campaign"></Tab>
        <Tab eventKey="adset" title="Ad Set"></Tab>
        <Tab eventKey="ad" title="Ad"></Tab>
      </Tabs>
      <div className="table-scroll">
        <div className="table-container table_content">
          <div className="d-flex mt-sm-5 mt-4 px-0">
            <div className="w-6">
              <label className="color-grey"></label>
            </div>
            <div className="w-12">
              <label className="color-grey">Campaigns</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Ad Sets</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Ads</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Status</label>
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
            <div className="w-8">
              <label className="color-grey">Performance</label>
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
          {summaryData?.map((summaryRow, index) => (
            <div
              key={index}
              className={`d-flex mt-4 bg-grey p-sm-3 p-1 px-2 px-sm-4 pt-sm-4 pt-3 tableRow${
                (isCardActive.indexOf(index) > -1) ? " active" : ""
              }`}
              onClick={(e)=>toggleActiveClass(e,index)}
            >
              <div className="w-6 checkBox_row">
                <div className="cntr">
                  <Form.Check aria-label="option 1" ref={checkboxref} />
                  {/* <label htmlFor={`cbx${index}`} className="label-cbx">
                    <input id={`cbx${index}`} name={index} type="checkbox"  className="invisible" checked="" />
                    <div className="checkbox">
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                        <polyline points="4 11 8 15 16 6"></polyline>
                      </svg>
                    </div>
                    {/* <span>Checkbox</span>
                  </label> */}
                </div>
              </div>
              <div
                className="w-100 d-flex"
                key={summaryRow.id}
                onClick={() => handleTableRowClick(summaryRow.id)}
              >
                <div className="w-12">
                  <h5 className="color-black2">{summaryRow?.campaignName}</h5>
                </div>
                <div className="w-8">
                  <h5 className="color-black2">
                    {summaryRow?.childType === "ad_set" ||
                    summaryRow?.childType === "ad"
                      ? summaryRow.adSetName
                      : numberWithCommas(summaryRow?.adSetCount)}
                  </h5>
                </div>
                <div className="w-8">
                  <h5 className="color-black2">
                    {summaryRow?.childType === "ad"
                      ? summaryRow?.adName
                      : numberWithCommas(summaryRow?.adCount)}
                  </h5>
                </div>
                <div className="w-8">
                  <h5 className="color-black2">{summaryRow.status}</h5>
                </div>
                <div className="w-8">
                  <h5 className="color-black2">
                    {"$" + numberWithCommas(summaryRow.revenue)}
                  </h5>
                </div>
                <div className="w-8">
                  <h5 className="color-black2">
                    {"$" + numberWithCommas(summaryRow.spend)}
                  </h5>
                </div>
                <div className="w-10">
                  <h5 className="color-black2">{summaryRow.roas}</h5>
                </div>
                <div className="w-8">
                  <h5 className="color-black2">
                    {numberWithCommas(summaryRow.impressions)}
                  </h5>
                </div>
                <div className="w-8">
                  <h5 className="color-black2">
                    {numberWithCommas(summaryRow.reach)}
                  </h5>
                </div>
                <div className="w-10">
                  <h5 className="color-black2">
                    {numberWithCommas(summaryRow.leads)}
                  </h5>
                </div>
                <div className="w-8">
                  <h5 className="color-black2">
                    {numberWithCommas(summaryRow.conversions)}
                  </h5>
                </div>
                {summaryRow.childType === "campaign" ? (
                  <div className="w-8">
                    <h5 className="color-black2">
                      {summaryRow.lifetimeBudget
                        ? "$" + numberWithCommas(summaryRow.lifetimeBudget)
                        : summaryRow.dailyBudget
                        ? "$" + numberWithCommas(summaryRow.dailyBudget)
                        : "Ad Set Budget"}
                    </h5>
                  </div>
                ) : null}
                {summaryRow.childType === "ad_set" ? (
                  <div className="w-8">
                    <h5 className="color-black2">
                      {summaryRow.lifetimeBudget
                        ? "Lifetime " +
                          "$" +
                          numberWithCommas(summaryRow.lifetimeBudget)
                        : summaryRow.dailyBudget
                        ? "Daily " +
                          "$" +
                          numberWithCommas(summaryRow.dailyBudget)
                        : "Campaign Budget"}
                    </h5>
                  </div>
                ) : null}
                <div className="w-8">
                  <img src={greenup} alt="" />
                </div>
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

      {/* <div className="row m-0 p-0 position-relative mobile mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <button
            className={`btn theme-btn w-auto ${load ? "displayclass" : ""}`}
            onClick={nextPagemob}
          >
            Load more
          </button>
        </div>
      </div> */}
    </div>
  );
}
