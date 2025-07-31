import Image from 'next/image';
import Link from 'next/link';
import HomepageLogoSlider from '@/components/HomepageLogoSlider';
import ServiceCard from '@/components/ServiceCard';
import PricingChartOfPlan from '@/components/PricingChartOfPlan';
import FAQuestions from '@/components/FAQuestions';
import TestimonialSlider from '@/components/TestimonialSlider';
import NewsLetter from '@/components/NewsLetter';
import RightArrowIcon from '@/components/Icons/RightArrowIcon';
import CountsUp from '@/components/CountsUp';
import { Metadata } from 'next';
import helper from '@/libs/helper';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Home | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Home | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Home | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}` },
    },
};

export default function Home() {
    return (
        <>
            <div className="overflow-x-hidden">
                <div className="relative mx-auto max-w-[1142px] px-4">
                    <Image
                        src="/assets/images/hero-banner-users.svg"
                        alt="Banner users"
                        className="absolute -right-28 top-0 hidden w-52 lg:block xl:-right-96 xl:top-11 xl:w-96"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        width={384}
                        height={402}
                    />
                    <div className="absolute -left-96 top-36 hidden lg:block">
                        <span className="absolute right-0 top-0 z-1 inline-flex rounded-full bg-secondary p-2 dark:bg-purple-700">
                            <Image src="/assets/images/hero-banner-space-circle.svg" alt="Space circle" width={118} height={118} />
                        </span>
                        <Image
                            src="/assets/images/hero-banner-space-img-2.svg"
                            alt="Banner space image"
                            className="relative right-0 top-20"
                            width={574}
                            height={264}
                        />
                    </div>
                    <div className="relative mx-auto pt-32 text-center md:pt-40 lg:max-w-[965px]">
                        <Image
                            src="/assets/images/banner-bg-shape.png"
                            alt="Banner shape"
                            className="absolute bottom-14 left-1/2 -translate-x-1/2"
                            width={608}
                            height={319}
                        />
                        <div className="relative mb-8 md:mb-12">
                            <button
                                type="button"
                                className="absolute -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#806BFF26] px-4 py-3 font-semibold text-primary duration-300 hover:bg-primary hover:text-white md:-top-24 md:left-[9%] md:translate-x-0 lg:left-[15%]"
                            >
                                <span>evsolutions marketing</span>
                            </button>
                            <Image
                                src="/assets/images/hero-banner-longarrow.svg"
                                alt="Banner arrow"
                                className="absolute -bottom-6 left-[37%] hidden md:block"
                                width={190}
                                height={264}
                            />
                            <div
                                className="text-4xl font-extrabold leading-tight! text-purple-700 dark:text-white md:text-7xl lg:px-24"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <h1 className="relative inline-block">
                                    We are skilled in
                                    <Image
                                        src="/assets/images/banner-lady.svg"
                                        alt="Banner girl"
                                        className="absolute left-full top-0 pl-3"
                                        width={106}
                                        height={118}
                                    />
                                    digital marketing
                                </h1>
                            </div>
                        </div>
                        <p className="relative mb-10 dark:text-purple-300 md:text-22">
                            “You&apos;ve got a business, we have got brilliant minds. We impact your brand for you, hassle free.”
                        </p>
                        <Link href="/contact-us" target="_blank" className="btn inline-flex">
                            Talk to sale
                        </Link>
                    </div>
                </div>
                <div className="py-16 lg:pb-44 lg:pt-40">
                    <div className="relative mx-auto grid max-w-[1142px] grid-cols-2 gap-x-4 gap-y-10 px-4 text-center text-base font-medium md:grid-cols-4 lg:text-22">
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
                </div>
            </div>

            <div className="relative overflow-x-hidden py-7">
                <div className="absolute left-1/2 h-28 w-[110%] -translate-x-1/2 rotate-[-1.5deg] bg-primary"></div>
                <div className="relative bg-secondary px-4 py-9 dark:bg-purple-900">
                    <HomepageLogoSlider />
                </div>
            </div>

            <div className="relative overflow-x-hidden py-16 lg:pb-28 lg:pt-36">
                <Image
                    src="/assets/images/high-impact-bg.svg"
                    alt="image"
                    className="absolute left-[5%] top-12 lg:left-1/4 lg:top-28"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    width={1424}
                    height={211}
                />
                <div className="mx-auto max-w-[1142px] px-4">
                    <div className="mx-auto pb-10 text-center lg:w-2/3 lg:pb-16">
                        <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">High impact services to improve your business</h2>
                        <p className="text-lg md:text-xl">
                            Our team has a successful track record of helping brands scale profitably based on high-performing strategies.
                        </p>
                    </div>
                    <div className="relative grid items-start gap-4 text-center leading-6 sm:grid-cols-2 md:gap-x-[30px] md:gap-y-12 lg:grid-cols-3">
                        <Image
                            src="/assets/images/high-impact-round.svg"
                            alt="image"
                            className="absolute -right-24 top-0 animate-spin"
                            width={194}
                            height={194}
                        />
                        <span className="absolute -bottom-10 -left-1/2 md:-left-1/3 md:bottom-0" data-aos="fade-right" data-aos-duration="1000">
                            <svg width="497" height="166" viewBox="0 0 497 166" fill="none">
                                <path
                                    opacity="0.2"
                                    d="M0 164H464.69C481.259 164 494.69 150.569 494.69 134V2"
                                    stroke="url(#paint0_radial_112_223)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_112_223"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(485.5 164) rotate(180) scale(356.5 163.113)"
                                    >
                                        <stop stopColor="#806BFF" />
                                        <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </span>
                        <ServiceCard
                            className="shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-lg"
                            serviceImageSrc="/assets/images/website-optimization.svg"
                            serviceTitle="Website Optimization"
                            serviceDescription=" In order for your funnel to be successful, you need to make it as smooth as possible. "
                            lineBgColor="bg-green"
                            color="green"
                            bgColor="bg-green/20"
                        />
                        <ServiceCard
                            className="shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-lg md:mt-10"
                            serviceImageSrc="/assets/images/paid-media.svg"
                            serviceTitle="Paid Media"
                            serviceDescription="Increasing conversions, repeat traffic, and online authority across your website is our top priority."
                            lineBgColor="bg-purple"
                            color="purple"
                            bgColor="bg-purple/20"
                        />
                        <ServiceCard
                            className="shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-lg md:-mt-10 lg:mt-20"
                            serviceImageSrc="/assets/images/email-sms-marketing.svg"
                            serviceTitle="Email & SMS Marketing"
                            serviceDescription="Leads are nurtured through our email, SMS, and automation services, resulting in customer"
                            lineBgColor="bg-red"
                            color="red"
                            bgColor="bg-red/20"
                        />
                        <ServiceCard
                            className="shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-lg md:mt-0 lg:-mt-20"
                            serviceImageSrc="/assets/images/funnel-optimization.svg"
                            serviceTitle="Funnel Optimization"
                            serviceDescription="Real-time analytics is the discipline that applies logic and mathematics to data...."
                            lineBgColor="bg-pink"
                            color="pink"
                            bgColor="bg-pink/20"
                        />
                        <ServiceCard
                            className="shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-lg md:-mt-10"
                            serviceImageSrc="/assets/images/advanced-analytics.svg"
                            serviceTitle="Advanced Analytics"
                            serviceDescription="Let's take a deeper look into what report automation is, why your agency should automate its.."
                            lineBgColor="bg-yellow"
                            color="yellow"
                            bgColor="bg-yellow/20"
                        />
                        <div className="relative rounded-lg bg-secondary px-4 py-10 dark:bg-primary md:px-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                                <Image src="/assets/images/all-services.svg" alt="image" width={56} height={56} />
                            </div>
                            <h4 className="pb-6 pt-10 text-22 font-semibold text-white">Browse all service</h4>
                            <p className="mb-11 line-clamp-3 font-light text-purple-400">
                                Find a team of digital marketers you can rely on. Every day, we build trust through ...
                            </p>
                            <Link
                                href="/service-list"
                                className="btn inline-flex bg-white text-primary hover:bg-primary hover:text-white dark:hover:bg-secondary"
                            >
                                Browse service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-hidden">
                <div className="mx-auto max-w-[1142px] px-4">
                    <div className="relative mx-auto pb-10 text-center lg:w-2/3 lg:pb-14">
                        <Image src="/assets/images/pink-star.svg" alt="Pink star" className="absolute -right-24 top-10" width={32} height={32} />
                        <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Make your marketing more effective</h2>
                        <p className="text-lg md:text-xl">
                            E-commerce brands can acquire and retain new customers using solutions that span the entire customer journey.
                        </p>
                    </div>
                    <div className="relative flex grid-cols-3 flex-col gap-[30px] lg:grid">
                        <span className="absolute -top-14 right-full" data-aos="fade-up-left" data-aos-duration="1000">
                            <svg width="144" height="61" viewBox="0 0 144 61" fill="none">
                                <path
                                    opacity="0.3"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M143.669 56.7802C143.517 56.096 142.839 55.6647 142.154 55.8167C102.832 64.555 73.5893 49.184 66.834 27.4292C70.9798 26.3058 74.8366 24.5663 77.8865 22.0012C81.8467 18.6706 84.3828 13.9965 84.454 7.70868C84.495 4.08308 81.2848 1.03613 77.5491 1.90523C67.4494 4.25488 61.2828 15.2435 63.6806 25.5707C63.3903 25.6305 63.0984 25.6876 62.8051 25.742C49.374 27.7196 38.5879 25.7366 29.0415 21.1425C20.2651 16.919 12.4823 10.4634 4.62742 2.70948L12.957 2.76647C13.6578 2.77126 14.2299 2.20699 14.2347 1.50612C14.2395 0.805266 13.6752 0.23321 12.9743 0.228414L1.55308 0.150267C0.852227 0.145482 0.280179 0.709761 0.275378 1.41062L0.197236 12.8319C0.192435 13.5327 0.756717 14.1048 1.45758 14.1096C2.15845 14.1144 2.73049 13.5501 2.7353 12.8492L2.79265 4.46481C10.7456 12.3215 18.7798 19.0209 27.9409 23.4296C37.964 28.2531 49.271 30.3045 63.1986 28.2496L63.2216 28.2462L63.2445 28.2419C63.6177 28.1728 63.9898 28.0995 64.3604 28.0217C71.5632 51.6528 102.637 67.1985 142.705 58.2944C143.389 58.1423 143.821 57.4644 143.669 56.7802ZM66.1499 24.985C64.0406 15.8938 69.5314 6.3764 78.1242 4.37732C80.0557 3.92797 81.9408 5.48736 81.916 7.67994C81.8534 13.2063 79.6646 17.1893 76.2529 20.0587C73.5538 22.3287 70.0515 23.9301 66.1499 24.985Z"
                                    fill="url(#paint0_linear_121_108)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_121_108"
                                        x1="136.201"
                                        y1="59.8017"
                                        x2="1.58355"
                                        y2="8.50293"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#7780A1" stopOpacity="0" />
                                        <stop offset="0.0001" stopColor="#1A1036" stopOpacity="0" />
                                        <stop offset="1" stopColor="#1A1036" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="absolute bottom-0 left-[85%]" data-aos="fade-left" data-aos-duration="1000">
                            <svg width="572" height="583" viewBox="0 0 572 583" fill="none">
                                <path
                                    opacity="0.2"
                                    d="M2 150H323.69C340.259 150 353.69 136.569 353.69 120V32C353.69 15.4315 367.122 2 383.69 2H570"
                                    stroke="url(#paint0_radial_67_199)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    opacity="0.2"
                                    d="M2 433H323.69C340.259 433 353.69 446.431 353.69 463V551C353.69 567.569 367.122 581 383.69 581H570"
                                    stroke="url(#paint1_radial_67_199)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_67_199"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(339.5 150) rotate(-180) scale(337.5 189.41)"
                                    >
                                        <stop stopColor="#806BFF" />
                                        <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                                    </radialGradient>
                                    <radialGradient
                                        id="paint1_radial_67_199"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(339.5 433) rotate(180) scale(337.5 189.41)"
                                    >
                                        <stop stopColor="#806BFF" />
                                        <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </span>
                        <div className="relative inline-flex flex-col justify-between gap-10 rounded-lg bg-green px-4 pt-10 leading-6 text-white sm:px-7">
                            <div>
                                <h3 className="mb-6 text-22 font-semibold">Marketing Automation</h3>
                                <p>Our team has a successful track record of helping brands.</p>
                                <a href="#" className="group mt-10 inline-flex items-center gap-2.5 font-semibold">
                                    <span>Learn more</span>
                                    <span className="relative start-0 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-white/40 to-50% duration-300 group-hover:start-1 rtl:rotate-180">
                                        <RightArrowIcon />
                                    </span>
                                </a>
                            </div>
                            <div className="overflow-hidden rounded-t-lg lg:h-48">
                                <Image
                                    src="/assets/images/marketing-automation.jpg"
                                    alt="image"
                                    className="h-full w-full object-cover"
                                    width={294}
                                    height={192}
                                />
                            </div>
                        </div>
                        <div className="relative col-span-2 inline-flex flex-col justify-between gap-10 rounded-lg bg-primary px-4 pt-10 leading-6 text-white sm:px-7">
                            <div>
                                <h3 className="mb-6 text-22 font-semibold">Content Marketing</h3>
                                <p>
                                    Our team has a successful track record of helping brands scale profitably based on high-performing strategies. E-commerce
                                    brands can acquire and retain new customers using solutions that span the entire customer journey.
                                </p>
                                <a href="#" className="group mt-10 inline-flex items-center gap-2.5 font-semibold">
                                    <span>Learn more</span>
                                    <span className="relative start-0 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-white/40 to-50% duration-300 group-hover:start-1 rtl:rotate-180">
                                        <RightArrowIcon />
                                    </span>
                                </a>
                            </div>
                            <div className="overflow-hidden rounded-t-lg lg:h-40">
                                <Image src="/assets/images/content-marketing.jpg" alt="image" className="h-full w-full object-cover" width={674} height={160} />
                            </div>
                        </div>
                        <div className="relative col-span-3 inline-flex flex-col justify-between gap-10 rounded-lg bg-yellow px-4 pt-10 leading-6 text-secondary sm:px-7 lg:flex-row lg:gap-7">
                            <div>
                                <h3 className="mb-6 text-22 font-semibold">Social Media Marketing</h3>
                                <p>Leads are nurtured through our email, SMS, and automation services, resulting in customer acquisition and retention.</p>
                                <a href="#" className="group mt-10 inline-flex items-center gap-2.5 font-semibold">
                                    <span>Learn more</span>
                                    <span className="relative start-0 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-secondary/40 to-50% duration-300 group-hover:start-1 rtl:rotate-180">
                                        <RightArrowIcon />
                                    </span>
                                </a>
                            </div>
                            <div className="w-full overflow-hidden rounded-t-lg lg:h-56 lg:max-w-lg">
                                <Image
                                    src="/assets/images/social-media-marketing.jpg"
                                    alt="image"
                                    className="h-full w-full object-cover"
                                    width={512}
                                    height={224}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-hidden pt-16 lg:pt-36">
                <div className="mx-auto flex max-w-[1142px] flex-col items-center gap-5 px-4 md:flex-row">
                    <div className="shrink-0 md:w-3/5">
                        <div className="pb-10 text-center md:ltr:text-left md:rtl:text-right lg:w-2/3 lg:pb-14">
                            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Our process</h2>
                            <p className="text-lg md:text-xl">A simple, yet powerful and efficient process</p>
                        </div>
                        <div className="space-y-6 leading-6 md:space-y-10">
                            <div className="group rounded-lg bg-linear-to-b to-transparent p-4 hover:from-primary/[0.16]">
                                <h3 className="pb-4 text-22 font-semibold text-purple-700 duration-300 group-hover:text-primary dark:text-white">
                                    1. Marketing Plan
                                </h3>
                                <p>Strategies include SEO optimization, social media campaigns, and email marketing. Tactics include content creation.</p>
                            </div>
                            <div className="group rounded-lg bg-linear-to-b to-transparent p-4 hover:from-primary/[0.16]">
                                <h3 className="pb-4 text-22 font-semibold text-purple-700 duration-300 group-hover:text-primary dark:text-white">
                                    2. Execution
                                </h3>

                                <p>
                                    execution involves implementing and managing marketing strategies and tactics, such as advertising campaigns, content
                                    creation.
                                </p>
                            </div>
                            <div className="group rounded-lg bg-linear-to-b to-transparent p-4 hover:from-primary/[0.16]">
                                <h3 className="pb-4 text-22 font-semibold text-purple-700 duration-300 group-hover:text-primary dark:text-white">
                                    3. Growth & Scale
                                </h3>
                                <p>
                                    This involves leveraging various digital marketing strategies, such as SEO, PPC advertising, content marketing, and email
                                    marketing.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:-me-[19%] xl:ms-14" data-aos="fade-left" data-aos-duration="1000">
                        <Image src="/assets/images/our-process.png" alt="Process image" className="h-full w-full object-cover" width={579} height={551} />
                    </div>
                </div>
            </div>

            <div className="overflow-x-hidden py-16 lg:pb-44 lg:pt-32">
                <div className="relative mx-auto max-w-[1142px] gap-5 px-4 lg:flex">
                    <Image
                        src="/assets/images/why-choose-bg.svg"
                        alt="Why choose bg"
                        className="absolute right-0 top-0 xl:-right-44 xl:-top-12"
                        width={917}
                        height={99}
                    />
                    <div className="relative mx-auto shrink-0 sm:w-1/2 lg:mx-0">
                        <span className="absolute end-1/3 top-1/4 hidden lg:block" data-aos="fade-right" data-aos-duration="2000">
                            <svg width="811" height="441" viewBox="0 0 811 441" fill="none">
                                <path
                                    opacity="0.2"
                                    d="M2 150H323.69C340.259 150 353.69 136.569 353.69 120V32C353.69 15.4315 367.122 2 383.69 2H808.5"
                                    stroke="url(#paint0_radial_69_208)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    opacity="0.2"
                                    d="M135 439L545.5 439L676 439L779 439C795.569 439 809 425.569 809 409L809 2.50003"
                                    stroke="url(#paint1_radial_69_208)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_69_208"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(429.5 -10.5) rotate(159.422) scale(456.636 382.773)"
                                    >
                                        <stop stopColor="#806BFF" />
                                        <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                                    </radialGradient>
                                    <radialGradient
                                        id="paint1_radial_69_208"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(749 355.5) rotate(170.679) scale(414.979 404.919)"
                                    >
                                        <stop stopColor="#806BFF" />
                                        <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </span>
                        <div className="relative w-1/2 overflow-hidden rounded-lg" data-aos="fade-right" data-aos-duration="1000">
                            <Image
                                src="/assets/images/advance-tracking.jpg"
                                alt="Advance tracking"
                                className="h-full w-full object-cover"
                                width={278}
                                height={259}
                            />
                        </div>
                        <div className="relative ms-auto w-1/2 overflow-hidden rounded-lg lg:-mt-10 lg:me-10" data-aos="fade-right" data-aos-duration="1000">
                            <Image
                                src="/assets/images/depth-monitoring.jpg"
                                alt="Depth monitoring"
                                className="h-full w-full object-cover"
                                width={278}
                                height={259}
                            />
                        </div>
                    </div>
                    <div className="relative mt-8">
                        <div className="pb-10 text-center lg:pb-14 lg:ltr:text-left lg:rtl:text-right">
                            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Why choose us</h2>
                            <p className="text-lg md:text-xl">We help great brands scale with content marketing.</p>
                        </div>
                        <div className="space-y-12 pb-10 lg:pb-16">
                            <div className="flex gap-4 leading-6 md:gap-8">
                                <span className="shrink-0">
                                    <Image src="/assets/images/advance-tracking-icon.svg" alt="Advance tracking icon" width={48} height={49} />
                                </span>
                                <div>
                                    <h3 className="pb-4 text-xl font-semibold text-purple-700 dark:text-white md:text-22">Advanced tracking</h3>
                                    <p>Use our analytics, reporting, and AI-assisted optimization tools to monitor trends, track.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 leading-6 md:gap-8">
                                <span className="shrink-0">
                                    <Image src="/assets/images/depth-monitoring-icon.svg" alt="Depth monitoring icon" width={48} height={49} />
                                </span>
                                <div>
                                    <h3 className="pb-4 text-xl font-semibold text-purple-700 dark:text-white md:text-22">In - depth monitoring</h3>
                                    <p>Time Tracking is never been easier. Just let the stopwatch run.</p>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex text-center lg:ltr:text-left lg:rtl:text-right">
                            <Link href="/about-us" className="btn">
                                About us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-16 lg:pb-36">
                <PricingChartOfPlan />
            </div>

            <div className="overflow-x-hidden pb-16 lg:pb-36">
                <div className="relative mx-auto max-w-[1142px] grid-cols-3 gap-4 px-4 lg:grid">
                    <Image
                        src="/assets/images/faq-bg-shape.svg"
                        alt="Faq bg shape"
                        className="absolute -left-60 top-0 lg:-left-96 lg:top-72"
                        width={560}
                        height={178}
                    />
                    <div className="mb-4 inline-block w-full text-center lg:mb-0 lg:pe-12 lg:ltr:text-left lg:rtl:text-right">
                        <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">FAQ ?</h2>
                        <p className="text-xl">Have any quotations? we are help you.</p>
                        <Link href="/faq" className="group mt-8 inline-flex items-center gap-2.5 font-semibold text-primary lg:mt-10">
                            <span>Learn more</span>
                            <span className="relative start-0 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-transparent from-50% to-primary/40 to-50% duration-300 group-hover:start-1 rtl:rotate-180">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                                    <path
                                        d="M12.9 3.53991L10.06 0.689912C9.77 0.399912 9.29 0.399912 9 0.689912C8.71 0.979912 8.71 1.45991 9 1.74991L10.56 3.30991H0.989998C0.579998 3.30991 0.239998 3.64991 0.239998 4.05991C0.239998 4.46991 0.579998 4.80991 0.989998 4.80991H10.56L9 6.37991C8.71 6.66991 8.71 7.14991 9 7.43991C9.15 7.58991 9.34 7.65991 9.53 7.65991C9.72 7.65991 9.91 7.58991 10.06 7.43991L12.9 4.58991C13.2 4.29991 13.2 3.82991 12.9 3.53991Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                        </Link>
                    </div>
                    <div className="col-span-2 mt-10 lg:mt-0">
                        <FAQuestions />
                    </div>
                </div>
            </div>

            <div className="pb-16 lg:pb-28">
                <TestimonialSlider />
            </div>

            <NewsLetter />

            <Script id="home-faq-json-ld" type="application/ld+json">
                {`{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [{
                      "@type": "Question",
                      "name": "Do you offer a free trial?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                      }
                    },
                    {
                        "@type": "Question",
                        "name": "How do i create an account?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What protections does your system use to protect our data?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Data protection strategies typically involve multi-step processes that define how security measures are implemented and maintained."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What type of support is included with this service?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Do you have premium plans for products?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Who else is using nobble tool?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }
                      }]
                }`}
            </Script>
        </>
    );
}
