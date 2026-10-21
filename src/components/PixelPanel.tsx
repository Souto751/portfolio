import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface PixelPanelProps extends HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article' | 'section';
  glow?: 'green' | 'blue' | 'red' | 'yellow' | 'none';
}

const glowClasses: Record<NonNullable<PixelPanelProps['glow']>, string> = {
  green: 'hover:shadow-[0_0_16px_2px_rgba(34,197,94,0.35)]',
  blue: 'hover:shadow-[0_0_16px_2px_rgba(59,130,246,0.35)]',
  red: 'hover:shadow-[0_0_16px_2px_rgba(239,68,68,0.35)]',
  yellow: 'hover:shadow-[0_0_16px_2px_rgba(250,204,21,0.35)]',
  none: '',
};

/** The base "panel" surface used for dialogue boxes, cards and the terminal — bordered, dark, pixel-cornered. */
export function PixelPanel({ as: Tag = 'div', className, glow = 'none', children, ...props }: PixelPanelProps) {
  return (
    <Tag
      className={cn(
        'relative border-2 border-bg-border bg-bg-panel shadow-pixel transition-shadow duration-200',
        glowClasses[glow],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
