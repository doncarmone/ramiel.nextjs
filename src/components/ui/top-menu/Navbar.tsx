'use client';
import Link from 'next/link';
import { Icon, NotesDialog } from '@/components';
import { MdLogin } from 'react-icons/md';
import { useUIStore } from '@/store/ui/ui-store';

export const Navbar = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <nav
      className='navbar navbar-lg flex items-center px-4 py-4 bg-cyan-700 shadow-lg mb-10 top-0 left-0 z-30 h-12'
      style={{ position: 'fixed' }}
    >
      {/* <div className='flex-none lg:hidden'>
        <label
          htmlFor='my-drawer-3'
          aria-label='open sidebar'
          className='btn btn-square btn-ghost'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-6 w-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
      </div> */}
      {/* Elementos a la izquierda */}
      <div className='px-1 mx-1'>
        <Link href='/'>
          <Icon />
        </Link>
      </div>
      {/* Otros elementos */}
      <div className='ml-auto px-1 mx-1'>
        {/* <button className='btn btn-neutral rounded-md'>
      <Link
        href='/auth/login'
        className='flex justify-between items-center'
      >
        <MdLogin size={20} className='inline mr-2' />
        <span className='text-lg'>Iniciar sesión</span>
      </Link>
    </button> */}
        <NotesDialog />
        <button
          onClick={openMenu}
          //   className='m-2 p-2 rounded-md transition-all hover:bg-gray-100 lg:hidden'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
