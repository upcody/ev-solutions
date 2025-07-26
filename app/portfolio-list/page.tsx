import CaseStudiesCard from '@/components/CaseStudiesCard';
import NewsLetter from '@/components/NewsLetter';
import TestimonialSlider from '@/components/TestimonialSlider';
import Image from 'next/image';
import Link from 'next/link';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio List | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Portfolio List | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/portfolio-list',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Portfolio List | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/portfolio-list`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/portfolio-list` },
    },
};

const page = () => {
    const caseStudies = [
        {
            id: 1,
            src: '/assets/images/case-study-1.jpg',
            title: 'Tapin Website',
            type: 'Branding, Website',
        },
        {
            id: 2,
            src: '/assets/images/case-study-2.jpg',
            title: 'Punchy UI design',
            type: 'Website/mobile design and development',
        },
        {
            id: 3,
            src: '/assets/images/case-study-3.jpg',
            title: 'Snap - tap mobile Ui',
            type: 'Mobile design',
        },
        {
            id: 4,
            src: '/assets/images/case-study-4.jpg',
            title: 'Once studio',
            type: 'Branding, Website',
        },
    ];

    return (
        <>
            <div className="pb-16 pt-12 lg:pb-32">
                <div className="container">
                    <div className="grid-cols-10 items-center gap-8 space-y-5 lg:space-y-0 lg:grid">
                        <div className="col-span-3 text-center">
                            <h1
                                className="mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white xl:text-[56px]"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                Digital case studies.
                            </h1>
                            <p className="mb-10 xl:text-22">Digital case studies often include detailed descriptions of the project&apos;s objectives.</p>
                            <a href="#case-studies" className="relative inline-flex items-center justify-center">
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <svg width="17" height="34" viewBox="0 0 17 34" fill="none" className="animate-bounce">
                                        <path
                                            d="M1.53418 25.5141L8.30295 32.4564L15.0717 25.5141M8.30295 31.4922V1.6893"
                                            stroke="#FF3AC8"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <Image src="/assets/images/scroll-btn.svg" alt="scroll-btn" width={120} height={122} />
                            </a>
                        </div>
                        <div className="col-span-4 h-full lg:pl-10">
                            <Image src="/assets/images/portfolio-1.jpg" alt="" className="h-full w-full rounded-2xl object-cover" width={555} height={473} />
                        </div>
                        <div className="col-span-3 h-full">
                            <Image src="/assets/images/portfolio-2.jpg" alt="" className="h-full w-full rounded-2xl object-cover" width={438} height={473} />
                        </div>
                    </div>

                    <div className="pb-10 pt-16 lg:py-24" id="case-studies">
                        <div className="mx-auto pb-10 text-center lg:w-2/3 lg:pb-16">
                            <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Case studies</h2>
                            <p className="text-lg md:text-xl">Completed projects by our expert team</p>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2 md:text-xl lg:gap-8">
                            {caseStudies.map((cases) => (
                                <CaseStudiesCard key={cases.id} caseStudyImgSrc={cases.src} caseStudyTitle={cases.title} caseStudytype={cases.type} />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border-2 border-[#9199B51F] bg-white px-5 py-12 shadow-[0px_0px_80px_rgba(119,128,161,0.1)] dark:border-[#7780A11A] dark:bg-transparent dark:shadow-none">
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
                                    <Image src="/assets/images/testimonial-user-5.svg" alt="" className="h-full w-full object-cover" width={144} height={144} />
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
