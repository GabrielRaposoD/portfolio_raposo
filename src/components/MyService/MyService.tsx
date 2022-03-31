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
    <section className='bg-gray w-full py-[100px] px-8 xl:px-0' id='services'>
      <div className='container flex flex-col items-center justify-center w-full mx-auto'>
        <SectionTitle title={title} />

        <Swiper
          className='mySwiper'
          slidesPerView={1}
          slidesPerGroup={1}
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
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 40,
            },
          }}
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
