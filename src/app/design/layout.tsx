import { Navbar } from '@/components/ui/top-menu/Navbar';
import { Sidebar } from '@/components/ui/top-menu/Sidebar';

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className='min-h-screen pt-16 lg:pl-[18rem]'>
        <div className='px-0 sm:px-10'>{children}</div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
