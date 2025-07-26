import FAQuestions from '@/components/FAQuestions';
import NewsLetter from '@/components/NewsLetter';
import TestimonialSlider from '@/components/TestimonialSlider';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Contact Us | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/contact-us',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Contact Us | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/contact-us`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/contact-us` },
    },
};

const page = () => {
    return (
        <>
            <div className="overflow-x-hidden pb-16 pt-10 md:pt-16 lg:pb-32">
                <div className="container">
                    <div className="relative">
                        <Image src="/assets/images/chat.svg" alt="Chat image" className="absolute end-10 top-0 hidden lg:block" width={77} height={95} />
                        <div className="relative mx-auto max-w-[1142px] pb-14 text-center xl:pb-24">
                            <span className="absolute -start-96 top-24 rtl:rotate-y-180">
                                <svg width="488" height="124" viewBox="0 0 488 124" fill="none">
                                    <path
                                        opacity="0.6"
                                        d="M485 3H293.31C265.695 3 243.31 25.3858 243.31 53V71C243.31 98.6142 220.924 121 193.31 121H0"
                                        stroke="url(#paint0_radial_434_1170)"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <radialGradient
                                            id="paint0_radial_434_1170"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(177.5 -59.5) scale(228 204.246)"
                                        >
                                            <stop stopColor="#806BFF" />
                                            <stop offset="1" stopColor="#806BFF" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </span>
                            <h1
                                className="mb-8 text-4xl font-extrabold leading-tight text-purple-700 dark:text-white md:mb-12 lg:text-[56px]"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                Get our all info directly from here
                            </h1>
                            <p className="text-lg md:text-22 lg:px-32">
                                Find a team of digital marketers you can rely on. We build trust through communication, transparency, and results.
                            </p>
                        </div>
                    </div>
                    <div className="grid-cols-11 items-start gap-8 lg:grid">
                        <div className="col-span-5">
                            <div className="text-center lg:ltr:text-left lg:rtl:text-right">
                                <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Let&apos;s work together</h2>
                                <p className="md:text-xl">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium.Ut nullam dolor,
                                </p>
                            </div>
                            <div className="mt-10 space-y-8 font-medium text-purple-700 dark:text-white md:mt-16 md:space-y-12 md:text-xl">
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 shrink-0 md:h-14 md:w-14">
                                        <Image src="/assets/images/email-icon.svg" alt="Email icon" width={56} height={56} />
                                    </div>
                                    <a href="mailto:contact@nobblethemes.com" className="truncate pt-1.5 duration-300 hover:text-red md:pt-3">
                                        contact@nobblethemes.com
                                    </a>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 shrink-0 md:h-14 md:w-14">
                                        <Image src="/assets/images/call-icon.svg" alt="Call icon" width={56} height={56} />
                                    </div>
                                    <a href="tel:+915447259547" className="pt-1.5 duration-300 hover:text-green md:pt-3">
                                        +91 5447 259 547
                                    </a>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 shrink-0 md:h-14 md:w-14">
                                        <Image src="/assets/images/location-icon.svg" alt="Location icon" width={56} height={56} />
                                    </div>
                                    <p className="pt-1.5 md:pt-3">25 W 51st St, New York, NY 10019</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 mt-10 rounded-2xl border-2 border-purple-300/60 bg-white p-5 shadow-[0_0_80px_rgba(119,128,161,0.1)] dark:border-purple-900 dark:bg-purple-900 dark:shadow-none md:p-8 lg:mt-0">
                            <form>
                                <div className="mb-7 grid gap-7 md:grid-cols-2 md:gap-y-9">
                                    <div>
                                        <input type="text" placeholder="First Name" className="form-input" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Last Name" className="form-input" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Email ID" className="form-input" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Subject" className="form-input" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <textarea rows={4} placeholder="Type your messages" className="form-textarea"></textarea>
                                    </div>
                                </div>
                                <button type="button" className="btn w-full text-base font-bold uppercase md:max-w-[285px]">
                                    send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
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
            <div className="pb-16 lg:pb-32">
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
};

export default page;
