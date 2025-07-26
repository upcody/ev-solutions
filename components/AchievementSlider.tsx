'use client';
import Image from 'next/image';
import UnderlineIcon from './Icons/UnderlineIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { IRootState } from '@/store';
import { useSelector } from 'react-redux';

const AchievementSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="rounded-3xl bg-secondary px-4 pb-16 pt-12 text-center text-purple-400 lg:pb-20">
            <div className="relative mx-auto pb-10 text-center lg:w-5/12 lg:pb-20">
                <Image src="/assets/images/yellow-star-plan.svg" alt="Image" className="absolute start-0 lg:-start-20 lg:top-14" width={44} height={44} />
                <Image src="/assets/images/green-star.svg" alt="Image" className="absolute end-0 top-0 lg:-end-20" width={32} height={32} />
                <h2 className="mb-5 text-[26px]/7 font-bold text-white">Our achievement</h2>
                <p className="text-lg md:text-xl">
                    Find a team of digital marketers you can rely on. Every day, we build trust through communication, transparency, and results.
                </p>
            </div>
            <div className="mx-auto max-w-[1110px]">
                <div className="swiper achievement-slider">
                    <Swiper
                        className="swiper-wrapper"
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className="swiper-slide">
                            <h3 className="text-[26px] font-bold leading-tight text-white">2005</h3>
                            <span className="inline-flex py-4">
                                <UnderlineIcon />
                            </span>
                            <div className="relative mb-6 flex justify-center">
                                <span className="relative z-1 inline-block h-11 w-4 rounded-full bg-blue"></span>
                                <span className="absolute left-0 top-1/2 inline-block h-2 w-full -translate-y-1/2 bg-purple-700"></span>
                            </div>
                            <h4 className="pb-10 text-[26px] font-bold leading-tight text-blue">We Started</h4>
                            <p className="line-clamp-3 sm:px-4">
                                We started journey with two potential person and decided to one mission, Empowering Your Online Presence
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <h3 className="text-[26px] font-bold leading-tight text-white">2010</h3>
                            <span className="inline-flex py-4">
                                <UnderlineIcon />
                            </span>
                            <div className="relative mb-6 flex justify-center">
                                <span className="relative z-1 inline-block h-11 w-4 rounded-full bg-red"></span>
                                <span className="absolute left-0 top-1/2 inline-block h-2 w-full -translate-y-1/2 bg-purple-700"></span>
                            </div>
                            <h4 className="pb-10 text-[26px] font-bold leading-tight text-red">Link building</h4>
                            <p className="line-clamp-3 sm:px-4">
                                We started journey with two potential person and decided to one mission, Empowering Your Online Presence
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <h3 className="text-[26px] font-bold leading-tight text-white">2012</h3>
                            <span className="inline-flex py-4">
                                <UnderlineIcon />
                            </span>
                            <div className="relative mb-6 flex justify-center">
                                <span className="relative z-1 inline-block h-11 w-4 rounded-full bg-yellow"></span>
                                <span className="absolute left-0 top-1/2 inline-block h-2 w-full -translate-y-1/2 bg-purple-700"></span>
                            </div>
                            <h4 className="pb-10 text-[26px] font-bold leading-tight text-yellow">3M users</h4>
                            <p className="line-clamp-3 sm:px-4">
                                We started journey with two potential person and decided to one mission, Empowering Your Online Presence
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <h3 className="text-[26px] font-bold leading-tight text-white">2015</h3>
                            <span className="inline-flex py-4">
                                <UnderlineIcon />
                            </span>
                            <div className="relative mb-6 flex justify-center">
                                <span className="relative z-1 inline-block h-11 w-4 rounded-full bg-blue"></span>
                                <span className="absolute left-0 top-1/2 inline-block h-2 w-full -translate-y-1/2 bg-purple-700"></span>
                            </div>
                            <h4 className="pb-10 text-[26px] font-bold leading-tight text-blue">We Started</h4>
                            <p className="line-clamp-3 sm:px-4">
                                We started journey with two potential person and decided to one mission, Empowering Your Online Presence
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <h3 className="text-[26px] font-bold leading-tight text-white">2020</h3>
                            <span className="inline-flex py-4">
                                <UnderlineIcon />
                            </span>
                            <div className="relative mb-6 flex justify-center">
                                <span className="relative z-1 inline-block h-11 w-4 rounded-full bg-red"></span>
                                <span className="absolute left-0 top-1/2 inline-block h-2 w-full -translate-y-1/2 bg-purple-700"></span>
                            </div>
                            <h4 className="pb-10 text-[26px] font-bold leading-tight text-red">Link building</h4>
                            <p className="line-clamp-3 sm:px-4">
                                We started journey with two potential person and decided to one mission, Empowering Your Online Presence
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <h3 className="text-[26px] font-bold leading-tight text-white">2022</h3>
                            <span className="inline-flex py-4">
                                <UnderlineIcon />
                            </span>
                            <div className="relative mb-6 flex justify-center">
                                <span className="relative z-1 inline-block h-11 w-4 rounded-full bg-yellow"></span>
                                <span className="absolute left-0 top-1/2 inline-block h-2 w-full -translate-y-1/2 bg-purple-700"></span>
                            </div>
                            <h4 className="pb-10 text-[26px] font-bold leading-tight text-yellow">3M users</h4>
                            <p className="line-clamp-3 sm:px-4">
                                We started journey with two potential person and decided to one mission, Empowering Your Online Presence
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default AchievementSlider;
