import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  title: string;
  body: string;
  className?: string;
  redirectTo?: string;
  showActions?: boolean;
}

export const GenericCard = ({
  title,
  body,
  className,
  redirectTo,
  showActions = true,
}: Props) => {
  return (
    <div
      className={clsx(
        'card bg-base-100 shadow-sm mt-4 mb-4 w-[32rem] min-h-72',
        className
      )}
    >
      <div className='card-body'>
        <h2 className='card-title text-2xl'>{title}</h2>
        <p className='text-base text-justify'>{body}</p>
        {showActions && (
          <div className='card-actions justify-end'>
            <button className='btn btn-secondary text-white rounded'>
              Editar
            </button>
            <Link
              href={redirectTo || '/novels'}
              className='btn btn-primary ml-4 text-white rounded'
            >
              Diseñar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
