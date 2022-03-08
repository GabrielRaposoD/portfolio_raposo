import cs from 'clsx';

interface ResumeItemProps {
  title: string;
  description: string;
  startDate: string | number;
  endDate: string | number;
  last: boolean;
}

const ResumeItem: React.FC<ResumeItemProps> = ({
  title,
  description,
  startDate,
  endDate,
  last,
}) => {
  return (
    <div className='relative'>
      <div className='before:absolute before:content-[""] before:left-auto before:top-auto before:w-[1px] before:h-[calc(100%-30px)] before:mt-[30px] before:bg-purple-600 after:absolute after:content-[""] after:left-auto after:top-auto after:w-2 after:h-2 after:bg-purple-600 after:rounded-[50%] after:mt-[10px] after:ml-[-3px]' />
      <div
        className={cs('w flex flex-col pl-[50px] pb-[50px]', { 'pb-0': last })}
      >
        <h3 className='mb-2'>{title}</h3>
        <small className='bg-purple-600 text-[10px] font-medium py-[5px] px-3 w-max mb-4'>
          {startDate} - {endDate}
        </small>
        <p className='text-sm text-[#c5c5c5] leading-6'>{description}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
