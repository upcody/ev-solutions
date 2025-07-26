import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ serviceImageSrc, serviceTitle, serviceDescription, className, lineBgColor, color, bgColor }: any) => {
    return (
        <div className={className} data-aos="fade-up" data-aos-duration="1000">
            <div className="group relative overflow-hidden p-0.5">
                <div className={`bg-gradient ${color} absolute inset-0 opacity-0 duration-500 group-hover:opacity-100`}></div>
                <div className="relative z-[1] rounded-lg bg-white px-4 py-10 dark:bg-purple-900 md:px-7">
                    <Link href="/service-detail" className="absolute inset-0"></Link>
                    <div className={`inline-flex h-20 w-20 items-center justify-center rounded-full ${bgColor}`}>
                        <Image src={serviceImageSrc} alt="Services image" width={56} height={56} />
                    </div>
                    <h3 className="pb-6 pt-10 text-22 font-semibold text-purple-700 dark:text-white">{serviceTitle}</h3>
                    <p className="mb-11 line-clamp-3 font-light text-purple-600 dark:text-purple-500">{serviceDescription}</p>
                    <span className={`mx-auto block h-[3px] w-28 rounded-full ${lineBgColor}`}></span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
