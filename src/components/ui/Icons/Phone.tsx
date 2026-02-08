import { IconProps } from "@/types";

const Phone: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_203_1613)">
        <path
          d="M16 1.06665H3C1.89543 1.06665 1 2.02178 1 3.19998V28.8C1 29.9782 1.89543 30.9333 3 30.9333H16C17.1046 30.9333 18 29.9782 18 28.8V3.19998C18 2.02178 17.1046 1.06665 16 1.06665Z"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M6 1.06665H13V1.49332C13 2.0907 13 2.3894 12.891 2.61757C12.7951 2.81828 12.6422 2.98146 12.454 3.08373C12.2401 3.19998 11.9601 3.19998 11.4 3.19998H7.6C7.03995 3.19998 6.75992 3.19998 6.54601 3.08373C6.35785 2.98146 6.20487 2.81828 6.10899 2.61757C6 2.3894 6 2.0907 6 1.49332V1.06665Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_203_1613">
          <rect width="19" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Phone;
