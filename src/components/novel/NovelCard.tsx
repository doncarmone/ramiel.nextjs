import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  genre: string;
  status: string;
  resume: string;
  imageUrl: string;
}

export const NovelCard = ({
  title,
  genre,
  status,
  resume,
  imageUrl,
}: Props) => {
  return (
    <div className='card card-side bg-base-100 shadow-sm min-h-96 w-full max-w-6xl mt-4 mb-4 rounded-sm flex p-4'>
      <div className='w-64 h-96 flex-shrink-0 rounded-lg p-2 hidden md:block'>
        <Image
          src={imageUrl}
          alt={title}
          width={528}
          height={825}
          className='w-full h-full object-cover rounded-md'
        />
      </div>

      <div className='card-body flex-1 p-6 pl-4'>
        <h2 className='card-title text-3xl mb-2'>Titulo: </h2>
        <h2 className='text-xl mb-4'>{title}</h2>

        <div className='flex gap-8 mb-4'>
          <div className='flex-1'>
            <h2 className='card-title text-2xl mb-2'>Genero: </h2>
            <h2 className='text-xl'>{genre}</h2>
          </div>
          <div className='flex-1'>
            <h2 className='card-title text-2xl mb-2'>Estatus: </h2>
            <h2 className='text-xl'>{status}</h2>
          </div>
        </div>

        <h2 className='card-title text-2xl mb-2'>Resumen: </h2>
        <div className='flex-1 overflow-y-auto'>
          <p className='text-xl leading-relaxed text-justify'>{resume}</p>
        </div>

        <div className='card-actions justify-end mt-4'>
          <button className='btn btn-secondary rounded'>Editar</button>
          <button className='btn btn-primary ml-4 rounded'>Diseñar</button>
        </div>
      </div>
    </div>
  );
};
