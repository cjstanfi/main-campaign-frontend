import React from "react";
import arrowup from "../../assets/img/arrow-up.svg";
import arrowdown from "../../assets/img/arrow-down.svg";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";
import { Link } from "react-router-dom";
export default function LoginExpandContentStep3() {
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
                <div className="line bg-line mleft1"></div>
                <div className="step mleft">
                  <div className="circle bg-grey"></div>
                  <h5 className="font-600 font-14 color-black1 mt-2">
                    Connect CRM
                  </h5>
                </div>
              </div>
            </div>
            <div className="row m-0 p-0 position-relative mobile">
              <div className="d-flex align-items-center justify-content-center mt-4 mb-2">
                <Link to={"/loginstep2"}>
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
                    3/4
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
                <h5 className="font-600 font-12 color-black1">Connect with</h5>
              </div>
            </div>
            <div className="position-relative arrow-up">
              <img src={arrowup} className="position-absolute" alt="" />
            </div>
            <div className="container-style  h-312 py-sm-5 py-2 mt-sm-4 mt-3">
              <div className="d-flex  justify-content-center">
                <div className="d-flex flex-column">
                  <button className="btn facebook-btn mt-sm-3 mt-4 w-auto">
                    <svg
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="29"
                        height="29"
                        rx="4"
                        fill="#5C76AB"
                      />
                      <path
                        d="M16.3319 10.3246H17.61V8.09858C17.3895 8.06825 16.6311 8 15.748 8C13.9052 8 12.6429 9.15908 12.6429 11.2894V13.25H10.6094V15.7385H12.6429V22H15.136V15.7391H17.0873L17.397 13.2506H15.1355V11.5362C15.136 10.8169 15.3297 10.3246 16.3319 10.3246Z"
                        fill="white"
                      />
                    </svg>
                    <span className="ms-3">
                      <Link>Login with Facebook</Link>
                    </span>
                  </button>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center my-sm-5 my-2 pt-4">
                <Link to={"/loginstep4"} className="btn theme-btn w-auto">
                  Proceed to next step
                </Link>
                <Link to={"/loginstep4"} className="btn theme-btn w-auto mt-2">
                  Skip for now & add later
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
