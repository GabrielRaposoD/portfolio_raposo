import Link from 'next/link';

interface OutlinedAnchorButtonProps {
  id: string;
  text: string;
}

const OutlinedAnchorButton: React.FC<OutlinedAnchorButtonProps> = ({
  id,
  text,
}) => {
  return (
    <button
      className='border-primary px-8 py-2 border-2 border-solid rounded-[30px] transition-all duration-500 hover:bg-transparent bg-primary text-sm font-medium tracking-[0.5px] leading-6'
      id='header'
      title={id}
    >
      <Link href={`#${id}`}>
        <a>{text}</a>
      </Link>
    </button>
  );
};

export default OutlinedAnchorButton;
