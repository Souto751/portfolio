'use client';

/**
 * An extremely subtle always-on CRT effect: faint scanlines + vignette.
 * Pointer-events disabled so it never blocks interaction. Kept low-opacity per design brief ("no abusar").
 */
export function CRTOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden print:hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 2px, #000 3px)',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.35)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 animate-scanline bg-gradient-to-b from-white/[0.03] to-transparent" />
    </div>
  );
}
