import { ResumeItem } from 'components/ResumeItem';
import { ResumeItemProps } from 'typings/global';
import { SectionTitle } from 'components';

interface ResumeProps {
  title: string;
  timeline: ResumeItemProps[];
}

const Resume: React.FC<ResumeProps> = ({ title, timeline }) => {
  const lastIndex = timeline.length - 1;
  return (
    <section className='bg-lighterGray w-full py-[100px]' id='resume'>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title={title} />
        <div className='bg-gray flex flex-col p-[30px]'>
          {timeline.map((item, i) => (
            <ResumeItem {...item} key={item.title + i} last={lastIndex === i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
