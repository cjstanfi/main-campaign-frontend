import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import avatar from "../../assets/img/avatar.png";
import Badge from "../../assets/img/Badge.svg";
import { Link } from "react-router-dom";
import { updatesearch } from "../../actions/action";
import "./analytics.css";
import useFetchWithRedux from "../../hooks/useFetchWithRedux";
import {marketingPlatformBusinessByNameSelector} from "../../reducer/MarketingPlatformBusinessSlice";
import makeSummary from "../../models/summary-model";
import {setSummaryData} from "../../reducer/FacebookSummarySlice";
export default function Headingbar() {
  const [businessId, setBusinessId] = useState("")
  const [toggledclass, settoggledclass] = useState(false);
  const { marketingPlatformBusinessData } = useSelector((state) => state.marketingPlatformBusiness)
  const filteredBusiness = useSelector(marketingPlatformBusinessByNameSelector(businessId))
  // useFetchWithRedux(`https://test.api.maincampaign.com/summary/facebook/campaign/${filteredBusiness[0]?.marketingPlatformBusinessId}?orderBy=id&recordLimit=10&orderDirection=ASC&recordOffset=0`, makeSummary, setSummaryData)

  const dispatch = useDispatch();

  function searchItems(e) {
    dispatch(updatesearch(e));
  }
  function addremoveclass() {
    settoggledclass(!toggledclass);
  }
  function addremoveclassmouseleave() {
    settoggledclass(false);
  }

  function onClickBusiness(e){
    setBusinessId(e.target.innerHTML)
    console.log(e.target.innerHTML)
  }

  return (
    <div className="d-flex my-5 pt-3 m-flex-column total-section-filters">
      <div className="me-auto d-flex m-flex-column links">
        <div
          className="dropdown mt-sm-0 mt-4 dash-new"
          onMouseLeave={addremoveclassmouseleave}
        >
          <Link
            className={`btn custom-dropdown dropdown-toggle d-flex align-items-center h-50 ${
              toggledclass ? "show" : ""
            }`}
            role="button"
            id="dropdownMenuLink"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            onClick={addremoveclass}
          >
            <span className="me-auto">Business name</span>
            <svg
              className="ms-auto"
              width="11"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2812 0.947999L6.5 5.71883L1.71875 0.947999L0.25 2.41675L6.5 8.66675L12.75 2.41675L11.2812 0.947999Z"
                fill="#7D889E"
              />
            </svg>
          </Link>
          <ul
            className={`dropdown-menu ${toggledclass ? "show" : ""}`}
            aria-labelledby="dropdownMenuLink"
          >
            {
              marketingPlatformBusinessData?.map(marketingPlatformBusiness => {
              return <li>
                <Link className="dropdown-item" onClick={onClickBusiness}>{marketingPlatformBusiness.marketingPlatformBusinessName}</Link>
              </li>
            })
            }
          </ul>
        </div>
        <div className="custom-input2 d-t-none h-50 w-350 ms-sm-3 d-flex align-items-center mt-sm-0 mt-3">
          <input
            className="me-auto"
            type="text"
            placeholder="Search here..."
            onChange={(e) => searchItems(e.target.value)}
          />
          <svg
            className="ms-auto"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_100_295)">
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#7D889E"
              />
            </g>
            <defs>
              <clipPath id="clip0_100_295">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="ms-auto d-flex m-flex-column">
        <div className="d-flex mt-sm-0 mt-3 d-t-none">
          <div className="custom-input2 h-50 w-180 ms-sm-3 d-flex align-items-center">
            <input className="me-auto" type="text" placeholder="Start date" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_100_316)">
                <path
                  d="M7 11H9V13H7V11ZM21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.9 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19ZM15 13H17V11H15V13ZM11 13H13V11H11V13Z"
                  fill="#7D889E"
                />
              </g>
              <defs>
                <clipPath id="clip0_100_316">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="custom-input2 h-50 w-180 ms-3 d-flex align-items-center">
            <input className="me-auto" type="text" placeholder="End date" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_100_316)">
                <path
                  d="M7 11H9V13H7V11ZM21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.9 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19ZM15 13H17V11H15V13ZM11 13H13V11H11V13Z"
                  fill="#7D889E"
                />
              </g>
              <defs>
                <clipPath id="clip0_100_316">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="desktop">
          <div className="grey-btn d-flex align-items-center justify-content-center ms-4 header-btns">
            <Link className="d-flex align-items-center justify-content-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.8848 24C12.3848 24 10.8848 24 9.38475 24C9.35687 23.9871 9.33018 23.9692 9.30087 23.9622C8.4547 23.759 7.93513 23.1992 7.79561 22.3408C7.73429 21.9635 7.67141 21.5864 7.60709 21.2095C7.44563 20.2639 6.58427 19.7618 5.67959 20.0883C5.2836 20.2313 4.8933 20.3904 4.49557 20.5281C3.60645 20.8361 2.70352 20.5128 2.22871 19.7038C1.56525 18.5731 0.909733 17.4377 0.262463 16.2978C-0.208597 15.4682 -0.033825 14.5287 0.69233 13.9079C1.01281 13.6339 1.34541 13.374 1.66627 13.1004C2.38117 12.4908 2.38105 11.508 1.66652 10.8997C1.35729 10.6365 1.03819 10.3851 0.72821 10.1227C-0.0443885 9.46889 -0.21466 8.53665 0.285778 7.6616C0.921109 6.55077 1.56069 5.44226 2.20527 4.33674C2.71121 3.46907 3.61927 3.14809 4.56114 3.49413C4.94906 3.63665 5.33205 3.79311 5.7226 3.92781C6.59114 4.22735 7.44669 3.71791 7.60409 2.81367C7.67097 2.42937 7.73335 2.04426 7.79574 1.65921C7.93482 0.800852 8.45382 0.241281 9.30037 0.0375672C9.32975 0.0305038 9.35656 0.0128141 9.38463 0C10.8846 0 12.3846 0 13.8846 0C13.9126 0.0127516 13.9394 0.0305658 13.9688 0.0376292C14.8138 0.240155 15.3338 0.800727 15.4735 1.65915C15.5348 2.03651 15.5974 2.41362 15.6621 2.79042C15.8246 3.73635 16.6844 4.23735 17.5902 3.91112C17.9789 3.77111 18.3622 3.61559 18.7514 3.47713C19.6464 3.15878 20.5601 3.47863 21.0406 4.29617C21.7048 5.42632 22.3598 6.56196 23.0067 7.70211C23.4773 8.53152 23.3025 9.46971 22.5764 10.0925C22.2564 10.367 21.9234 10.6264 21.6026 10.9001C20.8872 11.5108 20.8874 12.4883 21.603 13.1002C21.9117 13.3641 22.2313 13.6149 22.5414 13.8773C23.3134 14.5303 23.4838 15.4639 22.9835 16.3388C22.3482 17.4496 21.7086 18.5582 21.0639 19.6635C20.5581 20.5304 19.6495 20.851 18.7072 20.5054C18.3192 20.3632 17.9362 20.207 17.5457 20.072C16.6772 19.772 15.8205 20.2823 15.665 21.1862C15.5988 21.5706 15.5362 21.9557 15.4735 22.3407C15.3333 23.1996 14.8134 23.7596 13.9685 23.9621C13.9392 23.9691 13.9126 23.9871 13.8848 24ZM13.6057 22.1179C13.6693 21.738 13.7362 21.3697 13.7919 20.9997C14.0895 19.0211 15.8739 17.7532 17.7824 18.1976C18.2878 18.3153 18.7709 18.5314 19.2601 18.7134C19.3805 18.7583 19.4418 18.7432 19.5019 18.6305C19.6156 18.4172 19.7413 18.2102 19.8622 18.0007C20.3687 17.1226 20.8752 16.2444 21.3878 15.3558C21.0733 15.0962 20.7675 14.8426 20.4604 14.5904C18.7663 13.1989 18.7667 10.7995 20.4612 9.40895C20.7683 9.15698 21.0741 8.90332 21.3887 8.64348C20.7505 7.5384 20.1202 6.44351 19.4817 5.35337C19.4544 5.30693 19.3393 5.27017 19.285 5.2883C18.9596 5.39663 18.6389 5.51908 18.319 5.64309C17.7161 5.87694 17.0975 5.96451 16.4589 5.83756C15.02 5.55133 14.0145 4.47601 13.7916 2.99857C13.7352 2.62458 13.6665 2.25229 13.6054 1.88993C12.2717 1.88993 10.9711 1.88993 9.66129 1.88993C9.59803 2.27204 9.53296 2.64059 9.47645 3.01045C9.17479 4.98551 7.37999 6.25061 5.47563 5.80061C4.99319 5.6866 4.53132 5.48107 4.06582 5.30236C3.90355 5.24004 3.82592 5.26361 3.73747 5.41963C3.15627 6.44445 2.56332 7.46258 1.97481 8.48321C1.94474 8.5354 1.92011 8.59072 1.89005 8.65035C2.18702 8.89557 2.47525 9.1346 2.76447 9.37232C4.52138 10.8163 4.52044 13.1836 2.76259 14.6292C2.46949 14.8701 2.17789 15.1131 1.88279 15.3575C2.52231 16.4657 3.15121 17.5527 3.77585 18.6423C3.83542 18.7461 3.89224 18.7588 4.00081 18.7159C4.35611 18.5756 4.71541 18.4453 5.07445 18.3148C7.01007 17.6107 9.06021 18.781 9.43901 20.8076C9.52027 21.2423 9.59078 21.679 9.66673 22.1179C10.983 22.1179 12.2782 22.1179 13.6057 22.1179Z"
                  fill="#7D889E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.481 16.6241C8.88345 16.4903 6.88713 14.3363 7.00709 11.8292C7.13048 9.25013 9.27169 7.27275 11.7979 7.38227C14.3878 7.49447 16.3744 9.65943 16.2606 12.1584C16.1438 14.724 14.0277 16.6973 11.481 16.6241ZM14.3868 12.0065C14.3924 10.5077 13.1587 9.26245 11.6524 9.24663C10.1487 9.23082 8.88639 10.4817 8.88108 11.9929C8.87576 13.491 10.1103 14.7373 11.6154 14.7533C13.1183 14.7691 14.381 13.5177 14.3868 12.0065Z"
                  fill="#7D889E"
                />
              </svg>
            </Link>
          </div>
          <div className="grey-btn d-flex align-items-center justify-content-center ms-3 header-btns">
            <Link className="d-flex align-items-center justify-content-center">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.62336 0C9.18575 0.189086 9.4154 0.587449 9.37615 1.16883C9.35939 1.41712 9.37339 1.6674 9.37339 1.90868C9.79176 2.02313 10.2034 2.11139 10.5985 2.24759C13.192 3.14196 14.9712 5.60233 14.9941 8.34267C15.01 10.2482 15.0023 12.1539 14.9952 14.0594C14.9936 14.5034 15.1361 14.818 15.5407 15.0585C16.6192 15.6997 17.1044 16.9919 16.7659 18.2045C16.4353 19.3895 15.333 20.2452 14.094 20.2473C10.3218 20.2535 6.54973 20.2535 2.77757 20.2473C1.53248 20.2453 0.415899 19.3712 0.0993592 18.1817C-0.229369 16.9465 0.273631 15.6753 1.37083 15.0335C1.73269 14.8217 1.87514 14.5285 1.87458 14.1293C1.87202 12.2394 1.86939 10.3494 1.87452 8.45937C1.88177 5.74847 3.48241 3.37348 5.98822 2.35179C6.22575 2.25491 6.47266 2.17827 6.71981 2.10864C6.96634 2.03932 7.21875 1.99062 7.49853 1.92599C7.49853 1.6784 7.5126 1.42249 7.49572 1.16871C7.4569 0.587511 7.68531 0.188462 8.24857 6.29504e-05C8.37333 4.42557e-07 8.49835 0 8.62336 0ZM8.41209 18.375C10.2789 18.375 12.1459 18.376 14.0128 18.3742C14.4862 18.3737 14.8383 18.114 14.96 17.6873C15.0783 17.2729 14.9187 16.8585 14.5191 16.6271C13.5437 16.0619 13.1232 15.1982 13.1233 14.0982C13.1235 12.2469 13.128 10.3956 13.1192 8.54438C13.1176 8.20284 13.0883 7.85667 13.027 7.52081C12.5746 5.04526 10.062 3.3411 7.59805 3.82848C5.30757 4.28153 3.75225 6.16552 3.74888 8.49688C3.74613 10.4028 3.75976 12.3089 3.7435 14.2147C3.73463 15.2475 3.30551 16.0663 2.39246 16.6023C2.27376 16.672 2.15674 16.7632 2.07342 16.8711C1.84477 17.1673 1.80264 17.4999 1.96878 17.8397C2.14262 18.1951 2.43996 18.3735 2.83476 18.3739C4.69387 18.376 6.55298 18.3749 8.41209 18.375Z"
                  fill="#7D889E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.37217 23.9998C6.30835 23.9722 6.24422 23.9453 6.18084 23.9167C5.78585 23.7387 5.55763 23.3145 5.63464 22.9021C5.71578 22.4676 6.07426 22.1327 6.51313 22.1295C7.79398 22.1199 9.07495 22.12 10.3557 22.1295C10.7945 22.1327 11.1525 22.467 11.2342 22.902C11.3115 23.3141 11.0836 23.7383 10.6884 23.9166C10.625 23.9452 10.5609 23.9721 10.4972 23.9998C9.1222 23.9998 7.74722 23.9998 6.37217 23.9998Z"
                  fill="#7D889E"
                />
              </svg>
            </Link>
          </div>
          <div className="position-relative ms-4">
            <Link>
              <img src={avatar} alt="" />
            </Link>
            <img
              src={Badge}
              className="position-absolute avatar-badge"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
