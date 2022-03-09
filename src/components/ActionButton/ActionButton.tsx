interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  return (
    <button
      {...props}
      className='max-w-max z-10 leading-6 after:z-0 relative px-[15px] py-[9px] uppercase tracking-[4px] text-[15px] text-white bg-transparent font-teko after:absolute after:left-0 after:top-0 after:bg-white after:w-[45%] after:h-full after:transition-all after:bg-opacity-[0.07] after:duration-500 hover:after:w-full'
    >
      {props.text}
    </button>
  );
};

export default ActionButton;
