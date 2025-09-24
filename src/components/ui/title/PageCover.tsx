import React from 'react';
import { Title } from './Title';

interface Props {
  title: string;
  className?: string;
  addButtonText?: string;
  // onAddButtonClick?: () => void;
}

export const PageCover = ({ title, className, addButtonText }: Props) => {
  return (
    <div className={`flex items-center`}>
      <div className='flex-1'>
        <Title title={title} className={className} />
      </div>
      <div className='flex-1 flex justify-end items-center'>
        <button className='btn btn-primary btn-lg rounded'>
          {addButtonText}
        </button>
      </div>
    </div>
  );
};
