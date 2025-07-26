'use client';
import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '@/store/index';
import { toggleDirection, toggleTheme } from '@/store/themeConfigSlice';
import ScreenLoaderIcon from '@/components/Icons/ScreenLoaderIcon';
import AOS from 'aos';

function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleTheme(themeConfig.theme));
        dispatch(toggleDirection(themeConfig.direction));
    }, [dispatch, themeConfig.direction, themeConfig.theme]);

    useEffect(() => {
        const screen_loader = document.getElementsByClassName('screen_loader');
        if (screen_loader?.length) {
            setTimeout(() => {
                document.body.removeChild(screen_loader[0]);
            }, 300);
        }
    }, []);

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    useEffect(() => {
        setOnScroll();
        window.onscroll = function () {
            setOnScroll();
        };
    }, []);

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const setOnScroll = () => {
        let scrollpos = window.scrollY;
        if (scrollpos > 0) {
            document.getElementById('scrollToTopBtn')?.classList.remove('hidden');
            document.getElementById('header')?.classList.add('sticky-header');
        } else {
            document.getElementById('scrollToTopBtn')?.classList.add('hidden');
            document.getElementById('header')?.classList.remove('sticky-header');
        }
    };

    return (
        <>
            <div className="screen_loader fixed inset-0 z-60 grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
                <ScreenLoaderIcon />
            </div>
            {children}

            <div id="scrollToTopBtn" className="group fixed bottom-5 z-10 animate-bounce ltr:right-5 rtl:left-5" onClick={scrollToTop}>
                <button
                    type="button"
                    className="h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition duration-300 group-hover:bg-secondary dark:group-hover:bg-purple-700 flex"
                >
                    <span className="h-6 w-6 transition">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-full w-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </>
    );
}

App.displayName = 'App';
export default App;
