import React from 'react';

export const NovelCard = () => {
  return (
    <div className='card card-side bg-base-100 shadow-sm h-96 w-[72rem] mt-4 mb-4'>
      <figure>
        <img
          src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
          alt='Movie'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-3xl'>Titulo: </h2>
        <h2 className='text-xl'>New movie is released!</h2>
        <div className='flex'>
          <div className='flex-1'>
            <h2 className='card-title text-2xl'>Genero: </h2>
            <h2 className='text-xl'>Ciencia ficcion</h2>
          </div>
          <div className='flex-1'>
            <h2 className='card-title text-2xl'>Estatus: </h2>
            <h2 className='text-xl'>Sin terminar</h2>
          </div>
        </div>

        <h2 className='card-title text-2xl'>Resumen: </h2>
        <p className='text-xl'>Click the button to watch on Jetflix app.</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-secondary rounded'>Editar</button>
          <button className='btn btn-primary ml-4 rounded'>Diseñar</button>
        </div>
      </div>
    </div>
  );
};
