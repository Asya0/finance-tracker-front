import React from 'react';
import './modal.css';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   title: string;
   children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
   if (!isOpen) return null;

   return (
      <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
         <div className="container">
            <h2 className="title">{title}</h2>
            <button onClick={onClose} className="button">
               ×
            </button>
            {children}
         </div>
      </div>
   );
}
