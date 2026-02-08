import { IconProps } from '@/types';

const Tick: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6923 9.5C17.6923 13.5753 14.2475 17 9.84615 17C5.44477 17 2 13.5753 2 9.5C2 5.42473 5.44477 2 9.84615 2C11.1797 2 12.4255 2.31441 13.5142 2.86605C13.8636 2.26701 14.3525 1.75385 14.9384 1.36756C13.4526 0.499599 11.7099 0 9.84615 0C4.40827 0 0 4.25329 0 9.5C0 14.7467 4.40827 19 9.84615 19C15.284 19 19.6923 14.7467 19.6923 9.5C19.6923 9.33017 19.6877 9.16138 19.6786 8.99374C19.0815 9.29563 18.4075 9.4751 17.6923 9.49759C17.6923 9.49839 17.6923 9.4992 17.6923 9.5Z"
        fill="#00BE77"
      />
      <path
        d="M5.53906 8.05117L10.0226 12.4672L20.0006 2.84326"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Tick;
