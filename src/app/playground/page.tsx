import { CharacterCard, GenericCard, NovelCard } from '@/components';
import { Hero } from '../../components/landing/Hero';

export default function PlaygroundPage() {
  return (
    <div>
      {/* <Hero /> */}
      <CharacterCard />
      <GenericCard />
      <NovelCard />
    </div>
  );
}
