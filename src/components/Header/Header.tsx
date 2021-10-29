import Typewriter from 'typewriter-effect';
import { FOOTER_LINKS } from 'utils/constants';
import Link from 'next/link';
import { OutlinedAnchorButton } from 'components';

const Header: React.FC = () => {
  return (
    <header
      className='bg-black w-full pt-[100px] items-center justify-center flex flex-col text-lg bg-header-bg bg-no-repeat min-h-[660px] bg-cover bg-fixed bg-center'
      id='home'
    >
      <h3 className='uppercase font-medium tracking-[3px] mb-[25px]'>
        Welcome To My Website
      </h3>
      <h3 className='flex flex-row mb-5 text-6xl font-bold whitespace-pre leading-[1.3]'>
        <span>I'm</span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(' Gabriel Raposo')
              .pauseFor(1000)
              .deleteAll()
              .typeString(' Web Developer')
              .pauseFor(1000)
              .deleteAll()
              .typeString(' Software Engineer')
              .pauseFor(1000)
              .start();
          }}
          options={{
            delay: 75,
            deleteSpeed: 75,
            loop: true,
            skipAddStyles: true,
          }}
        />
      </h3>
      <nav className='mb-[25px]'>
        <ul className='gap-x-4 flex flex-row'>
          {FOOTER_LINKS.map((item, i) => (
            <li
              key={i}
              className='hover:opacity-50 transition-all duration-[400ms]'
            >
              <Link href={item.href}>
                <a target='_blank'>
                  <item.Icon />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex flex-row gap-x-[15px]'>
        <OutlinedAnchorButton id='work' text='View Work' />
        <OutlinedAnchorButton id='contact' text='Hire Me' />
      </div>
    </header>
  );
};

export default Header;
