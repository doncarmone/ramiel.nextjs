import { GenericCard, PageCover } from '@/components';
import ramielNotes from '@/RamielData/ramiel_notes.json';

export default function PlaygroundPage() {
  return (
    <div>
      <PageCover title='Notas' addButtonText='Agregar Nota' />
      <div className='mt-1 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
          {ramielNotes.data.map((note) => (
            <GenericCard
              key={note.id}
              title={`Nota ${note.sort}:`}
              body={note.note}
              className='w-full max-w-lg'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
