interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className='whitespace-nowrap mb-[75px] w-full text-center font-bold pb-5 md:text-[40px] text-3xl leading-[1.3] text-white relative after:absolute after:left-0 after:right-0 after:h-[1px] after:max-w-[300px] after:bottom-0 after:title-gradient after:mx-auto'>
      {title}
    </h2>
  );
};

export default SectionTitle;
