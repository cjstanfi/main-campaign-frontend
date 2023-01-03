import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./analytics.css";

export default function MarketingDropdown() {
    const [toggledclass, settoggledclass] = useState(false);

    function addremoveclass() {
        settoggledclass(!toggledclass);
    }
    function addremoveclassmouseleave() {
        settoggledclass(false);
    }


    return (
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
                <li>
                    <Link className="dropdown-item">Campaign</Link>
                </li>
                <li>
                    <Link className="dropdown-item">Ad Set</Link>
                </li>
                <li>
                    <Link className="dropdown-item">Ad</Link>
                </li>
            </ul>
        </div>
    );
}
