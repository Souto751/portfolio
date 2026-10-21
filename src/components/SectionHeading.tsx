import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  color?: 'green' | 'blue' | 'red' | 'yellow';
}

const colorClasses = {
  green: 'text-pixel-green',
  blue: 'text-pixel-blue',
  red: 'text-pixel-red',
  yellow: 'text-pixel-yellow',
};

/** Consistent section header: small eyebrow label, pixel-font title, optional subtitle. */
export function SectionHeading({ eyebrow, title, subtitle, align = 'left', color = 'green' }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className={cn('font-pixel text-[10px] tracking-[0.2em]', colorClasses[color])}>{eyebrow}</p>
      <h2 className="mt-3 font-pixel text-xl leading-relaxed text-ink sm:text-2xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm text-ink/70 sm:text-base">{subtitle}</p> : null}
    </div>
  );
}
