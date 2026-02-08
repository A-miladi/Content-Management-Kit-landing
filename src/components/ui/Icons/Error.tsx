import { IconProps } from "@/types";

const Error: React.FC<IconProps> = ({ size, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 21V32.6667"
        stroke="#EA2425"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 49.9566H13.86C5.76334 49.9566 2.38001 44.1699 6.30001 37.0999L13.58 23.9866L20.44 11.6666C24.5933 4.17657 31.4067 4.17657 35.56 11.6666L42.42 24.0099L49.7 37.1232C53.62 44.1932 50.2133 49.9799 42.14 49.9799H28V49.9566Z"
        stroke="#EA2425"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.9873 39.6667H28.0083"
        stroke="#EA2425"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Error;
