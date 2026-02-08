import { IconProps } from "@/types";

const WalletTopBar: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.834 7.5H5.83398"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3329 9.14147V10.8582C18.3329 11.3165 17.9662 11.6915 17.4995 11.7082H15.8662C14.9662 11.7082 14.1412 11.0498 14.0662 10.1498C14.0162 9.62482 14.2162 9.13315 14.5662 8.79148C14.8745 8.47482 15.2995 8.2915 15.7662 8.2915H17.4995C17.9662 8.30817 18.3329 8.68314 18.3329 9.14147Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.566 8.79149C14.216 9.13316 14.016 9.62483 14.066 10.1498C14.141 11.0498 14.966 11.7082 15.866 11.7082H17.4993V12.9165C17.4993 15.4165 15.8327 17.0832 13.3327 17.0832H5.83268C3.33268 17.0832 1.66602 15.4165 1.66602 12.9165V7.08317C1.66602 4.8165 3.03268 3.23317 5.15768 2.9665C5.37435 2.93317 5.59935 2.9165 5.83268 2.9165H13.3327C13.5493 2.9165 13.7577 2.92483 13.9577 2.95816C16.1077 3.20816 17.4993 4.79984 17.4993 7.08317V8.29151H15.766C15.2993 8.29151 14.8743 8.47483 14.566 8.79149Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WalletTopBar;
