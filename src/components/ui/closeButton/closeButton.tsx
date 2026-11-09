import type { ComponentProps } from 'react';

type CloseButtonProps = ComponentProps<'button'>;

export default function CloseButton({ className, ...props }: CloseButtonProps) {
  return (
    <button
      type="button"
      aria-label="Закрыть"
      className={`absolute top-2 right-2 flex h-8 w-8 cursor-pointer items-center
        justify-center rounded-full text-gray-500 transition-colors
        hover:bg-gray-100 hover:text-gray-900
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400
        ${className ?? ''}`}
      {...props}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  );
}