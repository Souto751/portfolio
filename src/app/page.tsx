import type { Metadata } from 'next';
import { GameExperience } from '@/components/GameExperience';

export const metadata: Metadata = {
  title: 'Agustin Souto — Full Stack Developer',
};

export default function HomePage() {
  return <GameExperience />;
}
