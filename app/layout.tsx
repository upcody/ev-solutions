import '@/styles/tailwind.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import { Providers } from '@/store/Providers';
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import Image from 'next/image';
import App from '@/App';
import { Metadata } from 'next';
import helper from '@/libs/helper';

import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || ''),
    title: 'NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    icons: {
        icon: '/favicon.svg',
    },
    openGraph: {
        ...helper.openGraphData,
        type: 'website',
    },
    robots: {
        index: process.env.NEXT_PUBLIC_IS_PRODUCTION == 'true',
        follow: process.env.NEXT_PUBLIC_IS_PRODUCTION == 'true',
    },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'NOBBLE',
                            url: process.env.NEXT_PUBLIC_APP_URL || '',
                            id: `${process.env.NEXT_PUBLIC_APP_URL}#organization`,
                            logo: `${process.env.NEXT_PUBLIC_APP_URL}/assets/images/logo.png`,
                            legalName: 'NOBBLE',
                            sameAs: [process.env.NEXT_PUBLIC_APP_URL || ''],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            name: 'NOBBLE',
                            url: process.env.NEXT_PUBLIC_APP_URL || '',
                            id: `${process.env.NEXT_PUBLIC_APP_URL}#website`,
                        }),
                    }}
                />
            </head>
            <body>
                <Providers>
                    <App />
                    <div className="flex min-h-screen flex-col bg-white font-jakarta text-lg font-normal text-purple-500 antialiased dark:bg-secondary">
                        <Image
                            src="/assets/images/top-right-curv.svg"
                            alt="Arrow"
                            className="absolute right-0 top-0 hidden lg:block"
                            data-aos="fade-down"
                            data-aos-duration="2000"
                            width={175}
                            height={239}
                        />
                        <Header />
                        <div className="pt-24 lg:pt-32">{children}</div>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
