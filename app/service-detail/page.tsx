import CountsUp from '@/components/CountsUp';
import FAQuestions from '@/components/FAQuestions';
import TestimonialSlider from '@/components/TestimonialSlider';
import helper from '@/libs/helper';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { env } from '../../env';

export const metadata: Metadata = {
    title: 'Service Detail | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Service Detail | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: env.NEXT_PUBLIC_APP_URL + '/service-detail',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Service Detail | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${env.NEXT_PUBLIC_APP_URL}/service-detail`,
        languages: { 'x-default': `${env.NEXT_PUBLIC_APP_URL}/service-detail` },
    },
};

const page = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <div className="container">
                    <div className="flex flex-col items-center gap-y-6 pb-16 pt-12 lg:flex-row lg:pb-24">
                        <div className="text-center lg:pe-10 lg:ltr:text-left lg:rtl:text-right xl:pe-32">
                            <h1
                                className="mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white xl:mb-12 xl:text-[56px]"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                Social media marketing
                            </h1>
                            <p className="sm:text-22">
                                Social media marketing can be a powerful tool for businesses to reach and engage with their target audience. By developing a
                                social media strategy that aligns with business goals and customer needs,
                            </p>
                        </div>
                        <div className="shrink-0 lg:w-2/5" data-aos="zoom-out" data-aos-duration="1000">
                            <Image
                                src="/assets/images/social-media-market.png"
                                alt="Social media market"
                                className="h-full w-full object-cover"
                                width={614}
                                height={384}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-6 lg:flex-row xl:items-center">
                        <div className="text-center lg:pe-12 lg:ltr:text-left lg:rtl:text-right xl:pe-28">
                            <div className="mb-14 space-y-5">
                                <h2 className="text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                                    We take your business reach from thousands to millions
                                </h2>
                                <p className="sm:text-xl">
                                    It refers to the process of expanding your business&apos;s visibility and audience reach, ultimately growing your customer
                                    base and revenue. This can be achieved through a variety of marketing and advertising strategies.
                                </p>
                            </div>
                            <div className="mb-10 flex justify-center gap-5 sm:gap-14 lg:mb-20 lg:justify-start">
                                <div className="space-y-4">
                                    <h3 className="text-[40px] font-extrabold leading-tight text-purple-700 dark:text-white">
                                        <CountsUp start={0} end={4} duration={2} delay={1} suffix="k" />
                                    </h3>
                                    <h4 className="font-medium sm:text-xl">Optimization power</h4>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-[40px] font-extrabold leading-tight text-purple-700 dark:text-white">
                                        <CountsUp start={0} end={150} duration={4} delay={1} suffix="+" />
                                    </h3>
                                    <h4 className="font-medium sm:text-xl">Social empowerment</h4>
                                </div>
                            </div>
                            <a href="#" className="btn inline-flex">
                                Request a quote
                            </a>
                        </div>
                        <div className="group shrink-0 overflow-hidden rounded-3xl shadow-[10px_14px_34px_rgba(0,0,0,0.15)] lg:w-2/5 xl:max-w-2xl">
                            <Image
                                src="/assets/images/business-image.jpg"
                                alt="Business image"
                                className="h-full w-full object-cover duration-300 group-hover:scale-110"
                                width={614}
                                height={400}
                            />
                        </div>
                    </div>

                    <div className="py-16 lg:py-36">
                        <div className="grid gap-12 lg:grid-cols-2 xl:items-center xl:gap-28">
                            <div className="space-y-16">
                                <div className="relative flex gap-8 xl:gap-14" data-aos="fade-up" data-aos-duration="1000">
                                    <span className="absolute left-6 top-14 inline-flex h-full border border-dashed border-purple-400 rtl:left-auto rtl:right-6 sm:left-9 sm:top-[68px] sm:ltr:left-9 sm:rtl:right-9"></span>
                                    <div className="shrink-0">
                                        <Image
                                            src="/assets/images/social-content-icon.svg"
                                            alt="Social content icon"
                                            className="w-12 sm:w-full"
                                            width={72}
                                            height={72}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3
                                            className="
                                    text-22 font-semibold text-purple-700 dark:text-white"
                                        >
                                            Social Media Content Plan
                                        </h3>
                                        <p>
                                            A social media content plan is a strategic document that outlines the types of content you will create and share on
                                            your social media channels.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex gap-8 xl:gap-14" data-aos="fade-up" data-aos-duration="1000">
                                    <span className="absolute left-6 top-14 inline-flex h-full border border-dashed border-purple-400 rtl:left-auto rtl:right-6 sm:left-9 sm:top-[68px] sm:ltr:left-9 sm:rtl:right-9"></span>
                                    <div className="shrink-0">
                                        <Image
                                            src="/assets/images/publish-execution-icon.svg"
                                            alt="Publish execution icon"
                                            className="w-12 sm:w-full"
                                            width={72}
                                            height={72}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-22 font-semibold text-purple-700 dark:text-white">Publishing & Execution</h3>
                                        <p>
                                            Publishing involves actually posting the content on the designated social media channels at the specified date and
                                            time.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-8 xl:gap-14" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="shrink-0">
                                        <Image
                                            src="/assets/images/measure-scale.svg"
                                            alt="Measure scale icon"
                                            className="w-12 sm:w-full"
                                            width={72}
                                            height={72}
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-22 font-semibold text-purple-700 dark:text-white">Measure & Scale</h3>
                                        <p>
                                            Measuring refers to the process of tracking and analyzing social media metrics to evaluate the success of your
                                            content and overall social media strategy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:ltr:text-left lg:rtl:text-right">
                                <div className="mb-10 space-y-5 lg:mb-20">
                                    <h2 className="text-[26px] font-bold leading-tight text-purple-700 dark:text-white">
                                        Our bulletproof process to win on Social Media
                                    </h2>
                                    <p className="text-xl">
                                        Track your social media metrics and use analytics tools to measure the success of your social media efforts and make
                                        data-driven decisions for future improvements.
                                    </p>
                                </div>
                                <a href="#" className="btn inline-flex">
                                    Request a quote
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-y-6 rounded-3xl bg-secondary px-4 py-12 dark:bg-purple-900 sm:px-16 lg:flex-row xl:py-8 xl:pr-40">
                        <div className="relative text-center lg:pe-28 lg:ltr:text-left lg:rtl:text-right">
                            <span className="absolute -top-12 left-4 sm:-left-12 sm:-top-12">
                                <svg width="66" height="59" viewBox="0 0 66 59" fill="none">
                                    <path
                                        d="M33.3408 37.9196C32.9764 36.6924 32.8479 35.7352 32.4204 34.9478C31.635 33.4964 30.6305 32.1704 29.7958 30.7495C28.3324 28.2643 26.9783 25.7118 25.4798 23.2484C24.6325 21.8547 23.7335 20.4392 22.5978 19.2968C21.266 17.9578 19.3883 17.9091 18.0753 18.8026C16.6256 19.7903 16.1249 21.6835 17.0236 23.6028C17.5976 24.8327 18.3071 26.0865 19.2486 27.0357C22.2429 30.0525 25.3551 32.9525 28.4653 35.8489C29.2614 36.5896 30.1646 37.2594 31.1189 37.7655C31.616 38.0357 32.3398 37.8725 33.3408 37.9196Z"
                                        fill="#31D2AC"
                                    />
                                    <path
                                        d="M52.8074 35.962C53.1214 36.0812 53.5023 36.3595 53.8355 36.3103C54.1792 36.2546 54.6336 35.9497 54.7593 35.6374C55.0643 34.8771 55.2591 34.0626 55.4057 33.2485C56.26 28.4821 57.1065 23.7108 57.9005 18.9327C58.0554 17.9961 58.1042 16.9882 57.939 16.0584C57.6243 14.2969 56.1157 12.9937 54.5627 12.9059C53.0303 12.82 51.4925 14.0382 50.9658 15.7763C50.8449 16.1687 50.7426 16.5839 50.7288 16.9933C50.5411 22.9667 50.8409 28.8982 52.2886 34.7275C52.383 35.1239 52.6026 35.4871 52.8074 35.962Z"
                                        fill="#31D2AC"
                                    />
                                    <path
                                        d="M8.5124 42.8932C9.05004 43.2703 9.86692 44.0861 10.8473 44.4833C14.4032 45.9313 18.0107 47.2493 21.6087 48.5831C22.1136 48.7702 22.6826 48.815 23.226 48.8414C23.9132 48.8817 24.7159 48.841 24.8653 48.0154C24.9454 47.5797 24.5967 47.0029 24.3165 46.5793C24.1023 46.2568 23.6907 46.0561 23.349 45.827C20.0318 43.6207 16.7306 41.385 13.3741 39.242C12.4699 38.666 11.4225 38.2464 10.3838 37.9928C9.42675 37.7621 8.46366 38.0338 7.89911 39.013C7.37872 39.921 7.34318 40.8473 7.84427 41.78C7.97627 42.0309 8.12909 42.2594 8.5124 42.8932Z"
                                        fill="#31D2AC"
                                    />
                                </svg>
                            </span>
                            <Image src="/assets/images/yellow-star.svg" alt="Yellow star" className="absolute -top-6 right-1/4" width={43} height={42} />
                            <h2 className="pb-5 text-[26px] font-bold leading-tight text-white">The #1 marketing services company</h2>
                            <p className="text-xl">
                                The #1 marketing services company would refer to the top-ranked company in terms of market share, revenue, reputation, or other
                                performance metrics within the marketing services industry.
                            </p>
                            <div className="mt-10 md:mt-16">
                                <Link href="/service-list" target="_blank" className="btn inline-flex hover:bg-purple-800">
                                    Get start now
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-xs shrink-0 xl:max-w-[484px]" data-aos="zoom-in" data-aos-duration="1000">
                            <Image
                                src="/assets/images/first-marketing-company.svg"
                                alt="First marketing company"
                                className="h-full w-full object-cover"
                                width={484}
                                height={516}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-hidden py-16 lg:pb-36 lg:pt-32">
                        <div className="relative mx-auto max-w-[1142px] grid-cols-3 gap-4 px-4 lg:grid">
                            <Image
                                src="assets/images/faq-bg-shape.svg"
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
                    <div className="pb-16 lg:pb-32">
                        <TestimonialSlider />
                    </div>
                </div>
            </div>

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
};

export default page;
