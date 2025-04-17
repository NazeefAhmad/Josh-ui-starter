
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'font-medium rounded-full transition-colors',
        {
          'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary',
          'bg-gray-200 hover:bg-gray-300 text-gray-800': variant === 'secondary',
          'bg-white hover:bg-gray-100 text-blue-500 border border-gray-200': variant === 'white',
          'px-10 py-3': size === 'default',
          'px-6 py-2 text-sm': size === 'sm',
          'px-12 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
