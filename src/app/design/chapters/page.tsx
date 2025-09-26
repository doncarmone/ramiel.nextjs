import { GenericCard, PageCover } from '@/components';
import ramielChapters from '@/RamielData/ramiel_chapters.json';

export default function PlaygroundPage() {
  return (
    <div>
      <PageCover title='Cápitulos' addButtonText='Agregar Capitulo' />
      <div className='flex justify-center mt-8'>
        <div className='grid grid-cols-1 gap-4'>
          {ramielChapters.data.map((chapter) => (
            <GenericCard
              key={chapter.id}
              title={`Cápitulo ${chapter.sort}: ${chapter.title}`}
              body={chapter.description}
              className='card bg-base-100 shadow-sm mt-2 mb-2 sm:w-[48rem] lg:w-[92rem] min-h-72'
              redirectTo='/design/scenes'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
