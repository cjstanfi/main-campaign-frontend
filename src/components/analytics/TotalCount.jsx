import React from "react";
import exclamation from "../../assets/img/exclamation.svg";
// import info from "../../assets/MainDashboard/assets/images/info.svg";
export default function TotalCount() {
  return (
    <section className="stat-cards">
      <div className="container">
        <div className="slider_area">
          <div className="row slider_wrap">
            <div className="col-2-half">
              <div className="stat-card pt-3 dashboard-count">
                <div className="d-flex justify-content-between px-2">
                  <span>
                    <span className="stat-card-head">Total Revenue</span>
                    <img src={exclamation} className="ms-2" alt="" />
                  </span>
                  <span className="stat-valuep green-back green-color">
                    +1.5%
                  </span>
                </div>
                <div className="pt-2 px-2">
                  <h3>
                    <b>$25000</b>
                  </h3>
                </div>
                <div className="greenline"></div>
              </div>
            </div>
            <div className="col-2-half">
              <div className="stat-card pt-3 dashboard-count">
                <div className="d-flex justify-content-between px-2">
                  <span>
                    <span className="stat-card-head">Total Spend</span>
                    <img src={exclamation} className="ms-2" alt="" />
                  </span>
                  <span className="stat-valuep green-back green-color">
                    +1.5%
                  </span>
                </div>
                <div className="pt-2 px-2">
                  <h3>
                    <b>$1200</b>
                  </h3>
                </div>
                <div className="greenline"></div>
              </div>
            </div>
            <div className="col-2-half">
              <div className="stat-card pt-3 dashboard-count">
                <div className="d-flex justify-content-between px-2">
                  <span>
                    <span className="stat-card-head">Total Impression</span>
                    <img src={exclamation} className="ms-2" alt="" />
                  </span>
                  <span className="stat-valuep green-back green-color">
                    +1.5%
                  </span>
                </div>
                <div className="pt-2 px-2">
                  <h3>
                    <b>250.45K</b>
                  </h3>
                </div>
                <div className="greenline"></div>
              </div>
            </div>
            <div className="col-2-half">
              <div className="stat-card pt-3 dashboard-count">
                <div className="d-flex justify-content-between px-2">
                  <span>
                    <span className="stat-card-head">Total Reached</span>
                    <img src={exclamation} className="ms-2" alt="" />
                  </span>
                  <span className="stat-valuep green-back green-color">
                    +1.5%
                  </span>
                </div>
                <div className="pt-2 px-2">
                  <h3>
                    <b>50.2K</b>
                  </h3>
                </div>
                <div className="greenline"></div>
              </div>
            </div>
            <div className="col-2-half">
              <div className="stat-card pt-3 dashboard-count">
                <div className="d-flex justify-content-between px-2">
                  <span>
                    <span className="stat-card-head">Total Clicks</span>
                    <img src={exclamation} className="ms-2" alt="" />
                  </span>
                  <span className="stat-valuep pink-back pink-color">
                    -0.5%
                  </span>
                </div>
                <div className="pt-2 px-2">
                  <h3>
                    <b>45.5K</b>
                  </h3>
                </div>
                <div className="pinkline"></div>
              </div>
            </div>
          </div>
          <div class="pseduo-track"></div>
        </div>
      </div>
    </section>
  );
}
