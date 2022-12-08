import React from "react";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";
export default function ArrowsPrev(props) {
  const { onClick } = props;
  return (
    <button className="slick-next slick-arrow" onClick={onClick}>
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
        ></circle>
        <g clipPath="url(#clip0_33_1483)">
          <path
            d="M17.59 25.6173L22.17 21.0273L17.59 16.4373L19 15.0273L25 21.0273L19 27.0273L17.59 25.6173Z"
            fill="#3B5998"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_33_1483">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="matrix(-1 0 0 1 33 9.02734)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
