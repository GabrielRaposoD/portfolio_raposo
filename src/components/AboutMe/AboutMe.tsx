import { ActionButton, SectionTitle } from 'components';

import Link from 'next/link';

interface AboutMeProps {
  title: string;
  labels: {
    name: string;
    title: string;
    description: string;
    button: string;
  };
}

const AboutMe: React.FC<AboutMeProps> = ({ title, labels }) => {
  return (
    <section
      className='bg-lighterGray w-full py-[100px] px-8 xl:px-0 '
      id='about'
    >
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title={title} />
        <div className='flex flex-col lg:flex-row gap-y-4 gap-x-[30px] items-center'>
          <div className='h-[421px] lg:w-[540px] w-full bg-white' />
          <div className='flex flex-col lg:max-w-[540px] w-full'>
            <h3 className='text-[25px] font-bold leading-[1.3] mb-2.5'>
              {labels.name} <span className='text-purple-500'>Raposo</span>
            </h3>
            <h6 className='font-normal text-[13px] leading-[1.3] text-[#c3c3c3] tracking-[4px] mb-[30px] uppercase'>
              {labels.title}
            </h6>
            <p className='text-sm text-[#c5c5c5] leading-6 mb-5'>
              {labels.description}
            </p>
            <Link href='https://assets-raposo.s3.amazonaws.com/resume.pdf'>
              <a target='_blank'>
                <ActionButton text={labels.button} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
