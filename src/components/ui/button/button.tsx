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

   const buttonClasses = [
      'btn',
      `btn--${variant}`,
      `btn--${size}`,
      className
   ]
   .filter(Boolean)
   .join(' ')

   return (
      <div className="input-field-wrapper">
         <button 
         {...buttonProps}
         type={type} 
         className={buttonClasses}
         aria-label={isClose ? 'Закрыть' : undefined} 
         >
            {isClose ? (children || 'x') : children}
         </button>
      </div>
   );
}
