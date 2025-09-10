export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex justify-center bg-base-300'>
      <div className='w-full sm:w-[350px]'>{children}</div>
    </main>
  );
}
