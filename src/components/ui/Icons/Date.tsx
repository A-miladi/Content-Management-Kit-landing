import React from "react";

import { IconProps } from "@/types";

const Date: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.28955 3.92285H8.7162"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.84937 5.55078H6.85323"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00049 5.55078H5.00435"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.15161 5.55078H3.15547"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.84937 7.16797H6.85323"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00049 7.16797H5.00435"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.15161 7.16797H3.15547"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.68677 0.836914V2.20807"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.3208 0.836914V2.20807"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.76643 1.49414H3.23839C2.01477 1.49414 1.25049 2.17578 1.25049 3.42874V7.19942C1.25049 8.47208 2.01477 9.16948 3.23839 9.16948H6.76257C7.99005 9.16948 8.75049 8.4839 8.75049 7.23094V3.42874C8.75433 2.17578 7.99391 1.49414 6.76643 1.49414Z"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Date;
