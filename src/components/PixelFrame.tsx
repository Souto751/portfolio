import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type FrameColor = 'green' | 'blue' | 'red' | 'yellow' | 'neutral';

const frameColors: Record<FrameColor, string> = {
  green: 'bg-pixel-green',
  blue: 'bg-pixel-blue',
  red: 'bg-pixel-red',
  yellow: 'bg-pixel-yellow',
  neutral: 'bg-bg-border',
};

interface PixelFrameProps {
  children: ReactNode;
  color?: FrameColor;
  className?: string;
}

/**
 * Pixel-art picture frame for real screenshots: stepped corners, a colored outer rim,
 * a dark mat and bevel highlights, so photos sit naturally inside the retro UI.
 */
export function PixelFrame({ children, color = 'neutral', className }: PixelFrameProps) {
  return (
    <div className={cn('pixel-frame p-1', frameColors[color], className)}>
      <div className="pixel-frame bg-bg p-1.5 shadow-[inset_3px_3px_0_rgba(255,255,255,0.12),inset_-3px_-3px_0_rgba(0,0,0,0.5)]">
        <div className="pixel-frame-inner overflow-hidden border-2 border-black/60">{children}</div>
      </div>
    </div>
  );
}
