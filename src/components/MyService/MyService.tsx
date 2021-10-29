import { SectionTitle } from 'components';

const MyService: React.FC = () => {
  return (
    <section className='bg-gray w-full py-[100px]' id='service'>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title='My Service' />
      </div>
    </section>
  );
};

export default MyService;
