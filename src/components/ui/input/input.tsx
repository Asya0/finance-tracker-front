import type { ComponentProps } from 'react';
import './input.css';

type InputFieldProps = ComponentProps<'input'> & {
   label?: string;
};

export default function InputField({ label, ...inputProps }: InputFieldProps) {
   return (
      <div className="input-field-wrapper">
         {label && <label className="input-field-label">{label}</label>}
         <input className="input-field" {...inputProps} />
      </div>
   );
}
