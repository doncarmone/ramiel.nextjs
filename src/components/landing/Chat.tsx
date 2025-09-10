import Image from 'next/image';

export const Chat = () => {
  const cards = [1, 2, 3, 4];
  return (
    <div className='flex flex-col p-4 bg-gray-400 mt-10 justify-center rounded-md gap-2'>
      <div className='flex justify-center mb-6'>
        <h2 className='text-4xl'>Nuestras características</h2>
      </div>
      <div className='flex justify-center gap-2'>
        {cards.map((card, idx) => (
          <div key={idx} className='card bg-base-100 w-96 shadow-sm'>
            <figure>
              <img
                src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>Card Title {card}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
