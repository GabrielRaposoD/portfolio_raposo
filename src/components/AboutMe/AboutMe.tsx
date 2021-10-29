import { SectionTitle } from 'components';

const AboutMe: React.FC = () => {
  return (
    <section className='bg-lighterGray w-full py-[100px]' id='about'>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title='About Me' />
      </div>
    </section>
  );
};

export default AboutMe;
