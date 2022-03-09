import Link from 'next/link';
import { OutlinedAnchorProps } from 'typings/global';

const OutlinedAnchor: React.FC<OutlinedAnchorProps> = ({ id, text }) => {
  return (
    <Link href={`#${id}`}>
      <a className='border-primary px-8 py-2 border-2 border-solid rounded-[30px] transition-all duration-500 hover:bg-transparent bg-primary text-sm font-medium tracking-[0.5px] leading-6'>
        {text}
      </a>
    </Link>
  );
};

export default OutlinedAnchor;
