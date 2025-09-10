import { Icon } from '@/components';
import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import { MdLogin } from 'react-icons/md';

export const TopMenu = () => {
  return (
    <nav className='navbar flex items-center px-4 py-2 bg-cyan-700 shadow-lg  mb-10'>
      {/* Elementos a la izquierda */}
      <div className='px-1 mx-1'>
        <Link href='/'>
          <Icon />
        </Link>
      </div>
      {/* Otros elementos */}
      <div className='ml-auto px-1 mx-1'>
        <button className='btn btn-neutral rounded-md'>
          <Link
            href='/auth/login'
            className='flex justify-between items-center'
          >
            <MdLogin size={20} className='inline mr-2' />
            <span className='text-lg'>Iniciar sesión</span>
          </Link>
        </button>
      </div>
    </nav>
  );
};
