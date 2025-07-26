'use client';
import Image from 'next/image';
import TestimonialDescription from './TestimonialDescription';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from 'swiper/modules';
import { useState } from 'react';
import RightArrowIcon from './Icons/RightArrowIcon';
import LeftArrowIcon from './Icons/LeftArrowIcon';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';

const TestimonialSlider = () => {
    const [firstSwiper, setFirstSwiper] = useState<any>(null);
    const [secondSwiper, setSecondSwiper] = useState<any>(null);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div className="mx-auto max-w-[1142px] px-4">
            <div className="mx-auto pb-6 text-center lg:w-2/3">
                <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Testimonial</h2>
                <p className="text-lg md:text-xl">Don&apos;t take our word for it, take theirs!</p>
            </div>

            <div className=" mx-auto max-w-3xl">
                <Swiper
                    modules={[Controller]}
                    // loop={true}
                    className="swiper testimonial-thumb"
                    slideToClickedSlide={true}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 5,
                        },
                        1536: {
                            slidesPerView: 7,
                        },
                    }}
                    controller={{ control: secondSwiper }}
                    onSwiper={setFirstSwiper}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-1.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-2.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-3.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-4.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-5.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-6.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-7.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-1.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-2.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-3.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-4.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-5.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-6.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="mx-auto h-20 w-20 overflow-hidden rounded-full grayscale">
                            <Image src="/assets/images/testimonial-user-7.svg" alt="Testimonial image" width={80} height={80} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="relative mt-4 md:mt-10">
                <div className="swiper testimonial mx-auto w-full max-w-xl text-center">
                    <Swiper
                        modules={[Controller, Navigation]}
                        className="swiper-wrapper"
                        // loop={true}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.testimonial-button-next',
                            prevEl: '.testimonial-button-prev',
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        controller={{ control: firstSwiper }}
                        onSwiper={setSecondSwiper}
                        key={isRtl ? 'true' : 'false'}
                    >
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <TestimonialDescription />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <button
                    type="button"
                    className="testimonial-button-next group absolute right-0 top-1/2 hidden -translate-y-1/2 text-primary duration-300 after:hidden hover:scale-110 md:inline-block"
                >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-primary/40 to-50%">
                        <RightArrowIcon className="w-[22px] h-3" />
                        <span className="sr-only">Next</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="testimonial-button-prev absolute left-0 top-1/2 hidden -translate-y-1/2 rotate-180 text-primary duration-300 after:hidden hover:scale-110 md:inline-block"
                >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-primary/40 to-50%">
                        <LeftArrowIcon />
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
