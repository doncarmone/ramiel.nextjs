import React from 'react';

export const CharacterCard = () => {
  return (
    <div className='card bg-base-100 shadow-sm w-[48rem] mt-4 mb-4 min-h-72'>
      <div className='card-body'>
        <h2 className='card-title text-2xl'>
          Personaje Principal: Violeta Willmore
        </h2>
        <div className='flex'>
          <div className='flex-1'>
            <h2 className='card-title text-2xl'>Nombre: </h2>
            <h2 className='text-xl mt-2'>Violeta Willmore</h2>
          </div>
          <div className='flex-1'>
            <div className='flex'>
              <div className='flex-1'>
                <h2 className='card-title text-2xl mt-2'>Edad: </h2>
                <h2 className='text-xl'>26</h2>
              </div>
              <div className='flex-1'>
                <h2 className='card-title text-2xl mt-2'>Genero: </h2>
                <h2 className='text-xl'>Mujer</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mt-2'>
          <div className='flex-1'>
            <h2 className='card-title text-2xl'>Biografia: </h2>
            <p className='text-base text-justify mt-2'>
              Violeta nacio en XXXX de 1988, hija de William Willmore Jr. y de
              Margaret Willmore, sus genes fueron modificados para eliminar una
              enfermedad heredativa y fue alterada hasta hacerla casi una genio
            </p>
          </div>
          <div className='flex-1 ml-4'>
            <h2 className='card-title text-2xl'>Apariencia fisica: </h2>
            <p className='text-base text-justify mt-2'>
              Alta, delgada, cabello negro muy lacio nariz prominete y ojos
              ovalados? Desde El incidente en la antartida viste con ropa de
              combate y overoles de mecanico
            </p>
          </div>
        </div>
        <div className='flex'>
          <div className='flex-1'>
            <h2 className='card-title text-2xl'>Motivacion: </h2>
            <p className='text-base text-justify mt-2'>
              Violeta esta cansada del mundo en el que le toco vivir, al estar
              toda la vida acostumbrada a una vida de lujos y viajes por el
              mundo, el nuevo mundo, devastado le resulta agotador Siente una
              atraccion por Tony
            </p>
          </div>
          <div className='flex-1 ml-4'>
            <h2 className='card-title text-2xl'>Objetivos: </h2>
            <p className='text-base text-justify mt-2'>
              Al descubrir que Stuart le dijo que su padre la habia modifcado
              geneticamente decide buscar pistas sobre otros proyectos fallidos
              Los humanos restantes se reunen a discutir los planes a futuro por
              lo cual violeta es invitada despues de haber salvado el satelite
              espia.
            </p>
          </div>
        </div>

        <div className='card-actions justify-end'>
          <button className='btn btn-secondary text-white rounded'>
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};
