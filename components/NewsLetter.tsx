import Image from 'next/image';

const NewsLetter = () => {
    return (
        <div className="relative mx-auto flex w-full max-w-[1536px] flex-col items-center justify-between gap-x-4 gap-y-10 bg-secondary px-5 py-11 dark:bg-purple-900 sm:px-16 md:mb-10 lg:flex-row xl:rounded-lg">
            <Image
                src="/assets/images/news-latter-light.png"
                alt="News latter"
                className="absolute left-0 top-0 flex h-full w-full object-cover dark:hidden"
                width={1536}
                height={178}
            />
            <Image
                src="/assets/images/news-latter-dark.png"
                alt="News latter"
                className="absolute left-0 top-0 hidden h-full w-full object-cover dark:flex"
                width={1536}
                height={178}
            />
            <div className="z-1 text-center lg:ltr:text-left lg:rtl:text-right">
                <h2 className="pb-3 text-[40px] font-extrabold leading-tight text-white">Newsletter</h2>
                <p>Join 33,000+ others and never miss out on new tips, tutorials, and more.</p>
            </div>
            <div className="relative z-1 w-full max-w-md text-center">
                <input
                    type="text"
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-primary bg-transparent px-5 py-3 text-base outline-hidden placeholder:text-purple-500 sm:pe-36"
                />
                <button type="button" className="btn end-0 top-0 mt-5 rounded-lg border border-primary py-3 sm:absolute sm:mt-0 sm:rounded-s-none">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;
