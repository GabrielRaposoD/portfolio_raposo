import { Footer } from 'components';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-white'>
      <Footer />
    </div>
  );
}