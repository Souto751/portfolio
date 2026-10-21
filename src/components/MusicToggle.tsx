'use client';

import { Volume1, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/utils/cn';

interface MusicToggleProps {
  enabled: boolean;
  onToggle: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  className?: string;
  /** Icon-only on/off button (no slider), for the sticky nav. */
  compact?: boolean;
}

/**
 * Background chiptune music control: on/off plus a volume slider.
 * Receives its state as props rather than calling useMusicPreference itself, so the
 * underlying <audio> element (owned by whichever persistent component calls the hook)
 * keeps playing across the whole session, not just while this control is mounted.
 */
export function MusicToggle({ enabled, onToggle, volume, onVolumeChange, className, compact = false }: MusicToggleProps) {
  const { t } = useLanguage();
  const Icon = !enabled ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  if (compact) {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-label={t('music.toggle')}
        aria-pressed={enabled}
        title={enabled ? t('music.on') : t('music.off')}
        className={cn(
          'flex items-center justify-center gap-2 border-2 border-bg-border bg-bg-panel px-3 py-2 font-pixel text-[9px] uppercase transition-colors hover:border-pixel-green hover:text-pixel-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-pixel-yellow',
          enabled ? 'text-ink' : 'text-ink/50',
          className,
        )}
      >
        <Icon size={14} aria-hidden="true" />
        <span className="sr-only">{enabled ? t('music.on') : t('music.off')}</span>
      </button>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center gap-3 border-2 border-bg-border bg-bg-panel px-4 py-3',
        className,
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-label={t('music.toggle')}
        aria-pressed={enabled}
        className="flex items-center gap-2 font-pixel text-[9px] uppercase text-ink transition-colors hover:text-pixel-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-pixel-yellow"
      >
        <Icon size={16} aria-hidden="true" />
        <span>{enabled ? t('music.on') : t('music.off')}</span>
      </button>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(volume * 100)}
        onChange={(event) => onVolumeChange(Number(event.target.value) / 100)}
        disabled={!enabled}
        aria-label={t('music.volume')}
        className="h-1.5 w-24 cursor-pointer accent-pixel-green disabled:cursor-not-allowed disabled:opacity-40 sm:w-32"
      />
    </div>
  );
}
