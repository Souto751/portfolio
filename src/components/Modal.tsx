'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { PixelPanel } from './PixelPanel';
import { cn } from '@/utils/cn';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: React.ReactNode;
  closeLabel: string;
}

const TRANSITION_MS = 200;

/**
 * Generic accessible modal shell (Escape to close, overlay click to close) reused by Skills and Projects.
 * Uses plain CSS transitions rather than an animation library: kept intentionally dependency-free here
 * for reliability across environments.
 */
export function Modal({ open, onClose, labelledBy, children, closeLabel }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Mount immediately when opening; unmount only after the exit transition finishes.
  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    setVisible(false);
    const timeout = setTimeout(() => setMounted(false), TRANSITION_MS);
    return () => clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 transition-opacity duration-200 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          'max-h-[85vh] w-full max-w-2xl overflow-y-auto transition-all duration-200 ease-out',
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-95 opacity-0',
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <PixelPanel role="dialog" aria-modal="true" aria-labelledby={labelledBy} className="relative p-6 sm:p-8">
          <button
            onClick={onClose}
            aria-label={closeLabel}
            className="absolute right-3 top-3 text-ink/60 hover:text-pixel-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-pixel-yellow"
          >
            <X size={20} />
          </button>
          {children}
        </PixelPanel>
      </div>
    </div>
  );
}
