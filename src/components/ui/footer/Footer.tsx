import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-base-100 text-primary-content footer-center'>
      <div className='flex flex-col justify-between'>
        <p className='text-white'>
          Before Writing, {footerYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
