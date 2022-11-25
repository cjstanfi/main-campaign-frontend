import React from "react";
import Slider from "react-slick";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";
import logo from "../../assets/img/logo.svg";
import company1 from "../../assets/img/companies/company1.svg";
import company2 from "../../assets/img/companies/company2.svg";
import company3 from "../../assets/img/companies/company3.svg";
import company4 from "../../assets/img/companies/company4.svg";
import company5 from "../../assets/img/companies/company5.svg";
import company6 from "../../assets/img/companies/company6.svg";
import company7 from "../../assets/img/companies/company7.svg";
import company8 from "../../assets/img/companies/company8.svg";
import ArrowsPrev from "./ArrowsPrev";
import ArrowsNext from "./ArrowsNext";
import { Link } from "react-router-dom";

export default function Footer(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
    nextArrow: <ArrowsNext onClick={props.onClick} />,
    prevArrow: <ArrowsPrev onClick={props.onClick} />,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="row m-0 p-0 position-relative companies-section background-grey section-margin animation-element bounce-down in-view">
        <div className="container main-container pt-sm-5 pt-4 subject">
          <section
            className="companies-slider slider"
            style={{ maxWidth: "100%" }}
          >
            <Slider {...settings}>
              <div className="slide">
                <div className="slide-content">
                  <img src={company1} alt="" />
                </div>
              </div>

              <div className="slide">
                <div className="slide-content">
                  <img src={company1} alt="" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <img src={company2} alt="" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <img src={company3} alt="" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <img src={company4} alt="" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <img src={company5} alt="" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <img src={company6} alt="" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <img src={company7} alt="" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <img src={company8} alt="" />
                </div>
              </div>
            </Slider>
          </section>
        </div>
      </div>
      <footer className="animation-element bounce-up background-grey px-sm-0 px-3 in-view">
        <div
          className="container main-container py-sm-4 py-3 subject "
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="container footer-container">
            <div className="row m-0 p-0 position-relative">
              <div className="col-sm-3">
                <div className="item-center my-sm-0 my-3">
                  <img src={logo} width="243" alt="logo" />
                </div>
              </div>
              <div className="col-sm-5 mt-sm-3 mt-4">
                <div className="row m-0 p-0 position-relative">
                  <div className="col-sm-6 col-6">
                    <div className="row m-0 p-0 position-relative">
                      <h5 className="font-upercase color-black1 letter-05">
                        company
                      </h5>
                    </div>
                    <div className="row m-0 p-0 position-relative mt-sm-3 mt-0">
                      <Link to={"/"} className="color-black1 font-opacity">
                        Home
                      </Link>
                    </div>
                    <div className="row m-0 p-0 position-relative mt-2">
                      <Link to={"/"} className="color-black1 font-opacity">
                        About us
                      </Link>
                    </div>
                    <div className="row m-0 p-0 position-relative mt-2">
                      <Link className="color-black1 font-opacity">Pricing</Link>
                    </div>
                    <div className="row m-0 p-0 position-relative mt-2">
                      <Link className="color-black1 font-opacity">
                        Start free trial
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6 ps-sm-5 col-6">
                    <div className="row m-0 p-0 position-relative">
                      <h5 className="font-upercase color-black1 letter-05">
                        Support
                      </h5>
                    </div>
                    <div className="row m-0 p-0 position-relative mt-sm-3 mt-0">
                      <Link className="color-black1 font-opacity">
                        Contact us
                      </Link>
                    </div>
                    <div className="row m-0 p-0 position-relative mt-2">
                      <Link className="color-black1 font-opacity">FAQs</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mt-sm-3 mt-4">
                <div className="row m-0 p-0 position-relative">
                  <h5 className="font-upercase color-black1 letter-05">
                    subscribe
                  </h5>
                </div>
                <div className="subscribe-btn d-flex my-sm-3 my-2">
                  <input
                    className=""
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter Email Address"
                  />
                  <div className="d-flex align-items-center ms-auto">
                    <button className="btn theme-btn mx-sm-3 mx-2 ">
                      Subscribe
                    </button>
                  </div>
                </div>
                <p className="font-opacity color-black1 font-14">
                  By submitting your email you agree to our Terms of Use and
                  Sale and Privacy Policy. You will receive email communications
                  from us for marketing, informational, and promotional purposes
                  and can opt-out at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-container1 subject">
          <div className="d-flex footer-bottom m-flex-column m-txt-center py-sm-5 py-4 item-center">
            <div className="me-sm-auto my-0">
              <p className="mb-1 color-black1 font-opacity font-14">
                <Link to={"privacy"} target="_blank" >Privacy Policy</Link> • <Link>Terms & Conditions</Link>
              </p>
            </div>
            <div className="ms-sm-auto d-flex mt-sm-0 mt-2">
              <Link to={"/"}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#/3B5998"
                    fillOpacity="0.1"
                  />
                  <g clipPath="url(#/clip0_33_1560)">
                    <path
                      d="M34.5 17.4887C33.7191 17.8313 32.8869 18.0583 32.0194 18.1686C32.9119 17.6357 33.5931 16.7983 33.9133 15.789C33.0812 16.2851 32.1624 16.6356 31.1833 16.8311C30.3932 15.9898 29.2671 15.4688 28.0386 15.4688C25.6551 15.4688 23.7362 17.4034 23.7362 19.7751C23.7362 20.1163 23.7651 20.4444 23.8359 20.7568C20.2568 20.5822 17.0897 18.8668 14.9621 16.2536C14.5907 16.8981 14.3728 17.6357 14.3728 18.4298C14.3728 19.9208 15.1406 21.2424 16.2851 22.0076C15.5934 21.9945 14.9149 21.7937 14.34 21.4774C14.34 21.4905 14.34 21.5076 14.34 21.5246C14.34 23.6167 15.8323 25.3545 17.7892 25.7548C17.4388 25.8506 17.0569 25.8966 16.6605 25.8966C16.3849 25.8966 16.1066 25.8808 15.8454 25.8231C16.4032 27.528 17.9861 28.7814 19.8683 28.8221C18.4035 29.9679 16.5437 30.6583 14.5303 30.6583C14.1773 30.6583 13.8386 30.6426 13.5 30.5992C15.4071 31.8291 17.6672 32.5312 20.1045 32.5312C28.0267 32.5312 32.358 25.9688 32.358 20.2804C32.358 20.0901 32.3514 19.9063 32.3422 19.7239C33.1967 19.1175 33.9146 18.3602 34.5 17.4887Z"
                      fill="#/3B5998"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_33_1560">
                      <rect
                        width="21"
                        height="21"
                        fill="white"
                        transform="translate(13.5 13.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link to={"/"} className="ms-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#/3B5998"
                    fillOpacity="0.1"
                  />
                  <g clipPath="url(#/clip0_33_1552)">
                    <path
                      d="M27.4978 16.9869H29.4149V13.6479C29.0842 13.6024 27.9467 13.5 26.6219 13.5C23.8578 13.5 21.9643 15.2386 21.9643 18.4341V21.375H18.9141V25.1077H21.9643V34.5H25.7041V25.1086H28.6309L29.0956 21.3759H25.7032V18.8042C25.7041 17.7254 25.9946 16.9869 27.4978 16.9869Z"
                      fill="#/3B5998"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_33_1552">
                      <rect
                        width="21"
                        height="21"
                        fill="white"
                        transform="translate(13.5 13.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link to={"/"} className="ms-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#/3B5998"
                    fillOpacity="0.1"
                  />
                  <g clipPath="url(#/clip0_33_1556)">
                    <path
                      d="M35.25 17.25C35.25 16.0125 34.2375 15 33 15H15C13.7625 15 12.75 16.0125 12.75 17.25V30.75C12.75 31.9875 13.7625 33 15 33H33C34.2375 33 35.25 31.9875 35.25 30.75V17.25ZM33 17.25L24 22.8637L15 17.25H33ZM33 30.75H15V19.5L24 25.125L33 19.5V30.75Z"
                      fill="#/3B5998"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_33_1556">
                      <rect
                        width="27"
                        height="27"
                        fill="white"
                        transform="translate(10.5 10.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link to={"/"} className="ms-3">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#/3B5998"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M24.0129 11C16.8766 11 11.0898 16.7857 11.0898 23.923C11.0898 29.6329 14.7927 34.477 19.9274 36.1858C20.5733 36.3054 20.8104 35.9054 20.8104 35.5641C20.8104 35.256 20.7984 34.2379 20.7929 33.158C17.1976 33.9398 16.439 31.6333 16.439 31.6333C15.8511 30.1395 15.0041 29.7424 15.0041 29.7424C13.8317 28.9403 15.0925 28.9568 15.0925 28.9568C16.3902 29.048 17.0735 30.2885 17.0735 30.2885C18.2261 32.2642 20.0967 31.693 20.8341 31.3629C20.9501 30.5275 21.2851 29.9575 21.6546 29.6348C18.7843 29.3079 15.7668 28.1998 15.7668 23.2481C15.7668 21.8373 16.2716 20.6844 17.0984 19.7794C16.9642 19.4539 16.5219 18.1395 17.2235 16.3595C17.2235 16.3595 18.3087 16.0121 20.7783 17.6841C21.8091 17.3977 22.9146 17.2542 24.0129 17.2493C25.1112 17.2542 26.2175 17.3977 27.2503 17.6841C29.7169 16.0121 30.8006 16.3595 30.8006 16.3595C31.504 18.1395 31.0615 19.4539 30.9273 19.7794C31.7559 20.6844 32.2573 21.8372 32.2573 23.2481C32.2573 28.2116 29.2341 29.3046 26.3565 29.6245C26.82 30.0255 27.233 30.812 27.233 32.0176C27.233 33.7467 27.218 35.1384 27.218 35.5641C27.218 35.908 27.4506 36.3109 28.1057 36.184C33.2377 34.4733 36.9358 29.631 36.9358 23.923C36.9358 16.7857 31.1499 11 24.0129 11Z"
                    fill="#/3B5998"
                  />
                  <path
                    d="M15.9301 29.4091C15.9017 29.4732 15.8006 29.4925 15.7087 29.4485C15.6149 29.4063 15.5622 29.3188 15.5926 29.2543C15.6205 29.1882 15.7216 29.1698 15.8152 29.2142C15.9091 29.2562 15.9626 29.3446 15.9301 29.4091ZM16.5658 29.9763C16.5042 30.0334 16.3837 30.0069 16.3019 29.9166C16.2173 29.8265 16.2015 29.706 16.2641 29.648C16.3276 29.5909 16.4445 29.6176 16.5292 29.7078C16.6137 29.7989 16.6302 29.9186 16.5657 29.9764M17.0019 30.7019C16.9227 30.757 16.7931 30.7054 16.7132 30.5905C16.634 30.4756 16.634 30.3378 16.7149 30.2825C16.7952 30.2273 16.9227 30.277 17.0037 30.391C17.0828 30.5079 17.0828 30.6457 17.0018 30.702M17.7394 31.5425C17.6685 31.6205 17.5177 31.5996 17.4072 31.493C17.2943 31.3888 17.2628 31.2409 17.3339 31.1628C17.4055 31.0846 17.5572 31.1065 17.6685 31.2123C17.7807 31.3162 17.815 31.4652 17.7395 31.5425M18.6925 31.8263C18.6614 31.9274 18.516 31.9734 18.3697 31.9304C18.2235 31.8862 18.1279 31.7676 18.1573 31.6653C18.1878 31.5634 18.3337 31.5155 18.4812 31.5615C18.6271 31.6056 18.723 31.7233 18.6926 31.8263M19.7774 31.9466C19.781 32.0532 19.6569 32.1416 19.5032 32.1435C19.3487 32.1468 19.2237 32.0606 19.2221 31.9558C19.2221 31.8481 19.3434 31.7606 19.4978 31.758C19.6515 31.755 19.7774 31.8406 19.7774 31.9466ZM20.843 31.9057C20.8615 32.0097 20.7546 32.1165 20.6021 32.1449C20.4521 32.1723 20.3132 32.1081 20.2941 32.005C20.2754 31.8984 20.3843 31.7917 20.534 31.764C20.6868 31.7375 20.8235 31.8 20.843 31.9057Z"
                    fill="#/3B5998"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
