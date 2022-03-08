import Link from 'next/link';
import { SECTIONS } from 'utils/constants';
import cs from 'clsx';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';

const NavBar: React.FC = () => {
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
        'fixed top-0 w-full bg-transparent py-[25px] bg-opacity-100 z-50 transition-all duration-500',
        {
          'bg-blur border-opacity-60': isBlur,
        }
      )}
      id='mainNav'
    >
      <div className='container flex flex-row items-center justify-between mx-auto'>
        <Link href='#header'>
          <a className='text-[28px] font-extrabold'>
            <span className='text-purple-600'>Ra</span>poso
          </a>
        </Link>
        <ul className='flex flex-row gap-x-2.5 text-sm leading-6 font-medium tracking-[0.5px]'>
          {SECTIONS.map((s) => (
            <li key={s}>
              <Link href={`#${s}`}>
                <a className='p-2 capitalize'>{s}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
