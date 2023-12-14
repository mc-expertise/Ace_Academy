import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardRecommendations } from '../Constants/CardRecommendation';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import 'swiper/css/navigation';

const Card = () => {
  return (
    <>
      <div className="flex items-center justify-between relative">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="max-w-[100%]">
          {CardRecommendations.map((card, index) => (
            <SwiperSlide key={index} className="mb-11 relative w-full">
              <div className="w-full">
                <div className="w-full h-full">
                  <div className="relative">
                    <div className="text-[#1F1F1F] bg-[#F09272] rounded-[60px] font-bold py-2 px-4 absolute top-4 right-4 text-[13px]">
                      ${card.price}
                    </div>
                    <img src={card.img} alt="" className="w-full" />
                  </div>
                  <div className="p-6 bg-white flex flex-col gap-8 rounded-[10px] rounded-tl-none rounded-tr-none ">
                    <div>
                      <p className="opacity-[0.5] mb-2">{card.name}</p>
                      <p className="text-[18px] font-bold h-[54px]">
                        {card.title}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="14"
                          viewBox="0 0 15 14"
                          fill="none">
                          <path
                            d="M7.06803 0.907866C7.23465 0.549101 7.74469 0.549101 7.91132 0.907866L9.4934 4.31434C9.56138 4.46071 9.7004 4.56136 9.86068 4.58023L13.6062 5.02128C14.0011 5.06778 14.1592 5.55642 13.8663 5.82539L11.1015 8.36471C10.9818 8.47461 10.9282 8.63901 10.9601 8.79832L11.6947 12.47C11.7724 12.8586 11.3593 13.1601 11.0129 12.9675L7.71556 11.1344C7.57509 11.0563 7.40425 11.0563 7.26378 11.1344L3.96642 12.9675C3.61999 13.1601 3.20691 12.8586 3.28467 12.47L4.01925 8.79832C4.05112 8.63901 3.99751 8.47461 3.87785 8.36471L1.11303 5.82539C0.820173 5.55642 0.978232 5.06778 1.37314 5.02128L5.11866 4.58023C5.27894 4.56136 5.41796 4.46071 5.48594 4.31434L7.06803 0.907866Z"
                            fill="#EE8647"
                          />
                        </svg>
                        <p>4.9/5</p>
                      </div>
                      <div className="bg-[#F5F5F5] w-[36px]  group h-[36px] rounded-full flex justify-center items-center cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="group-hover:fill-[#525966] ">
                          <path
                            d="M10 16C10 16 3 12.1818 3 7.68182C3 6.70534 3.38293 5.76885 4.06455 5.07838C4.74618 4.3879 5.67066 4 6.63462 4C8.1551 4 9.4575 4.83932 10 6.18182C10.5425 4.83932 11.8449 4 13.3654 4C14.3293 4 15.2538 4.3879 15.9354 5.07838C16.6171 5.76885 17 6.70534 17 7.68182C17 12.1818 10 16 10 16Z"
                            stroke="#525966"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Card;
