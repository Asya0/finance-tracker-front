import type { ComponentProps } from 'react';
import './button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'close';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = ComponentProps<'button'> & {
   variant?: ButtonVariant;
   size?: ButtonSize;
};

export default function Button({
   children,
   className,
   type = 'button',
   variant = 'primary',
   size = 'medium',
   disabled = false,
   ...buttonProps
}: ButtonProps) {
   const isClose = variant === 'close';

   const buttonClasses = ['button', `button--${variant}`, `button--${size}`, className]
      .filter(Boolean)
      .join(' ');

   return (
      <button
         {...buttonProps}
         type={type}
         className={`${buttonClasses} cursor-pointer`}
         disabled={disabled}
         aria-label={isClose ? 'Закрыть' : undefined}
      >
         {isClose ? (
            <svg
               width="20"
               height="20"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               aria-hidden="true"
            >
               <path d="M18 6 6 18" />
               <path d="m6 6 12 12" />
            </svg>
         ) : (
            children
         )}
      </button>
   );
}
