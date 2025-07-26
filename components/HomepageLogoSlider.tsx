'use client';
import Image from 'next/image';
import { IRootState } from '@/store';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const HomepageLogoSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="container">
            <div className="swiper logo-slider">
                <Swiper
                    className="swiper-wrapper"
                    loop={true}
                    slidesPerView={1.5}
                    spaceBetween={18}
                    speed={1000}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 4,
                        },
                        1142: {
                            slidesPerView: 5,
                        },
                        1536: {
                            slidesPerView: 6,
                        },
                    }}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                    modules={[Autoplay]}
                >
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-1.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-2.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-3.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-4.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-5.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-6.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-1.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-2.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-3.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-4.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-5.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-6.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-1.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-2.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-3.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-4.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-5.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-6.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-1.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-2.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-3.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-4.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-5.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <a href="#">
                            <Image src="/assets/images/logoipsum-6.svg" alt="Partner image" className="mx-auto" width={235} height={40} />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomepageLogoSlider;
