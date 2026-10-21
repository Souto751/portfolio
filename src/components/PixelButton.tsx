'use client';

import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type PixelButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type PixelButtonSize = 'sm' | 'md' | 'lg';

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PixelButtonVariant;
  size?: PixelButtonSize;
}

const variantClasses: Record<PixelButtonVariant, string> = {
  primary: 'bg-pixel-green text-bg border-pixel-green hover:brightness-110',
  secondary: 'bg-pixel-blue text-bg border-pixel-blue hover:brightness-110',
  ghost: 'bg-transparent text-ink border-bg-border hover:border-pixel-green hover:text-pixel-green',
  danger: 'bg-pixel-red text-ink border-pixel-red hover:brightness-110',
};

const sizeClasses: Record<PixelButtonSize, string> = {
  sm: 'px-3 py-2 text-[9px]',
  md: 'px-5 py-3 text-[11px]',
  lg: 'px-8 py-5 text-sm',
};

/**
 * A chunky, pixel-bordered CTA button used across the site.
 * Uses a hard drop-shadow that compresses on press for a tactile "game button" feel.
 */
export const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 border-2 font-pixel uppercase tracking-wide',
          'shadow-pixel transition-all duration-100 ease-out',
          'hover:-translate-y-0.5 hover:shadow-pixel active:translate-y-0.5 active:shadow-none',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pixel-yellow',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

PixelButton.displayName = 'PixelButton';
