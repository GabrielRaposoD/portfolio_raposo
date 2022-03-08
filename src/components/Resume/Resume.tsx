import { SectionTitle } from 'components';
import { ResumeItem } from 'components/ResumeItem';
import { TIMELINE } from 'utils/constants';

const Resume: React.FC = () => {
  const lastIndex = TIMELINE.length - 1;
  return (
    <section className='bg-lighterGray w-full py-[100px]' id='resume'>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title='Work & Education' />
        <div className='bg-gray flex flex-col p-[30px]'>
          {TIMELINE.map((item, i) => (
            <ResumeItem {...item} key={item.title + i} last={lastIndex === i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
