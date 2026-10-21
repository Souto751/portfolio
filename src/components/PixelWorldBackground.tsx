'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

function useStars(count: number): Star[] {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, id) => ({
        id,
        left: Math.round(((id * 37) % 100 + (id % 7)) % 100),
        top: Math.round(((id * 53) % 60)),
        size: (id % 3) + 1,
        delay: (id % 10) * 0.3,
      })),
    [count],
  );
}

const PARTICLE_COLORS = ['#22C55E', '#FACC15', '#3B82F6'];

function useParticles(count: number): Particle[] {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, id) => ({
        id,
        left: Math.round(((id * 41) % 100)),
        delay: (id % 8) * 0.6,
        duration: 6 + (id % 5),
        color: PARTICLE_COLORS[id % PARTICLE_COLORS.length] as string,
      })),
    [count],
  );
}

/**
 * Full-bleed animated pixel-art scenery: night sky, moon, twinkling stars, drifting clouds,
 * layered parallax mountains, a treeline, and ambient firefly particles.
 * Purely decorative (aria-hidden) — never carries content, per the "no distraer" brief.
 */
export function PixelWorldBackground({ variant = 'full' }: { variant?: 'full' | 'subtle' }) {
  const stars = useStars(variant === 'full' ? 60 : 30);
  const particles = useParticles(variant === 'full' ? 10 : 5);
  const prefersReducedMotion = usePrefersReducedMotion();
  const subtle = variant === 'subtle';

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] via-[#111827] to-[#111827]" />

      {/* Stars */}
      <div className={subtle ? 'opacity-40' : 'opacity-80'}>
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-ink animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div
        className="absolute right-[8%] top-[8%] h-16 w-16 rounded-full bg-[#F9FAFB] shadow-[0_0_40px_10px_rgba(249,250,251,0.25)] sm:h-24 sm:w-24"
        style={{
          backgroundImage:
            'radial-gradient(circle at 35% 35%, rgba(0,0,0,0.08) 0 8%, transparent 9%), radial-gradient(circle at 65% 55%, rgba(0,0,0,0.08) 0 6%, transparent 7%), radial-gradient(circle at 50% 70%, rgba(0,0,0,0.06) 0 10%, transparent 11%)',
        }}
      />

      {/* Clouds */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-[18%] h-6 w-24 bg-bg-panel/70 sm:h-8 sm:w-36"
            style={{ clipPath: 'polygon(10% 100%,10% 60%,25% 60%,25% 20%,60% 20%,60% 0,90% 0,90% 40%,100% 40%,100% 100%)' }}
            initial={{ left: '-20%' }}
            animate={{ left: '120%' }}
            transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-[30%] h-5 w-20 bg-bg-panel/50 sm:h-7 sm:w-28"
            style={{ clipPath: 'polygon(10% 100%,10% 60%,25% 60%,25% 20%,60% 20%,60% 0,90% 0,90% 40%,100% 40%,100% 100%)' }}
            initial={{ left: '120%' }}
            animate={{ left: '-20%' }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
        </>
      )}

      {/* Mountains — back layer */}
      <svg
        className="absolute bottom-[18%] left-0 w-full text-bg-border/80 sm:bottom-[20%]"
        viewBox="0 0 400 60"
        preserveAspectRatio="none"
        height="120"
        shapeRendering="crispEdges"
      >
        <polygon
          fill="currentColor"
          points="0,60 0,40 40,40 40,25 80,25 80,10 120,10 120,30 160,30 160,15 200,15 200,35 240,35 240,20 280,20 280,40 320,40 320,20 360,20 360,45 400,45 400,60"
        />
      </svg>

      {/* Mountains — front layer, darker */}
      <svg
        className="absolute bottom-[12%] left-0 w-full text-bg-panel sm:bottom-[14%]"
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        height="90"
        shapeRendering="crispEdges"
      >
        <polygon
          fill="currentColor"
          points="0,40 0,25 30,25 30,10 70,10 70,25 110,25 110,15 150,15 150,30 190,30 190,18 230,18 230,32 270,32 270,20 310,20 310,28 350,28 350,15 400,15 400,40"
        />
      </svg>

      {/* Treeline */}
      <svg
        className="absolute bottom-0 left-0 w-full text-bg-border"
        viewBox="0 0 400 30"
        preserveAspectRatio="none"
        height="60"
        shapeRendering="crispEdges"
      >
        {Array.from({ length: 20 }, (_, i) => (
          <rect key={i} x={i * 20} y={30 - ((i % 3) + 2) * 6} width="14" height={((i % 3) + 2) * 6 + 10} fill="currentColor" opacity={0.9} />
        ))}
      </svg>

      {/* Ground */}
      <div className="absolute inset-x-0 bottom-0 h-6 bg-bg" />

      {/* Fireflies / particles */}
      {!prefersReducedMotion &&
        particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute bottom-[20%] h-1 w-1 rounded-full"
            style={{ left: `${particle.left}%`, backgroundColor: particle.color, boxShadow: `0 0 6px ${particle.color}` }}
            animate={{ y: [0, -80, 0], opacity: [0, 1, 0] }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
          />
        ))}
    </div>
  );
}
