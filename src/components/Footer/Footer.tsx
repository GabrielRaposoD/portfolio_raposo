import { IconLink } from 'components';
import { IconLinkProps } from 'typings/global';

interface FooterProps {
  links: IconLinkProps[];
  copyright: string;
  madeBy: string;
}

const Footer: React.FC<FooterProps> = ({ links, copyright, madeBy }) => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gray w-full py-[50px]' id='footer'>
      <div className=' container flex flex-col items-center justify-center mx-auto'>
        <nav>
          <ul className='gap-x-5 flex flex-row mb-5'>
            {links.map((item, i) => (
              <li key={item.href + i}>
                <IconLink
                  href={item.href}
                  Icon={item.Icon}
                  title={item.title}
                />
              </li>
            ))}
          </ul>
        </nav>
        <p className='font-sans text-sm leading-6'>
          Copyright © {year} - {copyright}.
        </p>
        <p className='text-sm leading-6'>{madeBy}</p>
      </div>
    </footer>
  );
};

export default Footer;
