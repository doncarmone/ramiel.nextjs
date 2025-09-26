import React from 'react';
import ramielNotes from '@/RamielData/ramiel_notes.json';
import { GenericCard } from '../card/GenericCard';

export const NotesDialog = () => {
  return (
    <>
      <button
        className='btn'
        onClick={() => {
          const dialog = document.getElementById(
            'notesDialog'
          ) as HTMLDialogElement | null;
          if (dialog) dialog.showModal();
        }}
      >
        Notas
      </button>
      <dialog id='notesDialog' className='modal'>
        <div className='modal-box w-11/12 max-w-6xl max-h-[80vh] overflow-y-auto '>
          <h3 className='font-bold text-2xl'>Notas</h3>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button, it will close the modal */}
              <button className='btn'>Close</button>
            </form>
          </div>
          <div className='mt-1 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
              {ramielNotes.data.map((note) => (
                <GenericCard
                  key={note.id}
                  title={`Nota ${note.sort}:`}
                  body={note.note}
                  className='w-full max-w-lg bg-gray-600'
                  showActions={false}
                />
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
