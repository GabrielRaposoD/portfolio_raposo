import { FooterIcon } from 'components';
import { FOOTER_LINKS } from 'utils/constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gray w-full py-[50px]' id='footer'>
      <div className=' container flex flex-col items-center justify-center mx-auto'>
        <nav>
          <ul className='gap-x-5 flex flex-row mb-5'>
            {FOOTER_LINKS.map((item, i) => (
              <li key={i}>
                <FooterIcon
                  href={item.href}
                  Icon={item.Icon}
                  title={item.title}
                />
              </li>
            ))}
          </ul>
        </nav>
        <p className='font-sans text-sm leading-6'>
          Copyright © {year} - All Rights Reserved.
        </p>
        <p className='text-sm leading-6'>Designed by Gabriel Raposo.</p>
      </div>
    </footer>
  );
};

export default Footer;
