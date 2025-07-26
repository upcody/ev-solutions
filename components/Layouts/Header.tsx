'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IRootState } from '@/store';
import { toggleDirection, toggleTheme } from '@/store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import RoundCloseIcon from '../Icons/RoundCloseIcon';
import { usePathname } from 'next/navigation';
import ToggleDirectionIcon from '../Icons/ToggleDirectionIcon';

const Header = () => {
    const dispatch = useDispatch();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    const toggleMenu = () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('open');
        }
    };

    const pathName = usePathname();

    return (
        <header id="header" className="fixed top-6 z-50 w-full duration-300">
            <div className="container">
                <div className="header-main flex items-center rounded-lg bg-[#F8F7FF] px-4 py-3 duration-300 dark:bg-purple-800 lg:px-6 lg:py-0">
                    <Link href="/" className="w-24 shrink-0 sm:w-28 lg:w-[133px]">
                        <Image src="/assets/images/logo-light.svg" alt="Logo" className="inline-flex w-full dark:hidden" height={55} width={133} />
                        <Image src="/assets/images/logo-dark.svg" alt="Logo" className="hidden w-full dark:inline-flex" height={55} width={133} />
                    </Link>
                    <div className="ms-auto flex items-center gap-10">
                        <div className="navbar fixed end-full top-0 z-20 inline-flex h-full w-full items-center gap-10 duration-500 lg:static lg:h-auto lg:w-auto">
                            <button type="button" onClick={() => toggleMenu()} className="h-12 w-12 text-white absolute right-5 top-5 lg:hidden">
                                <RoundCloseIcon />
                                <span className="sr-only">Close</span>
                            </button>
                            <ul className="group inline-flex h-full w-full flex-col items-center gap-8 gap-y-10 overflow-y-auto bg-secondary px-5 pb-10 pt-24 text-22 font-semibold text-white sm:text-3xl lg:w-auto lg:flex-row lg:overflow-y-visible lg:bg-transparent lg:p-0 lg:text-lg lg:text-purple-600 dark:lg:text-purple-500 xl:gap-10">
                                <li onClick={() => toggleMenu()}>
                                    <Link href="/" className={`nav-link ${pathName === '/' ? 'active' : ''}`}>
                                        Home
                                    </Link>
                                </li>
                                <li onClick={() => toggleMenu()}>
                                    <Link
                                        href="/service-list"
                                        className={`nav-link ${pathName === '/service-list' || pathName === '/service-detail' ? 'active' : ''}`}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li onClick={() => toggleMenu()}>
                                    <Link href="/blog-list" className={`nav-link ${pathName === '/blog-list' || pathName === '/blog-detail' ? 'active' : ''}`}>
                                        Blogs
                                    </Link>
                                </li>
                                <li onClick={() => toggleMenu()}>
                                    <Link
                                        href="/portfolio-list"
                                        className={`nav-link ${pathName === '/portfolio-list' || pathName === '/portfolio-detail' ? 'active' : ''}`}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li onClick={() => toggleMenu()}>
                                    <Link href="/career" className={`nav-link ${pathName === '/career' ? 'active' : ''}`}>
                                        Career
                                    </Link>
                                </li>
                                <li className="inline-block lg:hidden" onClick={() => toggleMenu()}>
                                    <Link href="/contact-us" className={`nav-link ${pathName === '/contact-us' ? 'active' : ''}`}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="inline-flex items-center gap-5 xl:gap-10">
                            <button
                                type="button"
                                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-transparent duration-300 hover:bg-secondary ltr:border-primary ltr:text-secondary hover:ltr:border-secondary hover:ltr:text-white rtl:border-secondary rtl:bg-secondary rtl:text-white dark:ltr:text-white"
                                onClick={() => dispatch(toggleDirection(`${themeConfig.direction === 'rtl' ? 'ltr' : 'rtl'}`))}
                            >
                                <ToggleDirectionIcon />
                                <span className="sr-only">Switch Rtl/Ltr</span>
                            </button>
                            <label className="inline-flex cursor-pointer items-center">
                                <input
                                    type="checkbox"
                                    id="themeInput"
                                    className="mode-input peer h-0 w-0 opacity-0"
                                    checked={themeConfig.theme == 'light' ? false : true}
                                    readOnly
                                />
                                <div
                                    className="mode-btn relative h-10 w-20 rounded-full border-2 border-primary bg-transparent after:absolute after:left-1 after:top-1/2 after:h-8 after:w-8 after:-translate-y-1/2 after:rounded-full after:bg-primary peer-checked:after:left-auto peer-checked:after:right-1"
                                    onClick={() => dispatch(toggleTheme(`${themeConfig.theme === 'light' ? 'dark' : 'light'}`))}
                                >
                                    <span className="absolute left-2 top-1/2 z-1 w-6 -translate-y-1/2 text-white">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="sr-only">Light mode</span>
                                    </span>
                                    <span className="absolute right-2 top-1/2 z-1 w-6 -translate-y-1/2 text-primary/50">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21.53 15.93C21.37 15.66 20.92 15.24 19.8 15.44C19.18 15.55 18.55 15.6 17.92 15.57C15.59 15.47 13.48 14.4 12.01 12.75C10.71 11.3 9.90995 9.40999 9.89995 7.36999C9.89995 6.22999 10.12 5.12999 10.57 4.08999C11.01 3.07999 10.7 2.54999 10.48 2.32999C10.25 2.09999 9.70995 1.77999 8.64995 2.21999C4.55995 3.93999 2.02995 8.03999 2.32995 12.43C2.62995 16.56 5.52995 20.09 9.36995 21.42C10.29 21.74 11.26 21.93 12.26 21.97C12.42 21.98 12.58 21.99 12.74 21.99C16.09 21.99 19.23 20.41 21.21 17.72C21.88 16.79 21.7 16.2 21.53 15.93Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="sr-only">Dark mode</span>
                                    </span>
                                </div>
                            </label>
                            <Link href="/contact-us" className="btn hidden shrink-0 lg:inline-flex">
                                Contact us
                            </Link>
                            <button type="button" onClick={() => toggleMenu()} className="inline-block space-y-1 lg:hidden">
                                <span className="flex h-0.5 w-7 rounded-full bg-primary"></span>
                                <span className="flex h-0.5 w-7 rounded-full bg-primary"></span>
                                <span className="flex h-0.5 w-7 rounded-full bg-primary"></span>
                                <span className="flex h-0.5 w-7 rounded-full bg-primary"></span>
                                <span className="sr-only">Menu</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
