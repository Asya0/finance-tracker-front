import type { ComponentProps } from 'react';
import './button.css';

type ButtonProps = ComponentProps<'button'>;

export default function Button({ children, className='', type='button', ...buttonProps }: ButtonProps) {
   return (
      <div className="input-field-wrapper">
         <button type={type} className={`button ${className}`} {...buttonProps}>{children}</button>
      </div>
   );
}
