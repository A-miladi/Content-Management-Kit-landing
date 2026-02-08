import { IconProps } from "@/types";

const Tablet: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_203_1614)">
        <path
          d="M20 1.06665H3C1.89543 1.06665 1 2.02178 1 3.19998V28.8C1 29.9782 1.89543 30.9333 3 30.9333H20C21.1046 30.9333 22 29.9782 22 28.8V3.19998C22 2.02178 21.1046 1.06665 20 1.06665Z"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M11.5 27.2C12.0523 27.2 12.5 26.7224 12.5 26.1333C12.5 25.5442 12.0523 25.0667 11.5 25.0667C10.9477 25.0667 10.5 25.5442 10.5 26.1333C10.5 26.7224 10.9477 27.2 11.5 27.2Z"
          fill={color}
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_203_1614">
          <rect width="23" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Tablet;
