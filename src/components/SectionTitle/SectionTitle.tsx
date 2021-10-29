interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className='whitespace-nowrap mb-[75px] w-[300px] text-center font-bold pb-5 text-[40px] leading-[1.3] capitalize text-white relative after:absolute after:left-0 after:right-0 after:h-[1px] after:w-full after:bottom-0 after:title-gradient'>
      {title}
    </h2>
  );
};

export default SectionTitle;
