import { GenericCard, PageCover } from '@/components';
import ramielTimelines from '@/RamielData/ramiel_timelines.json';

export default function PlaygroundPage() {
  return (
    <div>
      <PageCover title='Linea del tiempo' addButtonText='Agregar Evento' />
      <div className='mt-1 px-4'>
        <ul className='timeline timeline-vertical'>
          {ramielTimelines.data.map((timeline, index) => (
            <li key={timeline.id}>
              {index > 0 && <hr />}
              <div
                className={
                  timeline.sort % 2 === 0
                    ? 'timeline-end timeline-box'
                    : 'timeline-start timeline-box'
                }
              >
                <GenericCard
                  title={`Evento ${timeline.sort}`}
                  body={timeline.event}
                  className='w-fit max-w-sm min-h-fit'
                  showActions={false}
                />
              </div>
              <div className='timeline-middle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              {index < ramielTimelines.data.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
