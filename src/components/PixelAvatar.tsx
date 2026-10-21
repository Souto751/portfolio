import { cn } from '@/utils/cn';

interface PixelAvatarProps {
  size?: number;
  className?: string;
}

/**
 * A small hand-built pixel-art sprite (no external image asset required).
 * Stands in for a character portrait across the Landing and About sections.
 */
export function PixelAvatar({ size = 96, className }: PixelAvatarProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel art avatar of Agustin Souto"
      className={cn('drop-shadow-[4px_4px_0_rgba(0,0,0,0.45)]', className)}
    >
      {/* hair */}
      <rect x="4" y="1" width="8" height="2" fill="#111827" />
      <rect x="3" y="2" width="10" height="2" fill="#1F2937" />
      {/* face */}
      <rect x="4" y="4" width="8" height="4" fill="#F2C29B" />
      {/* eyes */}
      <rect x="5" y="5" width="1" height="1" fill="#111827" />
      <rect x="10" y="5" width="1" height="1" fill="#111827" />
      {/* body / hoodie */}
      <rect x="3" y="8" width="10" height="5" fill="#22C55E" />
      <rect x="3" y="8" width="10" height="1" fill="#16a34a" />
      {/* arms */}
      <rect x="2" y="9" width="1" height="4" fill="#22C55E" />
      <rect x="13" y="9" width="1" height="4" fill="#22C55E" />
      {/* legs */}
      <rect x="4" y="13" width="3" height="2" fill="#3B82F6" />
      <rect x="9" y="13" width="3" height="2" fill="#3B82F6" />
      {/* shoes */}
      <rect x="4" y="15" width="3" height="1" fill="#111827" />
      <rect x="9" y="15" width="3" height="1" fill="#111827" />
    </svg>
  );
}
