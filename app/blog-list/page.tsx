import BlogNewsCard from '@/components/BlogNewsCard';
import NewsLetter from '@/components/NewsLetter';
import TestimonialSlider from '@/components/TestimonialSlider';
import helper from '@/libs/helper';
import { Metadata } from 'next';
import { env } from '../../env';

export const metadata: Metadata = {
    title: 'Blog List | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Blog List | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: env.NEXT_PUBLIC_APP_URL + '/blog-list',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Blog List | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${env.NEXT_PUBLIC_APP_URL}/blog-list`,
        languages: { 'x-default': `${env.NEXT_PUBLIC_APP_URL}/blog-list` },
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
        {
            id: 3,
            src: '/assets/images/blog-3.jpg',
            type: 'Design',
            date: 'January 01, 2023',
            title: '10 Reasons to invest in SEO copywriting services',
            description: 'Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.',
        },
        {
            id: 4,
            src: '/assets/images/blog-4.jpg',
            type: 'Design',
            date: 'January 01, 2023',
            title: '10 Reasons to invest in SEO copywriting services',
            description: 'Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.',
        },
        {
            id: 5,
            src: '/assets/images/blog-1.jpg',
            type: 'Design',
            date: 'January 01, 2023',
            title: '10 Reasons to invest in SEO copywriting services',
            description: 'Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.',
        },
        {
            id: 6,
            src: '/assets/images/blog-2.jpg',
            type: 'Design',
            date: 'January 01, 2023',
            title: '10 Reasons to invest in SEO copywriting services',
            description: 'Online design games are perfect for practicing tricky tools and techniques, boosting core UI/UX skills.',
        },
    ];

    return (
        <>
            <div className="overflow-x-hidden pb-16 pt-10 md:pt-16 xl:pb-32">
                <div className="relative mx-auto max-w-[1142px] px-4 pb-14 text-center xl:pb-24">
                    <span className="absolute -left-96 top-24" data-aos="slide-right" data-aos-duration="2000">
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
                        All important business news in one place
                    </h1>
                    <p className="text-lg md:text-22 lg:px-10">
                        This is where you can find the latest news and insights about Viva — new products, in-depth interviews and successfully finished
                        projects. Never miss a beat.
                    </p>
                </div>
                <div className="container">
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

            <div className="pb-16 lg:pb-32">
                <TestimonialSlider />
            </div>
            <NewsLetter />
        </>
    );
};

export default page;
