'use client';

import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * Custom pixel-crosshair cursor for pointer devices.
 * Disabled on touch devices and when reduced motion is preferred, since it's a decorative flourish only.
 */
export function PixelCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    setIsPointerDevice(!coarse);
  }, []);

  useEffect(() => {
    if (!isPointerDevice) return;
    function handleMove(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isPointerDevice]);

  if (!isPointerDevice || prefersReducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed z-[80] h-4 w-4 print:hidden -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" width="16" height="16" shapeRendering="crispEdges">
        <rect x="7" y="0" width="2" height="4" fill="#F9FAFB" />
        <rect x="7" y="12" width="2" height="4" fill="#F9FAFB" />
        <rect x="0" y="7" width="4" height="2" fill="#F9FAFB" />
        <rect x="12" y="7" width="4" height="2" fill="#F9FAFB" />
        <rect x="7" y="7" width="2" height="2" fill="#F9FAFB" />
      </svg>
    </div>
  );
}
