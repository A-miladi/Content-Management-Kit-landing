import { IconProps } from "@/types";

const Line: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="288"
      height="1"
      className={className}
      viewBox="0 0 288 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.5L287 0.499975"
        stroke="url(#paint0_linear_427_1003)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_427_1003"
          x1="1"
          y1="1"
          x2="287"
          y2="0.999975"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#03DC8E" stop-opacity="0" />
          <stop offset="0.5" stopColor="#03DC8E" />
          <stop offset="1" stopColor="#03DC8E" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Line;
