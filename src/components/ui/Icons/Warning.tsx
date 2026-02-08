import { IconProps } from "@/types";

const Warning: React.FC<IconProps> = ({ size, className }) => {
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
        d="M28 18.0833V30.3333"
        stroke="#FFE500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.1868 20.0202V35.9801C49.1868 38.5934 47.7868 41.0202 45.5235 42.3502L31.6635 50.3535C29.4001 51.6602 26.6001 51.6602 24.3134 50.3535L10.4534 42.3502C8.19006 41.0435 6.79004 38.6167 6.79004 35.9801V20.0202C6.79004 17.4068 8.19006 14.9801 10.4534 13.6501L24.3134 5.64675C26.5767 4.34008 29.3768 4.34008 31.6635 5.64675L45.5235 13.6501C47.7868 14.9801 49.1868 17.3835 49.1868 20.0202Z"
        stroke="#FFE500"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 37.8V38.0334"
        stroke="#FFE500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Warning;
