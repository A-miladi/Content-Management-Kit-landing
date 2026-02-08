import useOutsideClick from '@/hooks/useOutsideClick';
import React, { useRef } from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Modal({ children, isOpen, onClose }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  useOutsideClick(ref, onClose);

  return (
    <>
      {isOpen && (
        <div className="w-full h-full backdrop-blur-sm flex items-center justify-center absolute z-50 bottom-0 right-0">
          <div className=" w-3/4 h-[460px]  md:w-2/4 md:h-3/5 flex items-center justify-center" ref={ref}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
