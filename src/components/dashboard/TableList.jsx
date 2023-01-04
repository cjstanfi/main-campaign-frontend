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
import makeGeneratedLead from "../../models/generated-lead-model";
import { addGeneratedLeadData } from "../../reducer/GeneratedLeadSlice";

export default function TableList({summaryData,is_loading,setChildType,statedata,setIdQueue,setCurrentId,childType,currentId,idQueue}) {

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
console.log(summaryData)

  return (
    <div className="table-section">
      <div className="table-scroll">
        <div className="table-container table_content">
          <div className="d-flex mt-sm-5 mt-4 px-0">
            <div className="w-6">
              <label className="color-grey"></label>
            </div>
            <div className="w-10">
              <label className="color-grey">Campaigns</label>
            </div>
            <div className="w-8">
              <label className="color-grey">Ad Sets</label>
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
          {summaryData?.map((summaryRow) => (
            <div
              className="d-flex mt-4 bg-grey p-sm-3 p-1 px-2 px-sm-4 pt-sm-4 pt-3 tableRow"
              key={summaryRow.id}
              onClick={() => handleTableRowClick(summaryRow.id)}
            >
              <div className="w-6 checkBox_row">
                <div class="cntr">
                  <label for="cbx" className="label-cbx">
                    <input id="cbx" type="checkbox" className="invisible" />
                    <div className="checkbox">
                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                        <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                        <polyline points="4 11 8 15 16 6"></polyline>
                      </svg>
                    </div>
                    {/* <span>Checkbox</span> */}
                  </label>
                </div>
              </div>
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
              {summaryRow.childType === "campaign" ? (
                <div className="w-8">
                  <h5 className="color-black2">
                    {summaryRow.lifetimeBudget
                      ? "$" + summaryRow.lifetimeBudget
                      : summaryRow.dailyBudget
                      ? "$" + summaryRow.dailyBudget
                      : "Ad Set Budget"}
                  </h5>
                </div>
              ) : null}
              {summaryRow.childType === "ad_set" ? (
                <div className="w-8">
                  <h5 className="color-black2">
                    {summaryRow.lifetimeBudget
                      ? "Lifetime " + "$" + summaryRow.lifetimeBudget
                      : summaryRow.dailyBudget
                      ? "Daily " + "$" + summaryRow.dailyBudget
                      : "Campaign Budget"}
                  </h5>
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
    </div>
  );
}
