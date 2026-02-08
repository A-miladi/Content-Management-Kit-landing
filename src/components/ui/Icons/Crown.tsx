import React from "react";

import { IconProps } from "@/types";

const Crown: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 22"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2016_5397)">
        <path
          d="M19.9572 10.1595L5.94871 17.8901L1.2079 11.369L7.03504 11.5798L7.87979 4.83173L14.0393 7.71452L17.4052 2.43054L19.9572 10.1595Z"
          fill="#FFB743"
        />
        <path
          d="M6.67383 19.2034L20.6823 11.4728L21.1655 12.3483C21.4323 12.8319 21.2567 13.4402 20.7731 13.707L8.51568 20.4713C8.03214 20.7381 7.42384 20.5625 7.15699 20.0789L6.67383 19.2034Z"
          fill="#FFB743"
        />
      </g>
      <defs>
        <clipPath id="clip0_2016_5397">
          <rect
            width="19"
            height="14"
            fill="white"
            transform="translate(0 9.18018) rotate(-28.892)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Crown;
