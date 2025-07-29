import BlogNewsCard from '@/components/BlogNewsCard';
import FAQPageAnimateHeight from '@/components/FAQPageAnimateHeight';
import NewsLetter from '@/components/NewsLetter';
import helper from '@/libs/helper';
import { Metadata } from 'next';
import Script from 'next/script';
import { env } from '../../env';

export const metadata: Metadata = {
    title: 'Faq | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Faq | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: env.NEXT_PUBLIC_APP_URL + '/faq',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Faq | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${env.NEXT_PUBLIC_APP_URL}/faq`,
        languages: { 'x-default': `${env.NEXT_PUBLIC_APP_URL}/faq` },
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
            <div className="overflow-x-hidden py-12 lg:pb-24">
                <div className="relative mx-auto max-w-[1142px] px-4 pb-16 text-center xl:pb-24">
                    <span className="absolute -start-96 top-8 rtl:rotate-y-180">
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
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg md:text-22 lg:px-20">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                    </p>
                </div>
                <div className="container">
                    <FAQPageAnimateHeight />

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
