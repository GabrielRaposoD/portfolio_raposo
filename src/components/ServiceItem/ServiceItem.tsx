import { ServiceItemProps } from 'typings/global';

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div className='bg-lightGray gap-y-3 group hover:border-purple-700 flex flex-col items-center p-10 transition-all duration-500 ease-in-out border-b-2 border-transparent border-solid'>
      <div className='after:bg-[#c8c8c812] after:group-hover:bg-purple-700 after:w-full after:inset-0 after:content-[""] after:absolute after:z-0 relative w-max p-4 after:transform after:rotate-45 after:rounded-[20px] mb-4 after:transition-all after:duration-500 after:ease-in-out'>
        <Icon className='fill-purple-700 group-hover:fill-white relative z-10 w-12 h-12 transition-all duration-500 ease-in-out' />
      </div>
      <h3 className=''>{title}</h3>
      <p className='text-sm text-[#c5c5c5] leading-6'>{description}</p>
    </div>
  );
};

export default ServiceItem;
