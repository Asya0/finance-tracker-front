import React from 'react';
import './modal.css';
import Button from '../button/button';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   // title: string;
   children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
   if (!isOpen) return null;

   return (
      <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
         <div className="container">
            {/* <h2 className="title">{title}</h2> */}
            <Button onClick={onClose} className="button text-[1.2rem]">
               ×
            </Button>
            {children}
            нет аккаунта?
         </div>
      </div>
   );
}
