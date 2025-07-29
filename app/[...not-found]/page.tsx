import helper from '@/libs/helper';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404 | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: '404 | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/not-found',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: '404 | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
};

const NotFound = () => {
    return (
        <div className="py-14 md:py-20 text-center">
            <div className="container">
                <div className="max-w-xl mx-auto" data-aos="zoom-in" data-aos-duration="1000">
                    <Image
                        src="/assets/images/404-light.svg"
                        alt="404"
                        className="w-full h-full object-cover inline-flex dark:hidden"
                        width={576}
                        height={576}
                    />
                    <Image
                        src="/assets/images/404-dark.svg"
                        alt="404"
                        className="w-full h-full object-cover hidden dark:inline-flex"
                        width={584}
                        height={584}
                    />
                </div>
                <div className="mt-6">
                    <h2 className="mb-5 text-22 md:text-[32px] text-purple-700 font-bold leading-tight dark:text-white">Oops!</h2>
                    <p className="md:text-2xl font-medium dark:text-primary">We can&apos;t seems to find the page you&apos;re looking for.</p>
                    <Link href="/" className="btn inline-flex mt-8 md:mt-16">
                        Go to home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
