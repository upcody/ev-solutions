'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const PositionSlider = () => {
    return (
        <div className="space-y-6 py-14 text-base font-semibold leading-tight text-purple-600 dark:text-purple-500 lg:pb-24 lg:pt-10">
            <div dir="ltr" className="swiper position-slider-one">
                <Swiper
                    modules={[Autoplay]}
                    className="swiper-wrapper"
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={32}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-pink bg-pink/10 px-8 py-3.5 text-pink dark:bg-[#FFE2F7]">
                            Full - stack developer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Backend developer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Senior accountant
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple bg-purple/10 px-8 py-3.5 text-purple dark:bg-[#F3E4FF]">Video editor</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">UI Designer</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Lead Dev OPS engineer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-yellow bg-yellow/10 px-8 py-3.5 text-yellow dark:bg-[#FFF8E0]">
                            Lead 2D game designer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Technical SEO Expert
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-pink bg-pink/10 px-8 py-3.5 text-pink dark:bg-[#FFE2F7]">
                            Full - stack developer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Backend developer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Senior accountant
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple bg-purple/10 px-8 py-3.5 text-purple dark:bg-[#F3E4FF]">Video editor</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">UI Designer</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Lead Dev OPS engineer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-yellow bg-yellow/10 px-8 py-3.5 text-yellow dark:bg-[#FFF8E0]">
                            Lead 2D game designer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Technical SEO Expert
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div dir="rtl" className="swiper position-slider-two">
                <Swiper
                    modules={[Autoplay]}
                    className="swiper-wrapper"
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={32}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Backend developer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Senior content manager
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-blue bg-blue/10 px-8 py-3.5 text-blue dark:bg-[#E0FBFF]">SEO Content Writer</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">UI Designer</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Technical SEO Expert
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-green bg-green/10 px-8 py-3.5 text-green dark:bg-[#E0F8F3]">
                            Lead Dev OPS engineer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">VFX editor</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Google Analytics Expert
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-primary bg-primary/10 px-8 py-3.5 text-primary">Lead 2D game designer</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Backend developer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Senior content manager
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-blue bg-blue/10 px-8 py-3.5 text-blue dark:bg-[#E0FBFF]">SEO Content Writer</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">UI Designer</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Technical SEO Expert
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-green bg-green/10 px-8 py-3.5 text-green dark:bg-[#E0F8F3]">
                            Lead Dev OPS engineer
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">VFX editor</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-purple-400 bg-purple-400/10 px-8 py-3.5 dark:border-purple-700">
                            Google Analytics Expert
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide w-auto!">
                        <div className="inline-flex rounded-full border border-primary bg-primary/10 px-8 py-3.5 text-primary">Lead 2D game designer</div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default PositionSlider;
