import {
  AboutMe,
  Contact,
  Footer,
  Header,
  MyService,
  NavBar,
  Portfolio,
  Resume,
} from 'components';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen text-white'>
      <NavBar />
      <Header />
      <AboutMe />
      <MyService />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
