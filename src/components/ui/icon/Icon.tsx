import Image from 'next/image';

export const Icon = () => {
  return (
    <Image
      src={`/imgs/icon.png`}
      height={80}
      width={130}
      alt='Before Writing Icon'
      unoptimized
    />
  );
};
