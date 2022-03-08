import { ActionButton, SectionTitle } from 'components';

import Link from 'next/link';

const AboutMe: React.FC = () => {
  return (
    <section className='bg-lighterGray w-full py-[100px]' id='about'>
      <div className='container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title='About Me' />
        <div className='flex flex-row gap-x-[30px] items-center'>
          <div className='h-[421px] w-[540px]  bg-white' />
          <div className='flex flex-col max-w-[540px]'>
            <h3 className='text-[25px] font-bold leading-[1.3] mb-2.5'>
              I am <span className='text-purple-500'>Raposo</span>
            </h3>
            <h6 className='font-normal text-[13px] leading-[1.3] text-[#c3c3c3] tracking-[4px] mb-[30px] uppercase'>
              SOFTWARE ENGINEER & FULLSTACK DEVELOPER
            </h6>
            <p className='text-sm text-[#c5c5c5] leading-6 mb-5'>
              I am a freelancer based in US and I have been working as a web
              developer and software engineer for 5 years. I diligently keep
              track of the latest techs trends, so I can help convert your
              vision or idea into a meaningful and useful product. Having a
              sharp eye for product development helps me prioritize tasks,
              iterate quickly, and deliver faster.
            </p>
            <Link href='https://assets-raposo.s3.amazonaws.com/resume.pdf'>
              <a target='_blank'>
                <ActionButton text='Download my Cv' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
