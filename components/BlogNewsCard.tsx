import Image from 'next/image';
import Link from 'next/link';

const BlogNewsCard = (props: any) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl dark:bg-purple-900 sm:flex-row">
            <div className="shrink-0 sm:w-2/5 2xl:w-[366px]">
                <Image src={props.blogNewsimgSrc} alt="Blog image" className="h-full w-full object-cover" width={366} height={319} />
            </div>
            <div className="px-4 py-6 text-center sm:p-7 sm:ltr:text-left sm:rtl:text-right">
                <div className="mb-7 flex flex-wrap justify-center gap-3 text-base font-semibold leading-5 sm:justify-start">
                    <span className="rounded-full bg-primary px-5 py-2.5 text-white">{props.blogtype}</span>
                    <span className="rounded-full bg-primary/10 px-5 py-2.5 text-primary">{props.blogDate}</span>
                </div>
                <div className="mb-6 space-y-4">
                    <Link href="/blog-detail" className="line-clamp-2 text-22 font-semibold text-purple-700 duration-300 hover:text-primary! dark:text-white">
                        {props.blogTitle}
                    </Link>
                    <p className="line-clamp-3 text-lg/6">{props.blogDescription}</p>
                </div>
                <Link
                    href="/blog-detail"
                    className="relative start-0 text-base font-semibold text-primary duration-300 hover:start-2 hover:text-secondary dark:hover:text-white"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default BlogNewsCard;
