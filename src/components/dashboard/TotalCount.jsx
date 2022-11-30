import React, { useEffect } from "react";
import exclamation from "../../assets/img/exclamation.svg";
import pinkvector from "../../assets/img/pink-vector.svg";
// import Slider from "react-slick";
import greenvector from "../../assets/img/green-vector.svg";
import { useDispatch, useSelector } from "react-redux";
import { getallPost } from "../../actions/action";
import { Link } from "react-router-dom";
export default function TotalCount() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallPost());
  }, []);
  const currentUser = useSelector((state) => {
    return state.data.datas;
  });

  var Revenue = currentUser.reduce(function (_this, val) {
    return _this + parseInt(val.Revenue);
  }, 0);

  var Ads = currentUser.reduce(function (_this, val) {
    return _this + val.Ads;
  }, 0);
  var Adsets = currentUser.reduce(function (_this, val) {
    return _this + val.Adsets;
  }, 0);
  var Leads = currentUser.reduce(function (_this, val) {
    return _this + val.Leads;
  }, 0);
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 5,
  //   arrows: false,
  //   mobileFirst: true,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    // <section className="total-slider slider p-sm-0 slick-initialized slick-slider">
    <section className="row slider_wrap p-0">
      {/* <Slider {...settings}> */}

      <div className="col-2-half">
        <div className="slide-content">
          <div className="content">
            <div className="data p-3 px-3">
              <div className="d-flex">
                <div className="me-auto d-flex align-items-center">
                  <h5 className="color-grey mb-0">Total Revenue</h5>
                  <img src={exclamation} className="ms-2" alt="" />
                </div>
                <div className="ms-auto">
                  <div className="dropdown stats-opts">
                    <button
                      className="dropdown-toggle d-flex p-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_907)">
                          <path
                            d="M7.74996 12.9167C6.32913 12.9167 5.16663 14.0792 5.16663 15.5001C5.16663 16.9209 6.32913 18.0834 7.74996 18.0834C9.17079 18.0834 10.3333 16.9209 10.3333 15.5001C10.3333 14.0792 9.17079 12.9167 7.74996 12.9167ZM23.25 12.9167C21.8291 12.9167 20.6666 14.0792 20.6666 15.5001C20.6666 16.9209 21.8291 18.0834 23.25 18.0834C24.6708 18.0834 25.8333 16.9209 25.8333 15.5001C25.8333 14.0792 24.6708 12.9167 23.25 12.9167ZM15.5 12.9167C14.0791 12.9167 12.9166 14.0792 12.9166 15.5001C12.9166 16.9209 14.0791 18.0834 15.5 18.0834C16.9208 18.0834 18.0833 16.9209 18.0833 15.5001C18.0833 14.0792 16.9208 12.9167 15.5 12.9167Z"
                            fill="#040310"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_907">
                            <rect width="31" height="31" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-sm-3 mt-2">
                <h3 className="color-black3 mb-0">{Revenue}k</h3>
                <div className="stats-box ms-3 bg-pink">
                  <span className="color-pink font-14 text-center font-600 letter-1">
                    -0.5%
                  </span>
                </div>
              </div>
            </div>
            <img src={pinkvector} className="w-100 img-vector" alt="" />
          </div>
        </div>
      </div>
      <div className="col-2-half">
        <div className="slide-content">
          <div className="content">
            <div className="data p-3 px-3">
              <div className="d-flex">
                <div className="me-auto d-flex align-items-center">
                  <h5 className="color-grey mb-0">Total Leads</h5>
                  <img src={exclamation} className="ms-2" alt="" />
                </div>
                <div className="ms-auto">
                  <div className="dropdown stats-opts">
                    <button
                      className="dropdown-toggle d-flex p-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_907)">
                          <path
                            d="M7.74996 12.9167C6.32913 12.9167 5.16663 14.0792 5.16663 15.5001C5.16663 16.9209 6.32913 18.0834 7.74996 18.0834C9.17079 18.0834 10.3333 16.9209 10.3333 15.5001C10.3333 14.0792 9.17079 12.9167 7.74996 12.9167ZM23.25 12.9167C21.8291 12.9167 20.6666 14.0792 20.6666 15.5001C20.6666 16.9209 21.8291 18.0834 23.25 18.0834C24.6708 18.0834 25.8333 16.9209 25.8333 15.5001C25.8333 14.0792 24.6708 12.9167 23.25 12.9167ZM15.5 12.9167C14.0791 12.9167 12.9166 14.0792 12.9166 15.5001C12.9166 16.9209 14.0791 18.0834 15.5 18.0834C16.9208 18.0834 18.0833 16.9209 18.0833 15.5001C18.0833 14.0792 16.9208 12.9167 15.5 12.9167Z"
                            fill="#040310"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_907">
                            <rect width="31" height="31" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-sm-3 mt-2">
                <h3 className="color-black3 mb-0">{Leads}</h3>
                <div className="stats-box ms-3 bg-green">
                  <span className="color-green font-14 text-center font-600 letter-1">
                    +1.5%
                  </span>
                </div>
              </div>
            </div>
            <img src={greenvector} className="w-100 img-vector" alt="" />
          </div>
        </div>
      </div>
      <div className="col-2-half">
        <div className="slide-content">
          <div className="content">
            <div className="data p-3 px-3">
              <div className="d-flex">
                <div className="me-auto d-flex align-items-center">
                  <h5 className="color-grey mb-0">Total Campaigns</h5>
                  <img src={exclamation} className="ms-2" alt="" />
                </div>
                <div className="ms-auto">
                  <div className="dropdown stats-opts">
                    <button
                      className="dropdown-toggle d-flex p-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_907)">
                          <path
                            d="M7.74996 12.9167C6.32913 12.9167 5.16663 14.0792 5.16663 15.5001C5.16663 16.9209 6.32913 18.0834 7.74996 18.0834C9.17079 18.0834 10.3333 16.9209 10.3333 15.5001C10.3333 14.0792 9.17079 12.9167 7.74996 12.9167ZM23.25 12.9167C21.8291 12.9167 20.6666 14.0792 20.6666 15.5001C20.6666 16.9209 21.8291 18.0834 23.25 18.0834C24.6708 18.0834 25.8333 16.9209 25.8333 15.5001C25.8333 14.0792 24.6708 12.9167 23.25 12.9167ZM15.5 12.9167C14.0791 12.9167 12.9166 14.0792 12.9166 15.5001C12.9166 16.9209 14.0791 18.0834 15.5 18.0834C16.9208 18.0834 18.0833 16.9209 18.0833 15.5001C18.0833 14.0792 16.9208 12.9167 15.5 12.9167Z"
                            fill="#040310"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_907">
                            <rect width="31" height="31" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-sm-3 mt-2">
                <h3 className="color-black3 mb-0">{currentUser.length}</h3>
                <div className="stats-box ms-3 bg-green">
                  <span className="color-green font-14 text-center font-600 letter-1">
                    +2.25%
                  </span>
                </div>
              </div>
            </div>
            <img src={greenvector} className="w-100 img-vector" alt="" />
          </div>
        </div>
      </div>
      <div className="col-2-half">
        <div className="slide-content">
          <div className="content">
            <div className="data p-3 px-3">
              <div className="d-flex">
                <div className="me-auto d-flex align-items-center">
                  <h5 className="color-grey mb-0">Ad Sets</h5>
                  <img src={exclamation} className="ms-2" alt="" />
                </div>
                <div className="ms-auto">
                  <div className="dropdown stats-opts">
                    <button
                      className="dropdown-toggle d-flex p-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_907)">
                          <path
                            d="M7.74996 12.9167C6.32913 12.9167 5.16663 14.0792 5.16663 15.5001C5.16663 16.9209 6.32913 18.0834 7.74996 18.0834C9.17079 18.0834 10.3333 16.9209 10.3333 15.5001C10.3333 14.0792 9.17079 12.9167 7.74996 12.9167ZM23.25 12.9167C21.8291 12.9167 20.6666 14.0792 20.6666 15.5001C20.6666 16.9209 21.8291 18.0834 23.25 18.0834C24.6708 18.0834 25.8333 16.9209 25.8333 15.5001C25.8333 14.0792 24.6708 12.9167 23.25 12.9167ZM15.5 12.9167C14.0791 12.9167 12.9166 14.0792 12.9166 15.5001C12.9166 16.9209 14.0791 18.0834 15.5 18.0834C16.9208 18.0834 18.0833 16.9209 18.0833 15.5001C18.0833 14.0792 16.9208 12.9167 15.5 12.9167Z"
                            fill="#040310"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_907">
                            <rect width="31" height="31" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-sm-3 mt-2">
                <h3 className="color-black3 mb-0">{Adsets}</h3>
                <div className="stats-box ms-3 bg-pink">
                  <span className="color-pink font-14 text-center font-600 letter-1">
                    -0.5%
                  </span>
                </div>
              </div>
            </div>
            <img src={pinkvector} className="w-100 img-vector" alt="" />
          </div>
        </div>
      </div>
      <div className="col-2-half">
        <div className="slide-content">
          <div className="content">
            <div className="data p-3 px-3">
              <div className="d-flex">
                <div className="me-auto d-flex align-items-center">
                  <h5 className="color-grey mb-0">Ads</h5>
                  <img src={exclamation} className="ms-2" alt="" />
                </div>
                <div className="ms-auto">
                  <div className="dropdown stats-opts">
                    <button
                      className="dropdown-toggle d-flex p-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_100_907)">
                          <path
                            d="M7.74996 12.9167C6.32913 12.9167 5.16663 14.0792 5.16663 15.5001C5.16663 16.9209 6.32913 18.0834 7.74996 18.0834C9.17079 18.0834 10.3333 16.9209 10.3333 15.5001C10.3333 14.0792 9.17079 12.9167 7.74996 12.9167ZM23.25 12.9167C21.8291 12.9167 20.6666 14.0792 20.6666 15.5001C20.6666 16.9209 21.8291 18.0834 23.25 18.0834C24.6708 18.0834 25.8333 16.9209 25.8333 15.5001C25.8333 14.0792 24.6708 12.9167 23.25 12.9167ZM15.5 12.9167C14.0791 12.9167 12.9166 14.0792 12.9166 15.5001C12.9166 16.9209 14.0791 18.0834 15.5 18.0834C16.9208 18.0834 18.0833 16.9209 18.0833 15.5001C18.0833 14.0792 16.9208 12.9167 15.5 12.9167Z"
                            fill="#040310"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_100_907">
                            <rect width="31" height="31" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={"/"}>
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-sm-3 mt-2">
                <h3 className="color-black3 mb-0">{Ads}</h3>
                <div className="stats-box ms-3 bg-green">
                  <span className="color-green font-14 text-center font-600 letter-1">
                    +1.5%
                  </span>
                </div>
              </div>
            </div>
            <img src={greenvector} className="w-100 img-vector" alt="" />
          </div>
        </div>
      </div>
      {/* </Slider> */}
    </section>
  );
}
