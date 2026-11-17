import React from 'react';
import CloseButton from '../closeButton/closeButton';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
   if (!isOpen) return null;

   return (
      <div className="fixed flex items-center justify-center inset-0 z-[1000] bg-black/50" onClick={(e) => e.target === e.currentTarget && onClose()}>
         <div className="bg-white relative w-[400px] rounded-[8px] p-8">
            <CloseButton onClick={onClose} />
            {children}
         </div>
      </div>
   );
}
