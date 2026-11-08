// import React from 'react';
// import './modal.css';

// interface ModalProps {
//    isOpen: boolean;
//    onClose: () => void;
//    title: string;
//    children: React.ReactNode;
// }

// export function Modal({ isOpen, onClose, title, children }: ModalProps) {
//    if (!isOpen) return null;

//    return (
//       <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
//          <div className="container">
//             <h2 className="title">{title}</h2>
//             <button onClick={onClose} className="button">
//                ×
//             </button>
//             {children}
//          </div>
//       </div>
//    );
// }

import React from 'react';
import './modal.css';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   // title: string;
   children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
   if (!isOpen) return null;

   return (
      <div
         className={`modal ${isOpen ? 'is-open' : ''}`}
         onClick={(e) => {
            // Закрываем только если клик был прямо по фону, а не по контейнеру
            if (e.target === e.currentTarget) {
               onClose();
            }
         }}
         aria-hidden={!isOpen}
      >
         <div className="container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            {/* <h2 id="modal-title" className="title">
               {title}
            </h2> */}
            <button
               onClick={onClose}
               className="close-btn"
               type="button"
               aria-label="Закрыть модальное окно"
            >
               ×
            </button>
            {children}
            нет аккаунта?
         </div>
      </div>
   );
}
