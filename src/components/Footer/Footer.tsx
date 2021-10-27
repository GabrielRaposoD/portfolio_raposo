import { FooterIcon } from 'components';
import { FOOTER_LINKS } from 'utils/constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gray w-full py-[50px]'>
      <div className=' container flex flex-col items-center justify-center mx-auto'>
        <div className='gap-x-5 flex flex-row mb-5'>
          {FOOTER_LINKS.map((item) => (
            <FooterIcon href={item.href} Icon={item.Icon} />
          ))}
        </div>
        <p className='text-sm leading-6'>
          Copyright © {year} - All Right Reserved.
        </p>
        <p className='text-sm leading-6'>Designed by Gabriel Raposo.</p>
      </div>
    </footer>
  );
};

export default Footer;
