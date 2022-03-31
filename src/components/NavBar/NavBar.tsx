import Link from 'next/link';
import { Section } from 'typings/global';
import cs from 'clsx';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';

interface NavBarProps {
  sections: Section[];
}

const NavBar: React.FC<NavBarProps> = ({ sections }) => {
  const [isBlur, setIsBlur] = useState<boolean>(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y === 0) {
      setIsBlur(false);
    } else if (isBlur === false) {
      setIsBlur(true);
    }
  });

  return (
    <nav
      className={cs(
        'fixed top-0 w-full bg-transparent py-[25px] bg-opacity-100 z-50 transition-all duration-500 border-t-4 border-purple-600 border-solid px-8 xl:px-0',
        {
          'bg-blur border-opacity-60': isBlur,
        }
      )}
      id='mainNav'
    >
      <div className='container flex flex-row items-center justify-between mx-auto'>
        <Link href='#home'>
          <a className='text-[28px] font-extrabold'>
            <span className='text-purple-600'>Ra</span>poso
          </a>
        </Link>
        <ul className='md:flex flex-row gap-x-2.5 text-sm leading-6 font-medium tracking-[0.5px] hidden'>
          {sections.map((s, i) => (
            <li key={s.id + i}>
              <Link href={`#${s.id}`}>
                <a className='p-2 capitalize'>{s.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
