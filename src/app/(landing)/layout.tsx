import { Navbar } from '@/components/ui/top-menu/Navbar';
import { Sidebar } from '@/components/ui/top-menu/Sidebar';
import { Footer } from '../../components/ui/footer/Footer';

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <div className='px-0 sm:px-10'>{children}</div>
      </main>
      <Footer />
    </>
  );
}
