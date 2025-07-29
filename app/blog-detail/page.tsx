import BlogDetailPostCard from '@/components/BlogDetailPostCard';
import BlogNewsCard from '@/components/BlogNewsCard';
import ChainIcon from '@/components/Icons/ChainIcon';
import FilledFacebookIcon from '@/components/Icons/FilledFacebookIcon';
import FilledLinkedinIcon from '@/components/Icons/FilledLinkedinIcon';
import FilledTwitterIcon from '@/components/Icons/FilledTwitterIcon';
import PinterestIcon from '@/components/Icons/PinterestIcon';
import NewsLetter from '@/components/NewsLetter';
import Image from 'next/image';
import helper from '@/libs/helper';
import type { Metadata } from 'next';
import { env } from '../../env';

export const metadata: Metadata = {
    title: 'Blog Detail | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Blog Detail | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: env.NEXT_PUBLIC_APP_URL + '/blog-detail',
        type: 'article',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Blog Detail | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${env.NEXT_PUBLIC_APP_URL}/blog-detail`,
        languages: { 'x-default': `${env.NEXT_PUBLIC_APP_URL}/blog-detail` },
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

    const blogPost = [
        {
            id: 1,
            src: '/assets/images/blog-1.jpg',
            description: ' Livestream: Playing with Laravel Pipelines',
            date: 'Jan 01, 2023',
        },
        {
            id: 2,
            src: '/assets/images/blog-6.jpg',
            description: ' Livestream: Playing with Laravel Pipelines',
            date: 'Jan 01, 2023',
        },
        {
            id: 3,
            src: '/assets/images/blog-7.jpg',
            description: ' Livestream: Playing with Laravel Pipelines',
            date: 'Jan 01, 2023',
        },
        {
            id: 4,
            src: '/assets/images/blog-8.jpg',
            description: ' Livestream: Playing with Laravel Pipelines',
            date: 'Jan 01, 2023',
        },
    ];

    const categories = ['Business', 'Consulting', 'Digital', 'Finance', 'Support'];

    const tags = ['Design', 'Agency', 'Solution', 'Start Up', 'Web'];

    return (
        <>
            <div className="overflow-x-hidden pb-14 pt-12 lg:pb-24">
                <div className="container">
                    <div className="grid-cols-10 gap-7 xl:grid">
                        <div className="col-span-7 rtl:text-right ltr:text-left">
                            <div className="mb-8 flex flex-col items-center gap-y-8 sm:mb-10 sm:flex-row">
                                <div className="flex gap-3 sm:pe-7 text-base font-semibold leading-5">
                                    <span className="rounded-full bg-primary px-5 py-2.5 text-white">Design</span>
                                    <span className="rounded-full bg-primary/10 px-5 py-2.5 text-primary">January 01, 2023</span>
                                </div>
                                <ul className="inline-flex items-center gap-5 border-purple-400 py-1 sm:ps-7 dark:border-purple-700 sm:border-s-2">
                                    <li>
                                        <a href="#" className="flex duration-300 hover:scale-110">
                                            <PinterestIcon />
                                            <span className="sr-only">Pinterest</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex duration-300 hover:scale-110">
                                            <FilledFacebookIcon />
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex duration-300 hover:scale-110">
                                            <FilledTwitterIcon />
                                            <span className="sr-only">Twitter</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex duration-300 hover:scale-110">
                                            <FilledLinkedinIcon />
                                            <span className="sr-only">Linkedin</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex duration-300 hover:scale-110">
                                            <ChainIcon />
                                            <span className="sr-only">Link</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h1 className="text-4xl font-bold leading-snug text-purple-700 dark:text-white md:text-[50px]">
                                10 reasons to invest in SEO copywriting services
                            </h1>
                            <div className="mt-5 space-y-10 leading-relaxed">
                                <div className="space-y-5">
                                    <p>
                                        Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A
                                        survey by Curate also backs the importance of webinars where 79% of buyers are ready to share their contact details in
                                        exchange for webinar access.
                                    </p>
                                    <p>
                                        Marketing refers to any activities that a company uses to promote its products and services and improve its market
                                        share. In order to be successful, marketing requires a combination of advertising savvy, sales, and the ability to
                                        deliver goods to end-users. This is normally undertaken by specific professionals or marketers who can work internally
                                        (for companies) or externally with other marketing firms. Email was a popular marketing tool in the early days of
                                        digital strength marketing.
                                    </p>
                                </div>
                                <div className="max-w-xl rounded-lg bg-[#9199B51F] px-5 py-2.5 text-center font-medium leading-9">
                                    <span className="text-[#0168FF]">Route </span>
                                    <span className="text-[#FB5D70]">:: </span>
                                    <span className="text-[#BB4AF3]"> get </span>
                                    <span className="text-[#001E2B] dark:text-white">(&apos;/see-my-paycheck&apos;,</span>
                                    <span className="text-[#0168FF]"> MyController </span>
                                    <span className="text-[#FB5D70]"> ::class </span>
                                    <span className="text-[#001E2B] dark:text-white"> ) </span>
                                    <span className="text-[#FB5D70]">-&gt; </span>
                                    <span className="text-[#BB4AF3]"> middleware </span>
                                    <span className="text-[#001E2B] dark:text-white">(&apos;require.pin&apos;);</span>
                                </div>
                                <div>
                                    <p>
                                        Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A
                                        survey by Curate also backs the importance of webinars where 79% of buyers are ready to share their contact details in
                                        exchange for webinar access.
                                    </p>
                                </div>
                                <ul className="leading-8">
                                    <li>
                                        1. Add the <span className="font-bold text-green underline">require.pin</span> middleware to routes or a group of routes
                                        requiring a pin
                                    </li>
                                    <li>2. The middleware will intercept those routes</li>
                                    <li>3. The package generates a temporary URL to authenticate with their PIN</li>
                                    <li>4. Once the user enters their valid PIN, it will redirect and allow them access to the PIN-protected route</li>
                                </ul>
                                <div className="relative max-w-[630px] overflow-hidden rounded-2xl border-s-4 border-primary bg-secondary/5 p-5 font-medium text-primary dark:bg-primary/10">
                                    <p>
                                        Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward
                                        difficult to leave it.
                                    </p>
                                    <span className="mt-2 inline-block">Hahimlam Dirat</span>
                                    <span className="absolute bottom-2.5 end-2.5 text-secondary rotate-y-180 rtl:rotate-0 dark:text-purple-400">
                                        <svg width="58" height="52" viewBox="0 0 58 52" fill="none">
                                            <g opacity="0.06">
                                                <path
                                                    d="M4.14496 0H20.7251C23.0131 0 24.8701 1.94133 24.8701 4.33333V21.6667C24.8701 24.0587 23.0131 26 20.7251 26H8.28999C8.28999 35.5595 15.7261 43.3333 24.8701 43.3333V52C11.1536 52 -7.05719e-05 40.3391 -7.05719e-05 26V4.33333C-7.05719e-05 1.94133 1.8569 0 4.14496 0Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M37.2739 0H53.854C56.142 0 57.999 1.94133 57.999 4.33333V21.6667C57.999 24.0587 56.142 26 53.854 26H41.4189C41.4189 35.5595 48.855 43.3333 57.999 43.3333V52C44.2825 52 33.1288 40.3391 33.1288 26V4.33333C33.1288 1.94133 34.9858 0 37.2739 0Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                <ul className="space-y-4">
                                    <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>2. Donec faucibus lorem pretium mi rhoncus blandit.</li>
                                    <li>3. Praesent blandit augue sed diam tincidunt faucibus.</li>
                                    <li>4. Quisque posuere tortor mattis est blandit commodo.</li>
                                </ul>
                                <div>
                                    <p>
                                        Research by American Marketing Association states that 60% of marketers include webinars in their marketing strategy. A
                                        survey by Curate also backs the importance of webinars where 79% of buyers are ready to share their contact details in
                                        exchange for webinar access.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 mt-10 flex flex-col items-start gap-6 md:flex-row xl:mt-0 xl:block xl:space-y-14">
                            <div
                                className="group mx-auto w-full max-w-xs shrink-0 overflow-hidden rounded-2xl lg:max-w-fit"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <Image
                                    src="/assets/images/blog-5.jpg"
                                    alt="blog-5"
                                    className="h-full w-full object-cover duration-300 group-hover:scale-110"
                                    width={441}
                                    height={343}
                                />
                            </div>
                            <div className="w-full rounded-2xl bg-purple-200 px-4 py-7 dark:bg-purple-900 sm:px-6">
                                <div className="divide-y-2 divide-purple-300 dark:divide-purple-800">
                                    <div className="pb-7">
                                        <h2 className="pb-8 text-xl font-bold text-purple-700 dark:text-white">Recent post</h2>
                                        <div className="space-y-5">
                                            {blogPost.map((post) => {
                                                return (
                                                    <BlogDetailPostCard
                                                        key={post.id}
                                                        blogPostImgSrc={post.src}
                                                        blogPostDate={post.date}
                                                        blogPostDescription={post.description}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="py-7">
                                        <h2 className="pb-5 text-xl font-bold text-purple-700 dark:text-white">Category</h2>
                                        <div className="flex flex-wrap items-center gap-5 text-base font-semibold leading-5 text-primary dark:text-white">
                                            {categories.map((category, index) => {
                                                return (
                                                    <span className="rounded-md bg-primary/10 px-3.5 py-2.5 dark:bg-white/10" key={index}>
                                                        {category}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="pt-7">
                                        <h2 className="pb-5 text-xl font-bold text-purple-700 dark:text-white">Tags</h2>
                                        <div className="flex flex-wrap items-center gap-5 text-base font-semibold leading-5 text-primary dark:text-white">
                                            {tags.map((tag, index) => {
                                                return (
                                                    <span className="rounded-md bg-primary/10 px-3.5 py-2.5 dark:bg-white/10" key={index}>
                                                        {tag}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
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
