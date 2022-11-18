import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import founder1 from "../../assets/img/founder1.png";
import founder2 from "../../assets/img/founder2.png";
import stats3 from "../../assets/img/stats3.png";
import stats3mb from "../../assets/img/stats3-mb.png";
import stats1 from "../../assets/img/stats1.png";
import stats1mb from "../../assets/img/stats1-mb.png";
import stats2 from "../../assets/img/stats2.png";
import stats2mb from "../../assets/img/stats2-mb.png";
import arrowdown from "../../assets/img/arrow-down.svg";
import arrowup from "../../assets/img/arrow-up.svg";
import { Link } from "react-router-dom";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IndexBodyContent(props) {
  const [isactive, setisactive] = useState("ex1-tab-1");
  const [isactivenext, setisactivenext] = useState("ex2-tab-1");
  const [isactiveselect, setisactiveselect] = useState("ex-tab-1");
  const [isactiveselectnext, setisactiveselectnext] = useState("extab-1");
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1.5,
    arrows: false,
  };
  var settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const showtab = (event) => {
    //console.log(event.currentTarget.id);

    setisactive(event.currentTarget.id);
    // event.currentTarget.className += " active";
  };
  const showtabnext = (event) => {
    //console.log(event.currentTarget.id);

    setisactivenext(event.currentTarget.id);
    // event.currentTarget.className += " active";
  };
  const showselecteddiv = (event) => {
    //console.log(event.currentTarget.id);

    setisactiveselect(event.currentTarget.value);
    // console.log(event.currentTarget.value);
    // event.currentTarget.className += " active";
  };
  const showselecteddivnext = (event) => {
    //console.log(event.currentTarget.id);

    setisactiveselectnext(event.currentTarget.value);
    // console.log(event.currentTarget.value);
    // event.currentTarget.className += " active";
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className="row m-0 p-0 position-relative header-content "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="container main-container subject">
          <div className="d-flex align-items-center text-center justify-content-center flex-column mt-5 pt-sm-0 pt-5">
            <h1 className="color-black1">
              Powerful Data Visualization
              <br /> for your <span className="color-blue">Business.</span>
            </h1>
            <p className="font-20 color-black1">
              Seamless integrations with your CRM and marketing platforms
            </p>
            <div className="d-flex my-sm-3 my-1 m-flex-column">
              <button className="btn theme-btn h-56 w-auto">
                <Link to={"/dashboard"} style={{ color: "#FFFFFF" }}>
                  Get started
                </Link>
              </button>
              <button className="btn theme-btn-light mx-sm-3 mt-sm-0 mt-3">
                <svg
                  width="29"
                  height="30"
                  viewBox="0 0 29 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.5" cy="15" r="14.5" fill="#/3B5998" />
                  <path
                    d="M12.5998 9.78446C11.6397 9.22208 10.8613 9.68279 10.8613 10.8127V19.1506C10.8613 20.2816 11.6397 20.7417 12.5998 20.1799L19.7364 16.0004C20.6968 15.4378 20.6968 14.5263 19.7364 13.9639L12.5998 9.78446Z"
                    fill="white"
                  />
                </svg>

                <span className="ms-3">Learn more about us</span>
              </button>
            </div>
          </div>
          <div className="position-relative arrow-down">
            <img src={arrowdown} className="position-absolute" alt="" />
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 position-relative stats-section my-5 animation-element bounce-down in-view">
        <div className="container main-container subject">
          <div className="position-relative arrow-up">
            <img src={arrowup} className="position-absolute" alt="" />
          </div>
          <img src={stats1} className="desktop w-100 " alt="" />
          <img src={stats1mb} className="mobile w-100 px-3" alt="" />
        </div>
      </div>
      <div
        className="row m-0 p-0 position-relative revenue-section animation-element bounce-up in-view"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="container main-container px-sm-0 px-4 subject">
          <div className="position-relative arrow-up">
            <img src={arrowup} className="position-absolute" alt="" />
          </div>
          <div className="row m-0 p-0 position-relative main-container1 justify-content-center">
            <h2 className="color-black2 mt-sm-5 mt-3 text-center px-5">
              See your revenue grow in
              <br /> real time with our dashboards.
            </h2>

            <div className="row m-0 p-0 position-relative mx-5 my-4 px-5 desktop revenue-content desktop">
              <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactive === "ex1-tab-1" ? "active" : ""
                    }`}
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    to={"/"}
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                    onClick={showtab}
                  >
                    CRM Integrations
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactive === "ex1-tab-2" ? "active" : ""
                    }`}
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    to={"/"}
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                    onClick={showtab}
                  >
                    Marketing Platform Integrations
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactive === "ex1-tab-3" ? "active" : ""
                    }`}
                    id="ex1-tab-3"
                    data-mdb-toggle="tab"
                    to={"/"}
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                    onClick={showtab}
                  >
                    Analytics
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactive === "ex1-tab-4" ? "active" : ""
                    }`}
                    id="ex1-tab-4"
                    data-mdb-toggle="tab"
                    to={"/"}
                    role="tab"
                    aria-controls="ex1-tabs-4"
                    aria-selected="false"
                    onClick={showtab}
                  >
                    Easy, Safe and Secured
                  </Link>
                </li>
              </ul>
              <div
                className="tab-content revenue-tab listing-style pe-5 pb-5"
                id="ex1-content"
              >
                <div
                  className={`tab-pane fade ${
                    isactive === "ex1-tab-1" ? "show active" : ""
                  }`}
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                    <li>
                      Euis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    isactive === "ex1-tab-2" ? "show active" : ""
                  }`}
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <ul>
                    <li>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                    <li>
                      Euis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    isactive === "ex1-tab-3" ? "show active" : ""
                  }`}
                  id="ex1-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <ul>
                    <li>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                    <li>
                      Euis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    isactive === "ex1-tab-4" ? "show active" : ""
                  }`}
                  id="ex1-tabs-4"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-4"
                >
                  <ul>
                    <li>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                    <li>
                      Euis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <select
              className="filter-select btn theme-btn mobile my-4"
              onClick={showselecteddiv}
            >
              <option value="ex-tab-1">CM Integration</option>
              <option value="ex-tab-2">Marketing Platform Integrations</option>
              <option value="ex-tab-3">Analytics</option>
              <option value="ex-tab-4">Easy, Safe and Secured</option>
            </select>

            <div className="row m-0 position-relative mobile">
              <div
                className="column technology 0 box"
                id="ex-tab-1"
                style={{
                  display: isactiveselect === "ex-tab-1" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 1</h2>
                    <ul className="listing-style">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="column technology 1 box"
                id="ex-tab-2"
                style={{
                  display: isactiveselect === "ex-tab-2" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 2</h2>
                    <ul className="listing-style">
                      <li>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="column technology 2 box"
                id="ex-tab-3"
                style={{
                  display: isactiveselect === "ex-tab-3" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 3</h2>
                    <ul className="listing-style">
                      <li>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="column real-estate 3 box"
                id="ex-tab-4"
                style={{
                  display: isactiveselect === "ex-tab-4" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 4</h2>
                    <ul className="listing-style">
                      <li>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative arrow-down">
            <img src={arrowdown} className="position-absolute" alt="" />
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 position-relative analytics-section section-margin animation-element bounce-down in-view">
        <div className="container main-container px-sm-0 px-4 subject">
          <div className="text-center d-flex align-items-center justify-content-center flex-column">
            <h2 className="color-black2">
              Marketing analytics that
              <br /> REALLY matter
            </h2>
            <img src={stats2} className="mt-4 desktop" alt="" />
            <img src={stats2mb} className="mt-3 mobile" alt="" />
          </div>
          <div
            className="row m-0 p-0 position-relative tab-container mx-sm-5 px-sm-5 justify-content-center in-view"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="row m-0 p-0 position-relative desktop">
              <ul
                className="nav nav-tabs mb-3 mx-5 px-5"
                id="ex2"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactivenext === "ex2-tab-1" ? "active" : ""
                    }`}
                    id="ex2-tab-1"
                    data-mdb-toggle="tab"
                    to={"/"}
                    role="tab"
                    aria-controls="ex2-tabs-1"
                    aria-selected="true"
                    onClick={showtabnext}
                  >
                    Spending
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactivenext === "ex2-tab-2" ? "active" : ""
                    }`}
                    id="ex2-tab-2"
                    data-mdb-toggle="tab"
                    href="#/ex2-tabs-2"
                    role="tab"
                    aria-controls="ex2-tabs-2"
                    aria-selected="false"
                    onClick={showtabnext}
                  >
                    Reach
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactivenext === "ex2-tab-3" ? "active" : ""
                    }`}
                    id="ex2-tab-3"
                    data-mdb-toggle="tab"
                    to={"/"}
                    role="tab"
                    aria-controls="ex2-tabs-3"
                    aria-selected="false"
                    onClick={showtabnext}
                  >
                    Revenue
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactivenext === "ex2-tab-4" ? "active" : ""
                    }`}
                    id="ex2-tab-4"
                    data-mdb-toggle="tab"
                    to={"/"}
                    role="tab"
                    aria-controls="ex2-tabs-4"
                    aria-selected="false"
                    onClick={showtabnext}
                  >
                    Inbound Leads
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    className={`nav-link ${
                      isactivenext === "ex2-tab-5" ? "active" : ""
                    }`}
                    id="ex2-tab-5"
                    data-mdb-toggle="tab"
                    to={"/"}
                    role="tab"
                    aria-controls="ex2-tabs-4"
                    aria-selected="false"
                    onClick={showtabnext}
                  >
                    Campaigns
                  </Link>
                </li>
              </ul>
              <div
                className="tab-content revenue-tab pe-5 pb-5"
                id="ex2-content"
              >
                <div
                  className={`tab-pane fade ${
                    isactivenext === "ex2-tab-1" ? "show active" : ""
                  }`}
                  id="ex2-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex2-tab-1"
                >
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    isactivenext === "ex2-tab-2" ? "show active" : ""
                  }`}
                  id="ex2-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex2-tab-2"
                >
                  <ul>
                    <li>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    isactivenext === "ex2-tab-3" ? "show active" : ""
                  }`}
                  id="ex2-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex2-tab-3"
                >
                  <ul>
                    <li>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    isactivenext === "ex2-tab-4" ? "show active" : ""
                  }`}
                  id="ex2-tabs-4"
                  role="tabpanel"
                  aria-labelledby="ex2-tab-4"
                >
                  <ul>
                    <li>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    isactivenext === "ex2-tab-5" ? "show active" : ""
                  }`}
                  id="ex2-tabs-5"
                  role="tabpanel"
                  aria-labelledby="ex2-tab-5"
                >
                  <ul>
                    <li>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.{" "}
                    </li>
                    <li>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                    <li>
                      Ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <select
              className="filter-select btn theme-btn mobile my-4"
              onClick={showselecteddivnext}
            >
              <option value="extab-1">Spending</option>
              <option value="extab-2">Reach</option>
              <option value="extab-3">Revenue</option>
              <option value="extab-4">Inbound Leads</option>
              <option value="extab-5">Campaigns</option>
            </select>

            <div className="row m-0 position-relative mobile">
              <div
                className="column technology 0 box"
                id="extab-1"
                style={{
                  display: isactiveselectnext === "extab-1" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 1</h2>
                    <ul className="listing-style">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="column technology 1 box"
                id="extab-2"
                style={{
                  display: isactiveselectnext === "extab-2" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 2</h2>
                    <ul className="listing-style">
                      <li>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source.
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="column technology 2 box"
                id="extab-3"
                style={{
                  display: isactiveselectnext === "extab-3" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 3</h2>
                    <ul className="listing-style">
                      <li>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="column real-estate 3 box"
                id="extab-4"
                style={{
                  display: isactiveselectnext === "extab-4" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 4</h2>
                    <ul className="listing-style">
                      <li>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="column real-estate 4 box"
                id="extab-5"
                style={{
                  display: isactiveselectnext === "extab-5" ? "block" : "none",
                }}
              >
                <div className="content assets">
                  <div className="">
                    <h2 className="mobile">content 5</h2>
                    <ul className="listing-style">
                      <li>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                      <li>
                        Ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.{" "}
                      </li>
                      <li>
                        Euis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="position-relative arrow-down">
            <img src={arrowdown} className="position-absolute" alt="" />
          </div>
        </div>
      </div>
      <div className="row m-0 p-0 position-relative plans-section mt-sm-5 mt-3 in-view">
        <div className="container main-container">
          <h2 className="color-black2 text-center">
            Small business
            <br /> and agency plans
          </h2>
          <div className="row m-0 p-0 position-relative mt-sm-5 mt-3 ">
            <div
              className="col-sm-6 animation-element bounce-up in-view"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="content listing-style subject">
                <h3 className="color-black3">Small Business</h3>
                <ul>
                  <li>1 CRM & marketing platform integration</li>
                  <li>Automated ad spend budgeting</li>
                  <li>Accurate campaign lead data</li>
                </ul>
                <div className="d-flex align-items-center justify-content-center flex-column mt-sm-5 pt-sm-5">
                  <h4 className="color-black3 mt-sm-4">$99 monthly</h4>
                  <button className="btn theme-btn w-auto px-5">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 mt-sm-0 mt-4 animation-element bounce-down in-view"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="content listing-style subject">
                <h3 className="color-black3">Marketing Agencies</h3>
                <ul>
                  <li>Unlimited CRM & marketing platform integrations</li>
                  <li>Full access to reports, dedicated account manager</li>
                  <li>Automated ad spend budgeting</li>
                  <li>Accurate campaign lead data</li>
                </ul>
                <div className="d-flex align-items-center justify-content-center flex-column mt-sm-5 pt-sm-0">
                  <h4 className="color-black3">$299 monthly</h4>
                  <button className="btn theme-btn w-auto px-5">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative arrow-down">
            <img src={arrowdown} className="position-absolute" alt="" />
          </div>
        </div>
      </div>
      <div
        className="row m-0 p-0 position-relative saying-section section-margin animation-element bounce-down in-view"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="container main-container subject">
          <h2 className="color-black2 text-center px-sm-0 px-4">
            What people say
            <br /> about us
          </h2>
          <div className="row m-0 p-0 position-relative mt-4 desktop">
            <section
              className="saying-slider slider"
              style={{ maxWidth: "100%" }}
            >
              <div>
                <Slider {...settings1}>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="content d-flex">
                        <div className="img-sec d-flex align-items-center justify-content-center">
                          <img src={founder1} className="" alt="" />
                        </div>
                        <div className="data-sec ">
                          <div className="data p-5">
                            <p className="font-14 color-black3">
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.”{" "}
                            </p>
                            <h5 className="color-black1 mt-5">James</h5>
                            <label className="color-black3">
                              Co-Founder at
                              <br /> Slash next technologies.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="content d-flex">
                        <div className="img-sec d-flex align-items-center justify-content-center">
                          <img src={founder2} className="" alt="" />
                        </div>
                        <div className="data-sec ">
                          <div className="data p-5">
                            <p className="font-14 color-black3">
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.”{" "}
                            </p>
                            <h5 className="color-black1 mt-5">Kathie</h5>
                            <label className="color-black3">
                              Director and Founder at
                              <br /> CodeSync Inc.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="content d-flex">
                        <div className="img-sec d-flex align-items-center justify-content-center">
                          <img src={founder1} className="" alt="" />
                        </div>
                        <div className="data-sec ">
                          <div className="data p-5">
                            <p className="font-14 color-black3">
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.”{" "}
                            </p>
                            <h5 className="color-black1 mt-5">James</h5>
                            <label className="color-black3">
                              Co-Founder at
                              <br /> Slash next technologies.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="content d-flex">
                        <div className="img-sec d-flex align-items-center justify-content-center">
                          <img src={founder2} className="" alt="" />
                        </div>
                        <div className="data-sec ">
                          <div className="data p-5">
                            <p className="font-14 color-black3">
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.”{" "}
                            </p>
                            <h5 className="color-black1 mt-5">Kathie</h5>
                            <label className="color-black3">
                              Director and Founder at
                              <br /> CodeSync Inc.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="slide-content">
                      <div className="content d-flex">
                        <div className="img-sec d-flex align-items-center justify-content-center">
                          <img src={founder1} className="" alt="" />
                        </div>
                        <div className="data-sec ">
                          <div className="data p-5">
                            <p className="font-14 color-black3">
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.”{" "}
                            </p>
                            <h5 className="color-black1 mt-5">James</h5>
                            <label className="color-black3">
                              Co-Founder at
                              <br /> Slash next technologies.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </section>
          </div>
          <div className="row m-0 p-0 position-relative mobile">
            <section
              className="saying-slider slider"
              style={{ maxWidth: "100%" }}
            >
              <Slider {...settings2}>
                <div className="slide">
                  <div className="slide-content">
                    <div className="content p-3">
                      <div className="d-flex">
                        <div className="">
                          <img src={founder1} alt="" />
                        </div>
                        <div className="ms-3 mt-2">
                          <h5 className="color-black1 font-16 mb-0">James</h5>
                          <label className="color-black3 font-12">
                            Co-Founder at
                            <br /> Slash next technologies.
                          </label>
                        </div>
                      </div>
                      <p className="font-14 color-black3 mt-3">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide-content">
                    <div className="content p-3">
                      <div className="d-flex">
                        <div className="">
                          <img src={founder2} alt="" />
                        </div>
                        <div className="ms-3 mt-2">
                          <h5 className="color-black1 font-16 mb-0">Kathie</h5>
                          <label className="color-black3 font-12">
                            Director and Founder at
                            <br /> CodeSync Inc.
                          </label>
                        </div>
                      </div>
                      <p className="font-14 color-black3 mt-3">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide-content">
                    <div className="content p-3">
                      <div className="d-flex">
                        <div className="">
                          <img src={founder1} alt="" />
                        </div>
                        <div className="ms-3 mt-2">
                          <h5 className="color-black1 font-16 mb-0">James</h5>
                          <label className="color-black3 font-12">
                            Co-Founder at
                            <br /> Slash next technologies.
                          </label>
                        </div>
                      </div>
                      <p className="font-14 color-black3 mt-3">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="slide-content">
                    <div className="content p-3">
                      <div className="d-flex">
                        <div className="">
                          <img src={founder2} alt="" />
                        </div>
                        <div className="ms-3 mt-2">
                          <h5 className="color-black1 font-16 mb-0">Kathie</h5>
                          <label className="color-black3 font-12">
                            Director and Founder at
                            <br /> CodeSync Inc.
                          </label>
                        </div>
                      </div>
                      <p className="font-14 color-black3 mt-3">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.”{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </section>
          </div>
        </div>
      </div>
      <div
        className="row m-0 p-0 position-relative scale-section section-margin animation-element bounce-up in-view"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="container main-container subject">
          <div className="d-flex align-items-center justify-content-center flex-column">
            <h2 className="color-black2">Are you ready to scale?</h2>
            <button className="btn theme-btn h-56 w-auto mt-sm-3 mt-1">
              Start My Free Trial
            </button>
          </div>
          <div className="row m-0 p-0 position-relative mt-5">
            <img src={stats3} className="w-100 desktop" alt="" />
            <img src={stats3mb} className="w-100 mobile" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
