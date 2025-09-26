'use client';

import Link from 'next/link';
import clsx from 'clsx';

import { IoCloseOutline } from 'react-icons/io5';
import { useUIStore } from '@/store';
import { FaGear, FaPeopleGroup } from 'react-icons/fa6';
import { ImBooks } from 'react-icons/im';
import { PiNotepadFill } from 'react-icons/pi';
import { GiBookCover } from 'react-icons/gi';
import { MdOutlineTimeline } from 'react-icons/md';

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const onLogout = async () => {
    // await logout();
    window.location.reload();
    // window.location.replace('/');
    closeMenu();
  };

  const menuItems = [
    {
      href: '/design/chapters',
      label: 'Capitulos',
      icon: <GiBookCover size={20} />,
      // onClick: closeMenu,
    },
    {
      href: '/characters',
      label: 'Personajes',
      icon: <FaPeopleGroup size={20} />,
      // onClick: closeMenu,
    },
    {
      href: '/design/timelines',
      label: 'Linea del tiempo',
      icon: <MdOutlineTimeline size={20} />,
      onClick: onLogout,
      className: 'w-full',
    },
    {
      href: '/design/notes',
      label: 'Notas',
      icon: <PiNotepadFill size={20} />,
      // onClick: closeMenu,
    },
    {
      href: '/configuration',
      label: 'Configuración',
      icon: <FaGear size={20} />,
      // onClick: closeMenu,
    },
  ];

  const extraItems = [
    {
      href: '/novel',
      label: 'Tus proyectos',
      icon: <ImBooks size={20} />,
      // onClick: closeMenu,
    },
  ];

  return (
    <div>
      {/* Background black */}
      {/* {isSideMenuOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
      )} */}

      {/* Blur */}
      {/* {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
        />
      )} */}

      {/* Sidemenu */}
      <nav
        className={clsx(
          'fixed p-5 top-0 w-[16rem] h-screen  bg-base-100  z-20 shadow-2xl transform transition-all duration-300 mt-14',
          {
            'translate-y-full': !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className='absolute top-5 right-5 cursor-pointer lg:hidden'
          onClick={() => closeMenu()}
        />
        {/* Menú iterado */}
        {menuItems.map((item, idx) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={item.onClick}
            className={clsx(
              'flex items-center mt-8 p-2 hover:bg-gray-600 rounded transition-all',
              item.className
            )}
          >
            {item.icon}
            <span className='ml-3 text-lg'>{item.label}</span>
          </Link>
        ))}
        {/* Line Separator */}
        <div className='w-full h-px bg-gray-200 my-10' />
        {extraItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            // onClick={item.onClick}
            className='flex items-center mt-10 p-2 hover:bg-gray-600 rounded-lg transition-all'
          >
            {item.icon}
            <span className='ml-3 text-xl'>{item.label}</span>
          </Link>
        ))}
        {/* <div className='w-full h-px bg-gray-200 my-10' /> */}
        <Link
          href={'/'}
          // onClick={item.onClick}
          className='flex items-center mt-70 p-2 hover:bg-gray-600 rounded-lg transition-all'
        >
          <FaGear size={20} />
          <span className='ml-3 text-xl'>Cerrar sesión</span>
        </Link>
      </nav>
    </div>
  );
};
