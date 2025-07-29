import NewsLetter from '@/components/NewsLetter';
import TestimonialSlider from '@/components/TestimonialSlider';
import Image from 'next/image';
import React from 'react';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import { env } from '../../env';

export const metadata: Metadata = {
    title: 'Portfolio Detail | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Portfolio Detail | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: env.NEXT_PUBLIC_APP_URL + '/portfolio-detail',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Portfolio Detail | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${env.NEXT_PUBLIC_APP_URL}/portfolio-detail`,
        languages: { 'x-default': `${env.NEXT_PUBLIC_APP_URL}/portfolio-detail` },
    },
};

const page = () => {
    return (
        <>
            <div className="py-16 lg:pb-32">
                <div className="container">
                    <div className="relative mx-auto max-w-[852px] pb-16 text-center">
                        <Image
                            src="/assets/images/hero-bg-element.png"
                            alt="Hero bg image"
                            className="absolute left-1/2 top-0 w-full max-w-[1110px] -translate-x-1/2"
                            width={852}
                            height={135}
                        />
                        <h1
                            className="relative mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white md:mb-8 lg:px-10 lg:text-[56px]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <span className="relative z-1">We Serve world-class digital solution</span>
                            <Image
                                src="/assets/images/blue-arrow.svg"
                                alt="Blue arrow"
                                className="absolute -top-5 end-40 hidden rtl:rotate-y-180 lg:inline-block"
                                width={212}
                                height={189}
                            />
                        </h1>
                        <p className="text-lg md:text-22">Digital case studies often include detailed descriptions of the project&apos;s objectives.</p>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 xl:h-[926px]">
                        <div className="overflow-hidden rounded-2xl xl:row-span-2" data-aos="fade-up" data-aos-duration="1000">
                            <Image src="/assets/images/portfolio-3.jpg" alt="Portfolio image" className="h-full w-full object-cover" width={752} height={926} />
                        </div>
                        <div className="overflow-hidden rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <Image src="/assets/images/portfolio-4.jpg" alt="Portfolio image" className="h-full w-full object-cover" width={752} height={447} />
                        </div>
                        <div className="overflow-hidden rounded-2xl" data-aos="fade-up" data-aos-duration="1000">
                            <Image src="/assets/images/portfolio-5.jpg" alt="Portfolio image" className="h-full w-full object-cover" width={752} height={447} />
                        </div>
                    </div>
                    <div className="grid gap-8 pt-16 lg:grid-cols-3 lg:pt-24">
                        <div className="lg:col-span-2 lg:pe-24">
                            <h2 className="pb-8 text-[26px]/7 font-bold text-purple-700 dark:text-white">Project overview</h2>
                            <div className="space-y-5">
                                <p>
                                    Track your social media metrics and use analytics tools to measure the success of your social media efforts and make
                                    data-driven decisions for future improvements. It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout.
                                </p>
                                <p>
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for the
                                    product. Track your social media metrics and use analytics tools to measure the success of your social media efforts and
                                    make data-driven decisions.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-wrap justify-between gap-10 text-xl text-secondary dark:text-white lg:flex-col lg:justify-start">
                            <div>
                                <h3>Client</h3>
                                <span className="font-semibold text-green">Steve Jordan huge</span>
                            </div>
                            <div>
                                <h3>Our role</h3>
                                <span className="font-semibold text-purple">Search engine optimization</span>
                            </div>
                            <div>
                                <h3>timeline</h3>
                                <span className="font-semibold text-red">6 months</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-16 lg:pt-24">
                        <div className="pb-16 lg:pb-24">
                            <h2 className="pb-8 text-[26px]/7 font-bold text-purple-700 dark:text-white">How we work?</h2>
                            <div className="space-y-5">
                                <p>
                                    From the designers and engineers who are creating the next generation of web and mobile experiences, to anyone putting a
                                    website together for the first time. We provide elegant solutions that set new standards for online publishing. Digital
                                    technology has made our world more transparent and interconnected, posing new challenges and opportunities for every
                                    business. A holistic, user-centric perspective is what truly sets one apart.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="group relative overflow-hidden rounded-xl xl:h-[492px]">
                                    <Image
                                        src="/assets/images/research.jpg"
                                        alt="Research image"
                                        className="h-full w-full object-cover duration-300 group-hover:scale-110"
                                        width={491}
                                        height={492}
                                    />
                                    <span className="absolute end-5 top-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-purple-700 text-3xl font-extrabold text-white xl:h-24 xl:w-24 xl:text-5xl">
                                        01
                                    </span>
                                </div>
                                <div className="space-y-6 pt-10">
                                    <h3 className="text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Research</h3>
                                    <p>
                                        A digital agency is a company that provides a range of services related to digital marketing and advertising. These
                                        agencies specialize in helping businesses and organizations establish and improve their.
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="group relative overflow-hidden rounded-xl xl:h-[492px]">
                                    <Image
                                        src="/assets/images/analyze.jpg"
                                        alt="Analyze image"
                                        className="h-full w-full object-cover duration-300 group-hover:scale-110"
                                        width={491}
                                        height={492}
                                    />
                                    <span className="absolute end-5 top-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-purple-700 text-3xl font-extrabold text-white xl:h-24 xl:w-24 xl:text-5xl">
                                        02
                                    </span>
                                </div>
                                <div className="space-y-6 pt-10">
                                    <h3 className="text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Analyze</h3>
                                    <p>
                                        It is a comprehensive service provider that specializes in assisting businesses and organizations to establish and
                                        strengthen their online presence through digital marketing and advertising.
                                    </p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="group relative overflow-hidden rounded-xl xl:h-[492px]">
                                    <Image
                                        src="/assets/images/optimize.jpg"
                                        alt="Optimize image"
                                        className="h-full w-full object-cover duration-300 group-hover:scale-110"
                                        width={491}
                                        height={492}
                                    />
                                    <span className="absolute end-5 top-5 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-purple-700 text-3xl font-extrabold text-white xl:h-24 xl:w-24 xl:text-5xl">
                                        03
                                    </span>
                                </div>
                                <div className="space-y-6 pt-10">
                                    <h3 className="text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Optimize</h3>
                                    <p>
                                        A digital marketing agency is a results-driven service provider that leverages the latest technologies and strategies to
                                        help businesses achieve their marketing goals. Our agency specializes in creating...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-16 lg:pt-24">
                        <h2 className="pb-8 text-[26px]/7 font-bold text-purple-700 dark:text-white">We will be useful to you</h2>
                        <div className="space-y-5">
                            <p>
                                We provide elegant solutions that set new standards for online publishing. Digital technology has made our world more
                                transparent and interconnected, posing new challenges and opportunities for every business. A holistic, user-centric perspective
                                is what truly sets one apart.
                            </p>
                            <p>
                                We provide elegant solutions that set new standards for online publishing. Digital technology has made our world more
                                transparent and interconnected, posing new challenges and opportunities for every business. A holistic, user-centric perspective
                                is what truly sets one apart.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-16 lg:pb-32">
                <TestimonialSlider />
            </div>

            <NewsLetter />
        </>
    );
};

export default page;
