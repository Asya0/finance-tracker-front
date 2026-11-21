import React from 'react';
import Button from '../button/button';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
   if (!isOpen) return null;

   return (
      <div
         className="fixed flex items-center justify-center inset-0 z-[1000] bg-black/50"
         onClick={(e) => e.target === e.currentTarget && onClose()}
      >
         <div className="bg-white relative w-[400px] rounded-[8px] p-8">
            <Button variant="close" className="absolute top-2 right-2" onClick={onClose} />
            {children}
         </div>
      </div>
   );
};
