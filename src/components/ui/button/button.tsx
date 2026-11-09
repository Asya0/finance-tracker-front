import type { ComponentProps } from 'react';
import './button.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface VariantProps {
   variant?: ButtonVariant;
}

type ButtonProps = ComponentProps<'button'> & VariantProps;

export default function Button({
   children,
   className,
   type = 'button',
   variant = 'primary',
   ...buttonProps
}: ButtonProps) {

   return (
      <div className="input-field-wrapper">
         <button type={type} className={`button cursor-pointer text-sm font-medium leading-[20px] ${className}`} {...buttonProps}>
            {children}
         </button>
      </div>
   );
}
