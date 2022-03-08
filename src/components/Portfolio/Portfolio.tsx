import { SectionTitle } from 'components';

const Portfolio: React.FC = () => {
  return (
    <section className='bg-gray w-full py-[100px]' id='portfolio'>
      <div className=' container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title='Portfolio' />
      </div>
    </section>
  );
};

export default Portfolio;
