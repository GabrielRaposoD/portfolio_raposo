import { SectionTitle } from 'components';

const Contact: React.FC = () => {
  return (
    <section className='bg-lighterGray w-full py-[100px]' id='contact'>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title='Get In Touch' />
      </div>
    </section>
  );
};

export default Contact;
