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
   const variantClass = `button--${variant}`;

   return (
      <button type={type} className={`button ${variantClass} ${className ?? ''}`} {...buttonProps}>
         {children}
      </button>
   );
}
