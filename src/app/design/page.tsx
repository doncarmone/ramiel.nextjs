import { NovelCard, PageCover } from '@/components';
import ramielNovels from '@/RamielData/ramiel_novels.json';

export default function PlaygroundPage() {
  return (
    <div>
      <PageCover title='Capitulos' addButtonText='Agregar Capitulo' />
      <div className='flex justify-center mt-8'>
        <div className='grid grid-cols-1 gap-4'>
          {ramielNovels.data.map((novel) => (
            // <NovelCard
            //   key={novel.id}
            //   title={novel.title}
            //   genre={novel.genre}
            //   status={
            //     typeof novel.status === 'string' ? novel.status : 'En progreso'
            //   }
            //   resume={novel.resume}
            //   imageUrl={novel.image}
            // />
            <h1>Hola</h1>
          ))}
        </div>
      </div>
    </div>
  );
}
