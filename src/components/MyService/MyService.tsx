import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { Autoplay, FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionTitle } from 'components';
import { ServiceItem } from 'components/ServiceItem';
import { ServiceItemProps } from 'typings/global';

interface MyServiceProps {
  title: string;
  services: ServiceItemProps[];
}

const MyService: React.FC<MyServiceProps> = ({ title, services }) => {
  return (
    <section className='bg-gray w-full py-[100px]' id='service'>
      <div className='container flex flex-col items-center justify-center w-full mx-auto'>
        <SectionTitle title={title} />

        <Swiper
          className='mySwiper'
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          {services.map((service, i) => (
            <SwiperSlide key={service.title + i}>
              <ServiceItem {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MyService;
