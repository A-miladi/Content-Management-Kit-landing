import { IconProps } from "@/types";

const BorderCover: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="262"
      height="43"
      className={className}
      viewBox="0 0 262 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 16C2 8.26801 8.26801 2 16 2H246C253.732 2 260 8.26801 260 16V41H2V16Z"
        stroke="url(#paint0_linear_427_1013)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_427_1013"
          x1="-32"
          y1="22"
          x2="296"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07744E" />
          <stop offset="0.481" stopColor="#03DC8E" />
          <stop offset="1" stopColor="#07744E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BorderCover;
