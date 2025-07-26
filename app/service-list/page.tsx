import FAQuestions from '@/components/FAQuestions';
import PricingChartOfPlan from '@/components/PricingChartOfPlan';
import SEOServiceList from '@/components/SEOServiceList';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import helper from '@/libs/helper';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Service List | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Service List | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/service-list',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Service List | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/service-list`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/service-list` },
    },
};

const page = () => {
    return (
        <>
            <div className="relative overflow-x-hidden py-16 lg:pb-28 xl:pt-36">
                <Image
                    src="/assets/images/digital-market-bg.svg"
                    alt="Image"
                    className="absolute top-12"
                    data-aos="slide-right"
                    data-aos-duration="3000"
                    width={1501}
                    height={232}
                />
                <div className="mx-auto max-w-[1142px] px-4">
                    <div className="mx-auto pb-10 text-center lg:px-10 lg:pb-16">
                        <h1
                            className="mb-8 text-4xl font-extrabold text-purple-700 dark:text-white md:mb-12 lg:text-7xl/tight"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            Digital marketing service
                        </h1>
                        <p className="text-lg md:text-22">
                            Your digital marketing should be integrated and joined up. In order to get more results for you, we make sure all your digital
                            marketing channels are integrated together.
                        </p>
                    </div>
                    <div className="relative grid items-start gap-4 text-center leading-6 sm:grid-cols-2 md:gap-x-[30px] md:gap-y-12 lg:grid-cols-3">
                        <Image
                            src="/assets/images/high-impact-round.svg"
                            alt="Image"
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
                            serviceDescription="In order for your funnel to be successful, you need to make it as smooth as possible."
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
                        <ServiceCard
                            className="shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-lg"
                            serviceImageSrc="/assets/images/chart-marketing.svg"
                            serviceTitle="Content Marketing"
                            serviceDescription="Content marketing is creating and sharing valuable, relevant, and consistent content to attract.."
                            lineBgColor="bg-blue"
                            color="blue"
                            bgColor="bg-blue/20"
                        />
                    </div>
                </div>
            </div>

            <SEOServiceList />

            <div className="py-16 lg:py-36">
                <PricingChartOfPlan />
            </div>

            <div className="overflow-x-hidden pb-16 lg:pb-36">
                <div className="relative mx-auto max-w-[1142px] grid-cols-3 gap-4 px-4 lg:grid">
                    <Image src="assets/images/faq-bg-shape.svg" alt="" className="absolute -left-60 top-0 lg:-left-96 lg:top-72" width={560} height={178} />
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
