interface ActionButtonProps {
  id?: string;
  text: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  id,
  type,
  text,
  onClick,
}) => {
  return (
    <button
      className='max-w-max z-10 leading-6 after:z-0 relative px-[15px] py-[9px] uppercase tracking-[4px] text-[15px] text-white bg-transparent font-teko after:absolute after:left-0 after:top-0 after:bg-white after:w-[45%] after:h-full after:transition-all after:bg-opacity-[0.07] after:duration-500 hover:after:w-full'
      id={id}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ActionButton;
