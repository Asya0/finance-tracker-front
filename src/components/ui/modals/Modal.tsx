import React from 'react';
import './modal.css';
import CloseButton from '../closeButton/closeButton';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
   if (!isOpen) return null;

   return (
      <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
         <div className="container">
            <CloseButton onClick={onClose} />
            {children}
         </div>
      </div>
   );
}
