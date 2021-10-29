import { Footer, Header, NavBar } from 'components';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen text-white'>
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}
