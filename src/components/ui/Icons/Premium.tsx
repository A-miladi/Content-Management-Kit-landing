import { IconProps } from "@/types";

const Premium: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 14"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_405_2012)">
        <path
          d="M17 10.5H1L0 2.5L5 5.5L9 0L13 5.5L18.5 2.5L17 10.5Z"
          fill="#FFB743"
        />
        <path
          d="M1 12H17V13C17 13.5523 16.5523 14 16 14H2C1.44772 14 1 13.5523 1 13V12Z"
          fill="#FFB743"
        />
      </g>
      <defs>
        <clipPath id="clip0_405_2012">
          <rect width="19" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Premium;
