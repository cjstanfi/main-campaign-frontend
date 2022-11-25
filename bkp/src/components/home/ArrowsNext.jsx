import React from "react";

import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";

export default function Arrows(props) {
  const { onClick } = props;
  return (
    <>
      <button className="slick-prev slick-arrow" onClick={onClick}>
        <svg
          width="42"
          height="43"
          viewBox="0 0 42 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21.0273" r="21" fill="#F5F5FF"></circle>
          <g clipPath="url(#clip0_33_1480)">
            <path
              d="M24.41 25.6173L19.83 21.0273L24.41 16.4373L23 15.0273L17 21.0273L23 27.0273L24.41 25.6173Z"
              fill="#3B5998"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_33_1480">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(9 9.02734)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </button>
    </>
  );
}
