import Image from 'next/image';

export const Icon = () => {
  return (
    <Image
      src={`/imgs/icon.png`}
      height={60}
      width={120}
      alt='Before Writing Icon'
      unoptimized
    />
  );
};
