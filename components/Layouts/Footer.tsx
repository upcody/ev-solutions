'use client';
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathName = usePathname();
    const isOnPricingPage = pathName === '/' || pathName === '/service-list';
    const pricingLinkHref = isOnPricingPage ? '#pricing-section' : '/#pricing-section';

    return (
        <footer className="mt-auto" id="footer">
            <div className="mx-auto max-w-[1536px]">
                <div className="flex flex-col items-center justify-between gap-6 px-4 py-8 lg:flex-row">
                    <div className="flex flex-col items-center gap-y-5 text-center md:flex-row md:text-left">
                        <Link href="/" className="shrink-0 border-purple-300 md:pe-8 md:ltr:border-r-2 md:rtl:border-l-2">
                            <Image src="/assets/images/logo-light.svg" alt="Logo" className="inline-flex dark:hidden" height={55} width={133} />
                            <Image src="/assets/images/logo-dark.svg" alt="Logo" className="hidden dark:inline-flex" height={55} width={133} />
                        </Link>
                        <div className="md:ps-8">EV Solutions LTD, 167-169 Great Portland Street, London, W1W 5PF, United Kingdom</div>
                    </div>
                    <ul className="inline-flex items-center gap-8 text-purple-400">
                        <li>
                            <a href="#" className="inline-flex duration-300 hover:scale-125 hover:text-primary">
                                <InstagramIcon />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="inline-flex duration-300 hover:scale-125 hover:text-primary">
                                <LinkedinIcon />
                                <span className="sr-only">Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="border-y-2 border-purple-200 px-4 py-10 dark:border-purple-900">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 leading-6 sm:grid-cols-3 lg:grid-cols-5 lg:justify-items-center">
                        <div>
                            <h3 className="pb-8 font-bold text-purple-700 dark:text-white">Quick menu</h3>
                            <ul className="space-y-5 font-medium">
                                <li>
                                    <Link
                                        href="/"
                                        className={`relative duration-300  ${pathName === '/' ? 'text-primary' : 'start-0 hover:start-2 hover:text-primary'}`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/service-list"
                                        className={`relative duration-300  ${
                                            pathName === '/service-list' || pathName === '/service-detail'
                                                ? 'text-primary'
                                                : 'start-0 hover:start-2 hover:text-primary'
                                        }`}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/portfolio-list"
                                        className={`relative duration-300  ${
                                            pathName === '/portfolio-list' || pathName === '/portfolio-detail'
                                                ? 'text-primary'
                                                : 'start-0 hover:start-2 hover:text-primary'
                                        }`}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog-list"
                                        className={`relative duration-300  ${
                                            pathName === '/blog-list' || pathName === '/blog-detail'
                                                ? 'text-primary'
                                                : 'start-0 hover:start-2 hover:text-primary'
                                        }`}
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="pb-8 font-bold text-purple-700 dark:text-white">Company</h3>
                            <ul className="space-y-5 font-medium">
                                <li>
                                    <Link
                                        href="/about-us"
                                        className={`relative duration-300  ${
                                            pathName === '/about-us' ? 'text-primary' : 'start-0 hover:start-2 hover:text-primary'
                                        }`}
                                    >
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="relative start-0 duration-300 hover:start-2 hover:text-primary">
                                        Help & support
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="/contact-us"
                                        className={`relative duration-300  ${
                                            pathName === '/contact-us' ? 'text-primary' : 'start-0 hover:start-2 hover:text-primary'
                                        }`}
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="pb-8 font-bold text-purple-700 dark:text-white">About us</h3>
                            <ul className="space-y-5 font-medium">
                                <li>
                                    <Link
                                        href="/faq"
                                        className={`relative duration-300  ${
                                            pathName === '/faq' ? 'text-primary' : 'start-0 hover:start-2 hover:text-primary'
                                        }`}
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="relative start-0 duration-300 hover:start-2 hover:text-primary">
                                        Customer support
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="pb-8 font-bold text-purple-700 dark:text-white">Legal</h3>
                            <ul className="space-y-5 font-medium">
                                <li>
                                    <Link
                                        href="/terms-condition"
                                        className={`relative duration-300  ${
                                            pathName === '/terms-condition' ? 'text-primary' : 'start-0 hover:start-2 hover:text-primary'
                                        }`}
                                    >
                                        Terms & condition
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/privacy-policy"
                                        className={`relative duration-300  ${
                                            pathName === '/privacy-policy' ? 'text-primary' : 'start-0 hover:start-2 hover:text-primary'
                                        }`}
                                    >
                                        Privacy policy
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="relative start-0 duration-300 hover:start-2 hover:text-primary">
                                        Refund policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="pb-8 font-bold text-purple-700 dark:text-white">Plans</h3>
                            <ul className="space-y-5 font-medium">
                                <li>
                                    <a href={pricingLinkHref} className="relative start-0 duration-300 hover:start-2 hover:text-primary">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6 text-center text-base text-purple-400">Copyright © {new Date().getFullYear()}.Logoipsum. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
