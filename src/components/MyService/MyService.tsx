import { SERVICES } from 'utils/constants';
import { SectionTitle } from 'components';
import { ServiceItem } from 'components/ServiceItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const MyService: React.FC = () => {
  return (
    <section className='bg-gray w-full py-[100px]' id='service'>
      <div className='container flex flex-col items-center justify-center w-full mx-auto'>
        <SectionTitle title='My Services' />

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
          {SERVICES.map((service, i) => (
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
