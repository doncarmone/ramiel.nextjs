import { titleFont } from '@/config/fonts';
import React from 'react';

interface Props {
  title: string;
  className?: string;
}

export const Title = ({ title, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`text-4xl text-gray-900 font-semibold my-10 ${titleFont.className} antialiased`}
      >
        {title}
      </h1>
    </div>
  );
};
