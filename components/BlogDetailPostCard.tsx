import Image from 'next/image';
import Link from 'next/link';

const BlogDetailPostCard = (props: any) => {
    return (
        <div className="flex gap-3.5">
            <div className="group h-20 w-36 shrink-0 overflow-hidden rounded-lg">
                <Image
                    src={props.blogPostImgSrc}
                    alt="blog-1"
                    className="h-full w-full object-cover duration-300 group-hover:scale-110"
                    width={144}
                    height={80}
                />
            </div>
            <div className="font-semibold">
                <Link
                    href="/blog-list"
                    target="_blank"
                    className="mb-1 line-clamp-2 text-base text-purple-600 duration-300 hover:text-primary! dark:text-white"
                >
                    {props.blogPostDescription}
                </Link>
                <span className="text-sm text-purple-400">{props.blogPostDate}</span>
            </div>
        </div>
    );
};

export default BlogDetailPostCard;
