import { IconProps } from "@/types";

const Video: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" fill="white" />
      <path
        d="M24.0002 58.6663H40.0002C53.3335 58.6663 58.6668 53.333 58.6668 39.9997V23.9997C58.6668 10.6663 53.3335 5.33301 40.0002 5.33301H24.0002C10.6668 5.33301 5.3335 10.6663 5.3335 23.9997V39.9997C5.3335 53.333 10.6668 58.6663 24.0002 58.6663Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.2666 32V28.0533C24.2666 22.96 27.8666 20.9066 32.2666 23.44L35.6799 25.4133L39.0933 27.3866C43.4933 29.92 43.4933 34.08 39.0933 36.6133L35.6799 38.5866L32.2666 40.56C27.8666 43.0933 24.2666 41.0133 24.2666 35.9466V32Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Video;
