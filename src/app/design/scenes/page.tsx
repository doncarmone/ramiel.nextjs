import { GenericCard, PageCover } from '@/components';
import ramielScenes from '@/RamielData/ramiel_scenes.json';

export default function PlaygroundPage() {
  return (
    <div>
      <PageCover title='Capítulo' addButtonText='Agregar Escena' />
      <div className='mt-1 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
          {ramielScenes.data.map((scene) => (
            <GenericCard
              key={scene.id}
              title={`Escena ${scene.sort}: ${scene.title}`}
              body={scene.description}
              className='w-full max-w-lg'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
