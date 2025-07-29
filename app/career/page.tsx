import BlogNewsCard from '@/components/BlogNewsCard';
import NewsLetter from '@/components/NewsLetter';
import OpenPosition from '@/components/OpenPosition';
import PositionSlider from '@/components/PositionSlider';
import Image from 'next/image';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import { env } from '../../env';

export const metadata: Metadata = {
    title: 'Career | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Career | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: env.NEXT_PUBLIC_APP_URL + '/career',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Career | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${env.NEXT_PUBLIC_APP_URL}/career`,
        languages: { 'x-default': `${env.NEXT_PUBLIC_APP_URL}/career` },
    },
};

const page = () => {
    const blogs = [
        {
            id: 1,
            src: '/assets/images/blog-1.jpg',
            type: 'Design',
            date: 'January 01, 2023',
            title: '10 Reasons to invest in SEO copywriting services',
            description: 'Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.',
        },
        {
            id: 2,
            src: '/assets/images/blog-2.jpg',
            type: 'Design',
            date: 'January 01, 2023',
            title: '10 Reasons to invest in SEO copywriting services',
            description: 'Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.',
        },
    ];

    return (
        <>
            <div className="overflow-x-hidden pb-14 lg:pb-24">
                <div className="relative px-4 py-14 text-center lg:pb-40">
                    <div className="relative mx-auto max-w-4xl">
                        <Image
                            src="/assets/images/hero-users.png"
                            alt="Hero banner user"
                            className="absolute -start-24 top-0 hidden rtl:rotate-y-180 lg:inline-block"
                            width={361}
                            height={367}
                        />
                        <Image
                            src="/assets/images/hero-design.png"
                            alt="Hero design"
                            className="absolute -end-52 top-1/2 -translate-y-1/2 rtl:rotate-y-180"
                            width={384}
                            height={160}
                        />
                        <button
                            type="button"
                            className="absolute -end-16 top-0 z-1 hidden whitespace-nowrap rounded-lg bg-[#806BFF26] px-4 py-2 font-semibold text-primary duration-300 hover:bg-primary hover:text-white lg:inline-flex"
                        >
                            <span>Career - job</span>
                        </button>
                        <h1
                            className="relative mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white md:mb-8 lg:px-10 lg:text-[56px]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <span className="relative z-1">Find your dream role and elevate your career with us.</span>
                            <Image
                                src="/assets/images/hero-pink-arrow.svg"
                                alt="Pink arrow"
                                className="absolute -top-10 end-[12%] hidden rtl:rotate-y-180 lg:inline-flex"
                                width={310}
                                height={210}
                            />
                        </h1>
                        <p className="text-lg md:text-22 xl:px-10">{"Pursue your passion and achieve your career goals with our team's support."}</p>
                        <div className="relative mt-12 inline-flex">
                            <a href="#open-position" className="btn">
                                Open positions
                            </a>
                            <div className="absolute -bottom-14 -end-20 sm:-end-28" data-aos="fade-up-left" data-aos-duration="1000">
                                <span className="absolute -start-5 -top-6 rtl:rotate-y-180">
                                    <svg width="21" height="25" viewBox="0 0 21 25" fill="none">
                                        <path
                                            d="M4.99523 21.1143L5.41617 23.0343L6.39834 21.5257L10.4674 14.8057L17.9038 12.8857L19.4473 12.4743L18.0442 11.6514L2.60995 2.73715L1.20683 1.91429L1.48745 3.28572L4.99523 21.1143Z"
                                            fill="#31D2AC"
                                            stroke="white"
                                            strokeLinecap="square"
                                        />
                                    </svg>
                                </span>
                                <span className="bg-green px-2 py-1 text-base font-medium text-white">Designer</span>
                            </div>
                        </div>
                    </div>
                </div>

                <PositionSlider />

                <div className="container">
                    <OpenPosition />
                    <div className="py-16 lg:pb-20 lg:pt-24">
                        <div className="mx-auto pb-14 text-center lg:w-2/3 lg:pb-20">
                            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Perks at NOBBLE</h2>
                            <p className="text-lg md:text-xl">Great benefits of working at NOBBLE</p>
                        </div>
                        <div className="grid gap-7 text-base sm:grid-cols-2 lg:grid-cols-3">
                            <div className="relative bottom-0 rounded-2xl border-2 border-purple-300/50 bg-white px-5 py-4 text-center shadow-xs duration-300 hover:bottom-2 hover:border-green dark:border-purple-800 dark:bg-purple-900">
                                <div className="inline-block h-16 w-16">
                                    <Image src="/assets/images/plan.svg" alt="Plane" className="h-full w-full object-cover" width={64} height={64} />
                                </div>
                                <h3 className="mb-3 mt-4 text-xl font-bold text-purple-700 dark:text-white">Unlimited PTO</h3>
                                <p className="line-clamp-3">We create functional and intuitive interfaces for all.</p>
                            </div>
                            <div className="relative bottom-0 rounded-2xl border-2 border-purple-300/50 bg-white px-5 py-4 text-center shadow-xs duration-300 hover:bottom-2 hover:border-purple dark:border-purple-800 dark:bg-purple-900">
                                <div className="inline-block h-16 w-16">
                                    <Image src="/assets/images/sun.svg" alt="sun" className="h-full w-full object-cover" width={64} height={64} />
                                </div>
                                <h3 className="mb-3 mt-4 text-xl font-bold text-purple-700 dark:text-white">Mindful Personal Guidance</h3>
                                <p className="line-clamp-3">We create functional and intuitive interfaces for all.</p>
                            </div>
                            <div className="relative bottom-0 rounded-2xl border-2 border-purple-300/50 bg-white px-5 py-4 text-center shadow-xs duration-300 hover:bottom-2 hover:border-pink dark:border-purple-800 dark:bg-purple-900">
                                <div className="inline-block h-16 w-16">
                                    <Image src="/assets/images/feedback.svg" alt="Feedback" className="h-full w-full object-cover" width={64} height={64} />
                                </div>
                                <h3 className="mb-3 mt-4 text-xl font-bold text-purple-700 dark:text-white">Constructive Feedback</h3>
                                <p className="line-clamp-3">We create functional and intuitive interfaces for all.</p>
                            </div>
                            <div className="relative bottom-0 rounded-2xl border-2 border-purple-300/50 bg-white px-5 py-4 text-center shadow-xs duration-300 hover:bottom-2 hover:border-yellow dark:border-purple-800 dark:bg-purple-900">
                                <div className="inline-block h-16 w-16">
                                    <Image src="/assets/images/like.svg" alt="Like" className="h-full w-full object-cover" width={64} height={64} />
                                </div>
                                <h3 className="mb-3 mt-4 text-xl font-bold text-purple-700 dark:text-white">Innovation & Quality First</h3>
                                <p className="line-clamp-3">We create functional and intuitive interfaces for all.</p>
                            </div>
                            <div className="relative bottom-0 rounded-2xl border-2 border-purple-300/50 bg-white px-5 py-4 text-center shadow-xs duration-300 hover:bottom-2 hover:border-red dark:border-purple-800 dark:bg-purple-900">
                                <div className="inline-block h-16 w-16">
                                    <Image src="/assets/images/monitor.svg" alt="Monitor" className="h-full w-full object-cover" width={64} height={64} />
                                </div>
                                <h3 className="mb-3 mt-4 text-xl font-bold text-purple-700 dark:text-white">Work with Latest Technology</h3>
                                <p className="line-clamp-3">We create functional and intuitive interfaces for all.</p>
                            </div>
                            <div className="relative bottom-0 rounded-2xl border-2 border-purple-300/50 bg-white px-5 py-4 text-center shadow-xs duration-300 hover:bottom-2 hover:border-blue dark:border-purple-800 dark:bg-purple-900">
                                <div className="inline-block h-16 w-16">
                                    <Image src="/assets/images/global.svg" alt="Global" className="h-full w-full object-cover" width={64} height={64} />
                                </div>
                                <h3 className="mb-3 mt-4 text-xl font-bold text-purple-700 dark:text-white">Best & Global Opportunities</h3>
                                <p className="line-clamp-3">We create functional and intuitive interfaces for all.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative mx-auto pb-14 text-center lg:w-2/3 lg:pb-16">
                            <Image
                                src="/assets/images/blue-star.svg"
                                alt="Blue star"
                                className="absolute hidden md:block lg:bottom-12 lg:start-12"
                                width={62}
                                height={61}
                            />
                            <Image src="/assets/images/purple-star.svg" alt="Image" className="absolute end-0 top-0 hidden md:block" width={32} height={32} />
                            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">What Our Employees Say</h2>
                            <p className="text-lg md:text-xl">All important business news in one place</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 md:gap-7">
                            <div className="group relative lg:h-72">
                                <Image
                                    src="/assets/images/client-1.jpg"
                                    alt="Client image"
                                    className="h-full w-full rounded-2xl object-cover grayscale duration-300 hover:grayscale-0"
                                    width={285}
                                    height={288}
                                />
                                <span className="absolute left-1/2 top-[calc(100%+15px)] z-1 hidden w-48 -translate-x-1/2 rounded-lg bg-purple-700 px-2 py-1 text-center text-sm text-white before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-x-transparent before:border-b-purple-700 before:border-t-transparent before:content-[''] group-hover:flex">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar diam eget ligula gravida pharetra. Nam ullamcorper
                                    arcu quis varius volutpat.
                                </span>
                            </div>
                            <div className="group relative lg:h-72">
                                <Image
                                    src="/assets/images/client-2.jpg"
                                    alt="Client image"
                                    className="h-full w-full rounded-2xl object-cover grayscale duration-300 hover:grayscale-0"
                                    width={285}
                                    height={288}
                                />
                                <span className="absolute left-1/2 top-[calc(100%+15px)] z-1 hidden w-48 -translate-x-1/2 rounded-lg bg-purple-700 px-2 py-1 text-center text-sm text-white before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-x-transparent before:border-b-purple-700 before:border-t-transparent before:content-[''] group-hover:flex">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </span>
                            </div>
                            <div className="group relative lg:h-72">
                                <Image
                                    src="/assets/images/client-3.jpg"
                                    alt="Client image"
                                    className="h-full w-full rounded-2xl object-cover grayscale duration-300 hover:grayscale-0"
                                    width={285}
                                    height={288}
                                />
                                <span className="absolute left-1/2 top-[calc(100%+15px)] z-1 hidden w-48 -translate-x-1/2 rounded-lg bg-purple-700 px-2 py-1 text-center text-sm text-white before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-x-transparent before:border-b-purple-700 before:border-t-transparent before:content-[''] group-hover:flex">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </span>
                            </div>
                            <div className="group relative lg:h-72">
                                <Image
                                    src="/assets/images/client-4.jpg"
                                    alt="Client image"
                                    className="h-full w-full rounded-2xl object-cover grayscale duration-300 hover:grayscale-0"
                                    width={285}
                                    height={288}
                                />
                                <span className="absolute left-1/2 top-[calc(100%+15px)] z-1 hidden w-48 -translate-x-1/2 rounded-lg bg-purple-700 px-2 py-1 text-center text-sm text-white before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-x-transparent before:border-b-purple-700 before:border-t-transparent before:content-[''] group-hover:flex">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar. Nam ullamcorper arcu quis varius volutpat.
                                </span>
                            </div>
                            <div className="group relative lg:h-72">
                                <Image
                                    src="/assets/images/client-5.jpg"
                                    alt="Client image"
                                    className="h-full w-full rounded-2xl object-cover grayscale duration-300 hover:grayscale-0"
                                    width={285}
                                    height={288}
                                />
                                <span className="absolute left-1/2 top-[calc(100%+15px)] z-1 hidden w-48 -translate-x-1/2 rounded-lg bg-purple-700 px-2 py-1 text-center text-sm text-white before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-x-transparent before:border-b-purple-700 before:border-t-transparent before:content-[''] group-hover:flex">
                                    Lorem ipsum dolor sit amet.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 lg:pt-24">
                        <div className="mx-auto pb-14 text-center lg:w-2/3 lg:pb-20">
                            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Latest Articles</h2>
                            <p className="text-lg md:text-xl">All important business news in one place</p>
                        </div>
                        <div className="grid gap-x-8 gap-y-10 xl:grid-cols-2 xl:gap-y-16">
                            {blogs.map((blog) => {
                                return (
                                    <BlogNewsCard
                                        key={blog.id}
                                        blogNewsimgSrc={blog.src}
                                        blogTitle={blog.title}
                                        blogDescription={blog.description}
                                        blogtype={blog.type}
                                        blogDate={blog.date}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <NewsLetter />
        </>
    );
};

export default page;
