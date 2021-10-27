import Link from 'next/link';
import { IconType } from 'react-icons';

interface FooterIconProps {
  href: string;
  Icon: IconType;
}

const FooterIcon: React.FC<FooterIconProps> = ({ href, Icon }) => {
  return (
    <Link href={href}>
      <a
        target='_blank'
        className='h-[35px] w-[35px] items-center flex justify-center after:transition-all after:duration-[400ms] relative hover:after:bg-primary after:bg-lightGray after:w-full after:h-full after:z-0 after:rotate-45 after:rounded-[10px] after:transform after:absolute'
      >
        <Icon className='z-10 text-xl' />
      </a>
    </Link>
  );
};

export default FooterIcon;
