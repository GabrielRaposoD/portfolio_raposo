import { SectionTitle } from 'components';

const Resume: React.FC = () => {
  return (
    <section className='bg-lighterGray w-full py-[100px]' id='resume'>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title='Work & Eduction' />
      </div>
    </section>
  );
};

export default Resume;
