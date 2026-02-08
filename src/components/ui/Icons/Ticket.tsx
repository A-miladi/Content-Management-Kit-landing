import { IconProps } from '@/types';

const Ticket: React.FC<IconProps> = ({ size , className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.759 12.2437C15.759 13.3187 16.6423 14.1937 17.7173 14.1937C17.7173 17.3187 16.934 18.1021 13.809 18.1021H5.99232C2.86732 18.1021 2.08398 17.3187 2.08398 14.1937V13.8104C3.15898 13.8104 4.04232 12.9271 4.04232 11.8521C4.04232 10.7771 3.15898 9.89372 2.08398 9.89372V9.51038C2.09232 6.38538 2.86732 5.60205 5.99232 5.60205H13.8007C16.9257 5.60205 17.709 6.38538 17.709 9.51038V10.2937C16.634 10.2937 15.759 11.1604 15.759 12.2437Z"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5086 5.60204H5.93359L8.37526 3.16038C10.3669 1.16871 11.3669 1.16871 13.3586 3.16038L13.8586 3.66038C13.3336 4.18538 13.2086 4.96038 13.5086 5.60204Z"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.23242 5.60217L8.23242 18.1022"
        stroke="#E7E7E7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-dasharray="5 5"
      />
    </svg>
  );
};

export default Ticket;
