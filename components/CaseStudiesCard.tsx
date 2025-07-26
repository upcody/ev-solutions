import Image from 'next/image';
import Link from 'next/link';

const CaseStudiesCard = (props: any) => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <div className="overflow-hidden rounded-2xl sm:h-52 md:h-96 2xl:h-[520px]">
                <Image
                    src={props.caseStudyImgSrc}
                    alt="Studio image"
                    className="h-full w-full object-cover duration-300 hover:scale-125"
                    width={752}
                    height={520}
                />
            </div>
            <div className="space-y-3 py-4 md:space-y-5 md:py-8">
                <Link
                    href="/portfolio-detail"
                    className="text-xl font-bold leading-tight text-purple-700 duration-300 hover:text-primary! dark:text-white md:text-[26px] inline-flex"
                >
                    {props.caseStudyTitle}
                </Link>
                <div>{props.caseStudytype}</div>
            </div>
        </div>
    );
};

export default CaseStudiesCard;
