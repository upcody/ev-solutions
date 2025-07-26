import Image from 'next/image';
import NewsLetter from '@/components/NewsLetter';
import TestimonialSlider from '@/components/TestimonialSlider';
import CountsUp from '@/components/CountsUp';
import AchievementSlider from '@/components/AchievementSlider';
import Link from 'next/link';
import type { Metadata } from 'next';
import helper from '@/libs/helper';

export const metadata: Metadata = {
    title: 'About Us | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'About Us | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/about-us',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'AboutUs | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/about-us`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/about-us` },
    },
};

const page = () => {
    return (
        <>
            <div className="py-14 lg:pb-32">
                <div className="container">
                    <div className="relative mx-auto max-w-4xl pb-14 text-center lg:pb-28">
                        <Image
                            src="/assets/images/hero-bg-element.png"
                            alt="Hero bg image"
                            className="absolute inset-0 top-2 w-full"
                            width={896}
                            height={142}
                        />
                        <h1
                            className="relative mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white md:mb-8 lg:px-10 lg:text-[56px]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <span className="relative z-1">Our mission is to make your business worthwhile.</span>
                            <Image
                                src="/assets/images/green-arrow.svg"
                                alt="Arrow"
                                className="absolute -top-5 start-1/2 hidden -translate-x-1/2 rtl:rotate-y-180 lg:inline-block"
                                width={213}
                                height={189}
                            />
                        </h1>
                        <p className="text-lg md:text-22 xl:px-10">
                            Find a team of digital marketers you can rely on. We build trust through communication, transparency, and results.
                        </p>
                    </div>

                    <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-14">
                        <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:items-start xl:gap-7">
                            <Image
                                src="/assets/images/about-bg-elements.png"
                                alt="About bg"
                                className="absolute left-20 top-14 hidden xl:inline-block"
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                                width={523}
                                height={488}
                            />
                            <div className="relative overflow-hidden rounded-lg sm:w-2/5 xl:mt-56 xl:h-[370px]">
                                <Image src="/assets/images/about-img-2.jpg" alt="About image" className="h-full w-full object-cover" width={285} height={370} />
                            </div>
                            <div className="relative overflow-hidden rounded-lg sm:w-3/5 xl:h-[340px]">
                                <Image src="/assets/images/about-img-1.jpg" alt="About image" className="h-full w-full object-cover" width={427} height={340} />
                            </div>
                        </div>
                        <div className="relative text-center lg:ltr:text-left lg:rtl:text-right 2xl:pe-44">
                            <span className="absolute end-0 top-0 hidden rtl:rotate-y-180 lg:inline-block">
                                <Image
                                    src="/assets/images/design-arrow-dark.svg"
                                    alt="Arrow dark"
                                    className="inline-flex dark:hidden"
                                    data-aos="zoom-in"
                                    data-aos-duration="2000"
                                    width={147}
                                    height={123}
                                />
                                <Image
                                    src="/assets/images/design-arrow-light.svg"
                                    alt="Arrow light"
                                    className="hidden dark:inline-flex"
                                    data-aos="zoom-in"
                                    data-aos-duration="2000"
                                    width={147}
                                    height={123}
                                />
                            </span>
                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary rtl:rotate-y-180 dark:bg-purple-900">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path
                                        d="M9.56231 6.23089C10.1126 6.11642 10.681 6.18146 11.2182 6.34016C12.3239 6.71089 12.3044 8.60357 11.1844 8.94309C10.6251 9.17983 10.0098 9.03805 9.42442 9.09788C7.7867 9.15252 6.22833 10.2244 5.61174 11.745C5.34377 12.4878 5.13564 13.293 5.27613 14.0865C6.69662 13.9161 8.12751 13.9954 9.5532 13.9772C10.6082 13.9746 11.7347 14.1672 12.5594 14.8735C13.5181 15.6163 14.0254 16.8221 14.0449 18.0176C14.041 19.2312 14.041 20.4449 14.0449 21.6572C14.028 22.9099 13.4621 24.1678 12.428 24.9028C11.3626 25.7327 9.93824 25.7171 8.65564 25.695C7.25597 25.6585 5.75873 25.8797 4.46702 25.2058C3.19483 24.5802 2.40784 23.1896 2.36621 21.7951C2.36881 19.0179 2.37011 16.2406 2.36621 13.4647C2.41694 11.9128 2.87093 10.3493 3.82182 9.10439C4.67776 8.04813 5.75483 7.12065 7.06084 6.67967C7.85694 6.36878 8.71028 6.24 9.56231 6.23089ZM5.96426 16.9236C5.49076 17.0354 5.20458 17.5389 5.2306 18.0059C5.2319 19.2247 5.2319 20.4449 5.2306 21.665C5.21499 22.0306 5.37239 22.4221 5.68459 22.6276C5.98507 22.8228 6.3584 22.8085 6.70182 22.8137C7.83092 22.8019 8.96003 22.8228 10.0878 22.8045C10.6368 22.8111 11.174 22.3753 11.148 21.799C11.1584 20.5346 11.1467 19.2702 11.1532 18.0059C11.1779 17.6104 11.001 17.1707 10.6212 17.0055C10.0852 16.7597 9.47776 16.8989 8.9106 16.8637C7.92979 16.8976 6.93727 16.7922 5.96426 16.9236Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M25.1759 6.23089C25.7262 6.11642 26.292 6.18146 26.8266 6.34016C27.9323 6.70959 27.9141 8.59967 26.7967 8.94179C26.1931 9.19154 25.5297 9.02634 24.9001 9.10699C23.3821 9.20065 21.9603 10.1737 21.3086 11.5447C20.9756 12.3382 20.7401 13.2241 20.8897 14.0878C22.2686 13.9148 23.6592 13.9993 25.0445 13.9759C26.1398 13.9642 27.3183 14.1424 28.1769 14.88C29.1291 15.6215 29.6325 16.8208 29.6533 18.0111C29.6494 19.2299 29.6494 20.4488 29.6533 21.6689C29.6351 22.9138 29.0705 24.1639 28.0442 24.8976C26.9762 25.7327 25.5466 25.7171 24.2601 25.6963C22.8631 25.6559 21.3684 25.8797 20.078 25.2085C18.8058 24.5802 18.0149 23.1883 17.9759 21.7912C17.9785 19.014 17.9798 16.2367 17.9746 13.4595C18.0292 11.5889 18.7044 9.67544 20.091 8.37723C21.3788 6.97756 23.2884 6.22699 25.1759 6.23089ZM21.5779 16.9223C21.0966 17.0341 20.8091 17.548 20.8403 18.0202C20.8455 19.2819 20.8351 20.5437 20.8455 21.8055C20.8546 22.361 21.3502 22.8241 21.9057 22.8019C23.174 22.8189 24.4436 22.815 25.7105 22.8045C26.2569 22.8059 26.785 22.3675 26.7577 21.7938C26.7577 20.4436 26.7746 19.092 26.7486 17.7431C26.694 17.0992 25.998 16.8 25.4244 16.8611C24.1431 16.9015 22.8514 16.7896 21.5779 16.9223Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            <div className="pt-12 text-purple-700 dark:text-white">
                                <p className="xl:text-22">
                                    Nobble combines excellent live video courses, notes and additional courses to help you learn quickly.
                                </p>
                                <div className="pt-8">
                                    <span className="font-bold">– Steven Lucas. </span>
                                    <span className="font-medium text-purple-600">CEO & Founder - Nobble</span>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4 pt-10 md:gap-10 lg:justify-start xl:pt-20">
                                    <div className="min-w-[120px] space-y-2 bg-green/[0.16] px-3 py-3.5 text-center text-green">
                                        <h2 className="text-[28px] font-bold leading-tight">
                                            <CountsUp start={0} end={32} duration={4} delay={2} suffix="k" />
                                        </h2>
                                        <span className="inline-block">Customers</span>
                                    </div>
                                    <div className="min-w-[120px] space-y-2 bg-purple/[0.16] px-3 py-3.5 text-center text-purple">
                                        <h2 className="text-[28px] font-bold leading-tight">
                                            <CountsUp start={0} end={2} duration={2} delay={2} suffix="k" />
                                        </h2>
                                        <span className="inline-block">Visitors</span>
                                    </div>
                                    <div className="min-w-[120px] space-y-2 bg-blue/[0.16] px-3 py-3.5 text-center text-blue">
                                        <h2 className="text-[28px] font-bold leading-tight">
                                            <CountsUp start={0} end={138} duration={4} delay={2} suffix="k" />
                                        </h2>
                                        <span className="inline-block">Projects</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-16 lg:py-24">
                        <div className="mx-auto pb-10 text-center lg:w-2/3 lg:pb-12">
                            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Service we can help you</h2>
                            <p className="text-lg md:text-xl">From the designers and engineers who are creating the next</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-7">
                            <div className="rounded-2xl border-2 border-[#9199B5]/[0.12] px-4 py-8 shadow-[0_0_80px_rgba(119,128,161,0.1)] dark:bg-purple-900 dark:shadow-none xl:p-8">
                                <span className="inline-flex pb-8">
                                    <Image src="/assets/images/seo-consultancy.svg" alt="Seo consultancy" width={56} height={56} />
                                </span>
                                <div className="pb-8 leading-normal xl:text-xl/7">
                                    <h3 className="pb-4 font-semibold text-purple-700 dark:text-white">SEO Consultancy</h3>
                                    <p className="line-clamp-5">
                                        SEO consultancy is an essential component of digital marketing. It involves the process of analyzing, improving, and
                                        promoting websites in order to increase their visibility and ranking in search engine results pages.
                                    </p>
                                </div>
                                <Link
                                    href="/service-detail"
                                    className="relative start-0 text-base font-semibold text-green duration-300 hover:start-2 hover:text-secondary dark:hover:text-white"
                                >
                                    Learn more....
                                </Link>
                            </div>
                            <div className="rounded-2xl border-2 border-[#9199B5]/[0.12] px-4 py-8 shadow-[0_0_80px_rgba(119,128,161,0.1)] dark:bg-purple-900 dark:shadow-none xl:p-8">
                                <span className="inline-flex pb-8">
                                    <Image src="/assets/images/content-marketing.svg" alt="Count marketing" width={56} height={56} />
                                </span>
                                <div className="pb-8 leading-normal xl:text-xl/7">
                                    <h3 className="pb-4 font-semibold text-purple-700 dark:text-white">Content Marketing</h3>
                                    <p className="line-clamp-5">
                                        Content marketing is a strategy that involves creating and sharing valuable, relevant, and consistent content to attract
                                        and retain a clearly defined audience. It is a critical component of digital marketing and plays...
                                    </p>
                                </div>
                                <Link
                                    href="/service-detail"
                                    className="relative start-0 text-base font-semibold text-blue duration-300 hover:start-2 hover:text-secondary dark:hover:text-white"
                                >
                                    Learn more....
                                </Link>
                            </div>
                            <div className="rounded-2xl border-2 border-[#9199B5]/[0.12] px-4 py-8 shadow-[0_0_80px_rgba(119,128,161,0.1)] dark:bg-purple-900 dark:shadow-none xl:p-8">
                                <span className="inline-flex pb-8">
                                    <Image src="/assets/images/keyword-research.svg" alt="Keyword research" width={56} height={56} />
                                </span>
                                <div className="pb-8 leading-normal xl:text-xl/7">
                                    <h3 className="pb-4 font-semibold text-purple-700 dark:text-white">Keyword Research</h3>
                                    <p className="line-clamp-5">
                                        Keyword research is the process of identifying the words and phrases that people use to search for information related
                                        to a particular topic or industry. It is a crucial component of digital marketing and helps....
                                    </p>
                                </div>
                                <Link
                                    href="/service-detail"
                                    className="relative start-0 text-base font-semibold text-yellow duration-300 hover:start-2 hover:text-secondary dark:hover:text-white"
                                >
                                    Learn more....
                                </Link>
                            </div>
                        </div>
                    </div>

                    <AchievementSlider />

                    <div className="relative mx-auto grid max-w-[1142px] grid-cols-2 gap-x-4 gap-y-10 px-4 py-16 text-center text-base font-medium md:grid-cols-4 lg:py-48 lg:text-22">
                        <span className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 text-purple-300 dark:text-purple-800 lg:block">
                            <svg width="100%" height="256" viewBox="0 0 1108 256" fill="none">
                                <path
                                    d="M2 85V134C2 200.274 55.7258 254 122 254H158C224.274 254 278 200.274 278 134V122C278 55.7258 331.726 2 398 2H434C500.274 2 554 55.7258 554 122V134C554 200.274 607.726 254 674 254H710C776.274 254 830 200.274 830 134V122C830 55.7258 883.726 2 950 2H986C1052.27 2 1106 55.7258 1106 122V173"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <div className="space-y-3 md:space-y-5">
                            <h3 className="text-3xl font-extrabold text-purple-700 dark:text-white md:text-[40px]/9">
                                <CountsUp start={0} end={4} duration={2} delay={1} suffix="k" />
                            </h3>
                            <div>Jobs completed</div>
                        </div>
                        <div className="space-y-3 md:space-y-5">
                            <h3 className="text-3xl font-extrabold text-purple-700 dark:text-white md:text-[40px]/9">
                                <CountsUp start={0} end={15} duration={3} delay={1} suffix="+" />
                            </h3>
                            <div>Industry experience</div>
                        </div>
                        <div className="space-y-3 md:space-y-5">
                            <h3 className="text-3xl font-extrabold text-purple-700 dark:text-white md:text-[40px]/9">
                                <CountsUp start={0} end={3} duration={2} delay={1} suffix="k" />
                            </h3>
                            <div>Global client</div>
                        </div>
                        <div className="space-y-3 md:space-y-5">
                            <h3 className="text-3xl font-extrabold text-purple-700 dark:text-white md:text-[40px]/9">
                                <CountsUp start={0} end={130} duration={3} delay={1} suffix="+" />
                            </h3>
                            <div>Awards winning</div>
                        </div>
                    </div>

                    <div className="rounded-2xl border-2 border-[#9199B51F] bg-white px-5 py-12 shadow-[0px_0px_80px_rgba(119,128,161,0.1)] dark:bg-transparent dark:shadow-none">
                        <div className="mx-auto pb-16 text-center lg:w-2/3">
                            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Meet our Genius battler</h2>
                            <p className="text-lg md:text-xl">We picked best specialists that are suited just for you.</p>
                        </div>

                        <div className="mx-auto flex max-w-[1225px] flex-wrap justify-center gap-x-24 gap-y-8 text-center">
                            <div className="group">
                                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full grayscale duration-300 group-hover:grayscale-0">
                                    <Image
                                        src="/assets/images/testimonial-user-1.svg"
                                        alt="Testimonial image"
                                        className="h-full w-full object-cover"
                                        width={144}
                                        height={144}
                                    />
                                </div>
                                <div className="mt-5 space-y-5">
                                    <h3 className="mb-1 text-xl font-semibold text-secondary dark:text-white">Lucy Liu</h3>
                                    <span className="font-medium">Developer</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full grayscale duration-300 group-hover:grayscale-0">
                                    <Image
                                        src="/assets/images/testimonial-user-2.svg"
                                        alt="Testimonial image"
                                        className="h-full w-full object-cover"
                                        width={144}
                                        height={144}
                                    />
                                </div>
                                <div className="mt-5 space-y-5">
                                    <h3 className="mb-1 text-xl font-semibold text-secondary dark:text-white">Sylvester Stallone</h3>
                                    <span className="font-medium">Designer</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full grayscale duration-300 group-hover:grayscale-0">
                                    <Image
                                        src="/assets/images/testimonial-user-3.svg"
                                        alt="Testimonial image"
                                        className="h-full w-full object-cover"
                                        width={144}
                                        height={144}
                                    />
                                </div>
                                <div className="mt-5 space-y-5">
                                    <h3 className="mb-1 text-xl font-semibold text-secondary dark:text-white">Joni Mitchell</h3>
                                    <span className="font-medium">UI Lead</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full grayscale duration-300 group-hover:grayscale-0">
                                    <Image
                                        src="/assets/images/testimonial-user-4.svg"
                                        alt="Testimonial image"
                                        className="h-full w-full object-cover"
                                        width={144}
                                        height={144}
                                    />
                                </div>
                                <div className="mt-5 space-y-5">
                                    <h3 className="mb-1 text-xl font-semibold text-secondary dark:text-white">Joni Mitchell</h3>
                                    <span className="font-medium">Web Designer</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full grayscale duration-300 group-hover:grayscale-0">
                                    <Image
                                        src="/assets/images/testimonial-user-5.svg"
                                        alt="Testimonial image"
                                        className="h-full w-full object-cover"
                                        width={144}
                                        height={144}
                                    />
                                </div>
                                <div className="mt-5 space-y-5">
                                    <h3 className="mb-1 text-xl font-semibold text-secondary dark:text-white">David Bowie</h3>
                                    <span className="font-medium">Developer</span>
                                </div>
                            </div>
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
