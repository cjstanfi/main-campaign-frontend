import exclamation from "../../assets/img/exclamation.svg";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import greenvector from "../../assets/img/green-vector.svg";
import {numberWithCommas} from "../../helpers/utils/format-commas";

export default function SummaryViewSmall({title, amount, percent}) {
    return (
        <div className="col-2-half">
            <div className="stat-card pt-3 dashboard-count">
                <div className="d-flex justify-content-between px-2">
                  <span>
                    <span className="stat-card-head">{title}</span>
                    <img src={exclamation} className="ms-2" alt="" />
                  </span>
                {
                    percent && percent >= 0 ? <div className="stat-valuep green-back green-color"> <span className="green-color font-14 text-center font-600 letter-1"> {percent + "%"}</span></div>
                        : percent && percent < 0 ? <div className="stat-valuep pink-back pink-color"> <span className="pink-color font-14 text-center font-600 letter-1"> {percent + "%"}</span></div>
                            : null
                }
                </div>
                <div className="pt-2 px-2">
                    <h3>
                        <b>{title.toLowerCase() === "revenue" ? "$" + numberWithCommas(amount) : numberWithCommas(amount)}</b>
                    </h3>
                </div>
                { percent && percent >= 0 ? <div className="greenline"></div> : <div className="greenline"></div>}
            </div>
        </div>
    )
}
