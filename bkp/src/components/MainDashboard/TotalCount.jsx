import React from "react";
import info from "../../assets/MainDashboard/assets/images/info.svg";
export default function TotalCount() {
  return (
    <section className="stat-cards">
      <div className="container">
        <div className="row">
          <div className="col-2-half">
            <div className="stat-card pt-3">
              <div className="d-flex justify-content-between px-2">
                <span>
                  <span className="stat-card-head">Total Revenue</span>
                  <object
                    type="image/svg+xml"
                    data={info}
                    className=""
                  ></object>
                </span>
                <span className="stat-valuep green-back green-color">
                  +1.5%
                </span>
              </div>
              <div className="pt-2 px-2">
                <h4>
                  <b>$25000</b>
                </h4>
              </div>
              <div className="greenline"></div>
            </div>
          </div>
          <div className="col-2-half">
            <div className="stat-card pt-3">
              <div className="d-flex justify-content-between px-2">
                <span>
                  <span className="stat-card-head">Total Spend</span>
                  <object
                    type="image/svg+xml"
                    data={info}
                    className=""
                  ></object>
                </span>
                <span className="stat-valuep green-back green-color">
                  +1.5%
                </span>
              </div>
              <div className="pt-2 px-2">
                <h4>
                  <b>$1200</b>
                </h4>
              </div>
              <div className="greenline"></div>
            </div>
          </div>
          <div className="col-2-half">
            <div className="stat-card pt-3">
              <div className="d-flex justify-content-between px-2">
                <span>
                  <span className="stat-card-head">Total Impression</span>
                  <object
                    type="image/svg+xml"
                    data={info}
                    className=""
                  ></object>
                </span>
                <span className="stat-valuep green-back green-color">
                  +1.5%
                </span>
              </div>
              <div className="pt-2 px-2">
                <h4>
                  <b>250.45K</b>
                </h4>
              </div>
              <div className="greenline"></div>
            </div>
          </div>
          <div className="col-2-half">
            <div className="stat-card pt-3">
              <div className="d-flex justify-content-between px-2">
                <span>
                  <span className="stat-card-head">Total Reached</span>
                  <object
                    type="image/svg+xml"
                    data={info}
                    className=""
                  ></object>
                </span>
                <span className="stat-valuep green-back green-color">
                  +1.5%
                </span>
              </div>
              <div className="pt-2 px-2">
                <h4>
                  <b>50.2K</b>
                </h4>
              </div>
              <div className="greenline"></div>
            </div>
          </div>
          <div className="col-2-half">
            <div className="stat-card pt-3">
              <div className="d-flex justify-content-between px-2">
                <span>
                  <span className="stat-card-head">Total Clicks</span>
                  <object
                    type="image/svg+xml"
                    data={info}
                    className=""
                  ></object>
                </span>
                <span className="stat-valuep pink-back pink-color">-0.5%</span>
              </div>
              <div className="pt-2 px-2">
                <h4>
                  <b>45.5K</b>
                </h4>
              </div>
              <div className="pinkline"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
