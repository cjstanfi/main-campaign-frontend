import React from "react";
import arrowup from "../../assets/img/arrow-up.svg";
import arrowdown from "../../assets/img/arrow-down.svg";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";
import CRMimg1 from "../../assets/img/CRM/img1.png";
import CRMimg2 from "../../assets/img/CRM/img2.png";
import CRMimg3 from "../../assets/img/CRM/img3.png";
import CRMimg4 from "../../assets/img/CRM/img4.png";
import { Link } from "react-router-dom";
export default function LoginExpandContentStep4() {
  return (
    <>
      <div className="row p-0 position-relative login-section animation-element bounce-up thirdStep in-view">
        <div className="container main-container subject">
          <h2 className="text-center color-black2">Let’s go!</h2>
          <div className="row m-0 p-0 position-relative ">
            <div className="row m-0 p-0 position-relative desktop ">
              <div className="d-flex justify-content-center my-4 ">
                <div className="step">
                  <div className="circle"></div>
                  <h5 className="font-600 font-14 color-black1 mt-2">
                    Register
                  </h5>
                </div>
                <div className="line"></div>
                <div className="step mleft">
                  <div className="circle "></div>
                  <h5 className="font-600 font-14 color-black1 mt-2">
                    Questions
                  </h5>
                </div>
                <div className="line mleft2"></div>
                <div className="step mleft">
                  <div className="circle"></div>
                  <h5 className="font-600 font-14 color-black1 mt-2">
                    Connect with
                  </h5>
                </div>
                <div className="line mleft1"></div>
                <div className="step mleft">
                  <div className="circle"></div>
                  <h5 className="font-600 font-14 color-black1 mt-2">
                    Connect CRM
                  </h5>
                </div>
              </div>
            </div>
            <div className="row m-0 p-0 position-relative mobile">
              <div className="d-flex align-items-center justify-content-center mt-4 mb-2">
                <Link to={"/loginstep3"}>
                  <svg
                    width="42"
                    height="43"
                    viewBox="0 0 42 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="21" cy="21.0273" r="21" fill="#F5F5FF" />
                    <g clipPath="url(#clip0_33_1480)">
                      <path
                        d="M24.41 25.6173L19.83 21.0273L24.41 16.4373L23 15.0273L17 21.0273L23 27.0273L24.41 25.6173Z"
                        fill="#3B5998"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_33_1480">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(9 9.02734)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className="ellipse d-flex align-items-center justify-content-center">
                  <h4 className="font-24 text-center color-white d-flex align-items-center justify-content-center">
                    4/4
                  </h4>
                </div>
                <Link to={"/loginstep4"}>
                  <svg
                    width="42"
                    height="43"
                    viewBox="0 0 42 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      r="21"
                      transform="matrix(-1 0 0 1 21 21.0273)"
                      fill="#F5F5FF"
                    />
                    <g clipPath="url(#clip0_33_1483)">
                      <path
                        d="M17.59 25.6173L22.17 21.0273L17.59 16.4373L19 15.0273L25 21.0273L19 27.0273L17.59 25.6173Z"
                        fill="#3B5998"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_33_1483">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="matrix(-1 0 0 1 33 9.02734)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <h5 className="font-600 font-12 color-black1">Connect CRM</h5>
              </div>
            </div>
            <div className="position-relative arrow-up">
              <img src={arrowup} className="position-absolute" alt="" />
            </div>
            <div className="container-style CRM py-sm-5 py-4 mt-sm-4 mt-3">
              <div className="d-flex justify-content-center">
                <div className="d-flex m-flex-column text-md-center">
                  <Link to={"/loginstep4"}>
                    <img src={CRMimg1} alt="" />
                  </Link>
                  <Link to={"/loginstep4"}>
                    <img src={CRMimg2} alt="" />
                  </Link>
                  <Link to={"/loginstep4"}>
                    <img src={CRMimg3} alt="" />
                  </Link>
                  <Link to={"/loginstep4"}>
                    <img src={CRMimg4} alt="" />
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center my-sm-5 my-2">
                <Link to={"/dashboard"} className="btn theme-btn">
                  Finish now
                </Link>
              </div>
            </div>
            <div className="position-relative arrow-down">
              <img src={arrowdown} className="position-absolute" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
