import { Link } from "react-router-dom";
import { useState } from "react";

const Sorting = ({ setOrderBy, setOrderDirection }) => {
  const [toggledSortByclass, settoggledSortByclass] = useState(false);
  const [toggledFilterByclass, settoggledFilterByclass] = useState(false);
  //console.log(setOrderBy)

  function addremoveEventsort() {
    settoggledSortByclass(!toggledSortByclass);
  }
  const addremoveFilterbyevent = () => {
    settoggledFilterByclass(!toggledFilterByclass);
  }
  return (
    <div className="ms-lg-auto d-flex align-items-center">
      <div className="dropdown">
        <Link
          className={`btn custom-dropdown2 dropdown-toggle d-flex align-items-center `}
          role="button"
          id="dropdownMenuLink"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
          onClick={addremoveEventsort}
        >
          <span className="me-auto">Sort by</span>
          <svg
            className="ms-auto"
            width="11"
            height="9"
            viewBox="0 0 13 9"
            fillRule="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2812 0.947999L6.5 5.71883L1.71875 0.947999L0.25 2.41675L6.5 8.66675L12.75 2.41675L11.2812 0.947999Z"
              fill="#7D889E"
            />
          </svg>
        </Link>
        <ul
          className={`dropdown-menu   newclass ${toggledSortByclass ? "show" : ""}`}
          aria-labelledby="dropdownMenuLink"
        >
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("id");
                setOrderDirection("ASC");
              }}
            >
              Name
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("roas");
                setOrderDirection("DESC");
              }}
            >
              Highest ROAS
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("roas");
                setOrderDirection("ASC");
              }}
            >
              Lowest ROAS
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("impressions");
                setOrderDirection("DESC");
              }}
            >
              Highest Impressions
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("impressions");
                setOrderDirection("ASC");
              }}
            >
              Lowest Impressions
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("reach");
                setOrderDirection("DESC");
              }}
            >
              Highest Reach
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("reach");
                setOrderDirection("ASC");
              }}
            >
              Lowest Reach
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("spend");
                setOrderDirection("DESC");
              }}
            >
              Highest Spend
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("spend");
                setOrderDirection("ASC");
              }}
            >
              Lowest Spend
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("budget");
                setOrderDirection("DESC");
              }}
            >
              Highest Budget
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("budget");
                setOrderDirection("ASC");
              }}
            >
              Lowest Budget
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("leads");
                setOrderDirection("DESC");
              }}
            >
              Highest Leads
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("leads");
                setOrderDirection("ASC");
              }}
            >
              Lowest Leads
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("conversions");
                setOrderDirection("DESC");
              }}
            >
              Highest Conversions
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              onClick={() => {
                setOrderBy("conversions");
                setOrderDirection("ASC");
              }}
            >
              Lowest Conversions
            </Link>
          </li>
          <li>
            <Link
                className="dropdown-item"
                onClick={() => {
                  setOrderBy("performance");
                  setOrderDirection("DESC");
                }}
            >
              Highest Performance
            </Link>
          </li>
          <li>
            <Link
                className="dropdown-item"
                onClick={() => {
                  setOrderBy("performance");
                  setOrderDirection("ASC");
                }}
            >
              Lowest Performance
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown ms-3">
        <Link
          className="btn custom-dropdown2 dropdown-toggle d-flex align-items-center"
          role="button"
          id="dropdownMenuLink"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
          onClick={addremoveFilterbyevent}
        >
          <span className="me-auto">Filter by</span>
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
          className={`dropdown-menu newclass ${toggledFilterByclass ? "show" : ""}`}
          aria-labelledby="dropdownMenuLink"
        >
          <li>
            <Link className="dropdown-item">Sort 1</Link>
          </li>
          <li>
            <Link className="dropdown-item">Sort 2</Link>
          </li>
          <li>
            <Link className="dropdown-item">Sort 3</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown stats-opts ms-3">
        <button
          className="dropdown-toggle d-flex p-0"
          type="button"
          id="dropdownMenuButton"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        ></button>
      </div>
    </div>
  );
};
export default Sorting;
