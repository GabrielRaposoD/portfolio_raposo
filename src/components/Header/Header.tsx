import { IconLinkProps, OutlinedAnchorProps } from 'typings/global';

import Link from 'next/link';
import { OutlinedAnchor } from 'components';
import Typewriter from 'typewriter-effect';
import { useCallback } from 'react';

interface HeaderProps {
  links: IconLinkProps[];
  labels: {
    welcome: string;
    typewriterBase: string;
    typewriter: string[];
  };
  anchors: OutlinedAnchorProps[];
}

const Header: React.FC<HeaderProps> = ({ links, labels, anchors }) => {
  return (
    <header
      className='bg-black w-full pt-[100px] items-center justify-center flex flex-col text-lg bg-header-bg bg-no-repeat min-h-[660px] bg-cover bg-fixed bg-center'
      id='home'
    >
      <h3 className='uppercase font-medium tracking-[3px] mb-[25px]'>
        {labels.welcome}
      </h3>
      <h3 className='flex flex-row mb-5 lg:text-6xl text-2xl font-bold whitespace-pre leading-[1.3]'>
        <span>{labels.typewriterBase}</span>
        <Typewriter
          options={{
            strings: [...labels.typewriter],
            autoStart: true,
            delay: 75,
            deleteSpeed: 75,
            loop: true,
            skipAddStyles: true,
          }}
        />
      </h3>
      <nav className='mb-[25px]'>
        <ul className='gap-x-4 flex flex-row'>
          {links.map((item, i) => (
            <li
              key={i}
              className='hover:opacity-50 transition-all duration-[400ms]'
            >
              <Link href={item.href}>
                <a target='_blank'>
                  <item.Icon title={item.title} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex flex-row gap-x-[15px]'>
        {anchors.map((anchor, i) => (
          <OutlinedAnchor
            id={anchor.id}
            text={anchor.text}
            key={anchor.id + i}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
