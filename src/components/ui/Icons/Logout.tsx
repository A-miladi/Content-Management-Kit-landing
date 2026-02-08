import { IconProps } from '@/types';

const LogOut: React.FC<IconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.41669 6.29995C7.67502 3.29995 9.21669 2.07495 12.5917 2.07495H12.7C16.425 2.07495 17.9167 3.56662 17.9167 7.29162V12.725C17.9167 16.45 16.425 17.9416 12.7 17.9416H12.5917C9.24169 17.9416 7.70002 16.7333 7.42502 13.7833"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 10H3.01666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.87498 7.20837L2.08331 10L4.87498 12.7917"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogOut;
