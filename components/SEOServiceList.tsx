'use client';
import Image from 'next/image';
import { useState } from 'react';
import CountsUp from './CountsUp';
import Link from 'next/link';

const SEOServiceList = () => {
    const [activeTab, setActiveTab] = useState<string>('first');

    return (
        <div className="mx-auto max-w-[1142px] px-4">
            <div className="relative mx-auto pb-10 text-center lg:px-48 lg:pb-12">
                <Image
                    src="/assets/images/blue-star.svg"
                    alt="Blue star"
                    className="absolute hidden md:block lg:bottom-12 lg:start-12"
                    width={62}
                    height={61}
                />
                <Image src="/assets/images/purple-star.svg" alt="Purple star" className="absolute end-0 top-0 hidden md:block" width={32} height={32} />
                <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Need help to skyrocket your SEO rankings?</h2>
                <p className="text-lg md:text-xl">
                    The higher the ranking, the more likely it is that the website or webpage will receive organic traffic from search engine users.
                </p>
            </div>
            <ul className="filters flex grid-cols-3 gap-7 overflow-x-auto whitespace-nowrap px-4 py-4 text-lg font-semibold text-purple-700 dark:text-purple-600 md:text-xl lg:grid lg:overflow-x-visible lg:px-0">
                <li className={`filter ${activeTab === 'first' ? 'active' : ''}`} data-filter="first">
                    <button
                        className="w-full rounded-lg border border-white bg-white p-4 text-center shadow-[0_0_8px_rgba(0,0,0,0.1)] duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-purple-900 dark:bg-purple-900 dark:hover:border-primary md:p-7"
                        onClick={() => setActiveTab('first')}
                    >
                        1. Content that get traffic
                    </button>
                </li>
                <li className={`filter ${activeTab === 'second' ? 'active' : ''}`} data-filter="second">
                    <button
                        className="w-full rounded-lg border border-white bg-white p-4 text-center shadow-[0_0_8px_rgba(0,0,0,0.1)] duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-purple-900 dark:bg-purple-900 dark:hover:border-primary md:p-7"
                        onClick={() => setActiveTab('second')}
                    >
                        2. Data driven strategy
                    </button>
                </li>
                <li className={`filter ${activeTab === 'third' ? 'active' : ''}`} data-filter="third">
                    <button
                        className="w-full rounded-lg border border-white bg-white p-4 text-center shadow-[0_0_8px_rgba(0,0,0,0.1)] duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-purple-900 dark:bg-purple-900 dark:hover:border-primary md:p-7"
                        onClick={() => setActiveTab('third')}
                    >
                        3. Design apps & software
                    </button>
                </li>
            </ul>
            <div className="projects pt-14 lg:pt-24">
                <div className={`project ${activeTab === 'first' ? '' : 'hidden'}`} data-filter="first">
                    <div className="flex flex-col items-start gap-x-20 gap-y-10 lg:flex-row">
                        <div className="mx-auto shrink-0 overflow-hidden rounded-xl shadow-[0_1px_15px_rgba(0,0,0,.1)] md:w-2/5">
                            <Image
                                src="/assets/images/content-get-traffic.jpg"
                                alt="Content traffic"
                                className="h-full w-full object-cover"
                                width={444}
                                height={311}
                            />
                        </div>
                        <div className="text-center lg:pe-20 lg:ltr:text-left lg:rtl:text-right">
                            <div className="space-y-4">
                                <h3 className="text-22 font-semibold text-purple-700 dark:text-white">
                                    Content that gets traffic. Solid technical certificate SEO.
                                </h3>
                                <p className="text-xl/tight">
                                    From industry-leading digital design and development to maximized social media strategies to effective PR campaigns,
                                </p>
                            </div>
                            <div className="my-12 flex justify-center gap-4 md:gap-24 lg:justify-start">
                                <div className="space-y-4">
                                    <h4 className="text-[40px] font-extrabold leading-tight text-green">
                                        <CountsUp start={0} end={4} duration={2} delay={1} suffix="k" />
                                    </h4>
                                    <div className="text-xl font-medium">Jobs completed</div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-[40px] font-extrabold leading-tight text-pink">
                                        <CountsUp start={0} end={15} duration={4} delay={1} suffix="+" />
                                    </h4>
                                    <div className="text-xl font-medium">Industry experience</div>
                                </div>
                            </div>
                            <Link href="/contact-us" className="btn inline-flex">
                                Start free trial
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`project ${activeTab === 'second' ? '' : 'hidden'}`} data-filter="second">
                    <div className="flex flex-col items-start gap-x-20 gap-y-10 lg:flex-row">
                        <div className="mx-auto shrink-0 overflow-hidden rounded-xl shadow-[0_1px_15px_rgba(0,0,0,.1)] md:w-2/5 lg:order-2">
                            <Image
                                src="/assets/images/data-driven-strategy.jpg"
                                alt="Data driven strategy"
                                className="h-full w-full object-cover"
                                width={444}
                                height={311}
                            />
                        </div>
                        <div className="text-center lg:pe-20 lg:ltr:text-left lg:rtl:text-right">
                            <div className="mb-16 space-y-4">
                                <h5 className="text-22 font-semibold text-purple-700 dark:text-white">
                                    We combine data-driven strategy and award-winning campaigns
                                </h5>
                                <p className="text-xl/tight">
                                    We are a strategic partner dedicated to getting results through experience, research, and creativity.
                                </p>
                            </div>
                            <Link href="/service-detail" className="btn inline-flex">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`project ${activeTab === 'third' ? '' : 'hidden'}`} data-filter="third">
                    <div className="flex flex-col items-start gap-x-20 gap-y-10 lg:flex-row">
                        <div className="mx-auto shrink-0 overflow-hidden rounded-xl shadow-[0_1px_15px_rgba(0,0,0,.1)] md:w-2/5">
                            <Image
                                src="/assets/images/design-app-software.jpg"
                                alt="Design app software"
                                className="h-full w-full object-cover"
                                width={444}
                                height={311}
                            />
                        </div>
                        <div className="text-center lg:pe-20 lg:ltr:text-left lg:rtl:text-right">
                            <div className="mb-16 space-y-4">
                                <h5 className="text-22 font-semibold text-purple-700 dark:text-white">We develop applications that helps your businesses</h5>
                                <p className="text-xl/tight">
                                    The first step in developing an application for businesses is to identify the problem you are trying to solve. Understand
                                    the business needs and challenges they face.
                                </p>
                            </div>
                            <Link href="/contact-us" className="btn inline-flex">
                                Let&apos;s talk
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SEOServiceList;
