import NewsLetter from '@/components/NewsLetter';
import Link from 'next/link';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | NOBBLE',
    description: 'Tailwind CSS Multipurpose Landing Templates',
    openGraph: {
        ...helper.openGraphData,
        title: 'Privacy Policy | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
        url: process.env.NEXT_PUBLIC_APP_URL + '/privacy-policy',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Privacy Policy | NOBBLE',
        description: 'Tailwind CSS Multipurpose Landing Templates',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy` },
    },
};

const page = () => {
    return (
        <>
            <div className="overflow-x-hidden pb-16 pt-10 md:pt-16 lg:pb-24">
                <div className="container">
                    <div className="relative mx-auto max-w-[1142px] pb-14 text-center xl:pb-24">
                        <h1
                            className="text-4xl font-extrabold leading-tight text-purple-700 dark:text-white lg:text-[56px]"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            Privacy policy of NOBBLE
                        </h1>
                    </div>
                    <div className="space-y-12">
                        <div>
                            <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Privacy policy</h2>
                            <div className="space-y-5 leading-[30px]">
                                <p>
                                    At{' '}
                                    <Link href="/" target="_blank" className="font-medium text-purple-700 duration-300 hover:text-primary! dark:text-white">
                                        www.nobble.com
                                    </Link>
                                    , accessible at{' '}
                                    <Link href="/" target="_blank" className="font-medium text-purple-700 duration-300 hover:text-primary! dark:text-white">
                                        www.nobble.com
                                    </Link>
                                    , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that
                                    is collected and recorded by www.nobble.com and how we use it.
                                </p>
                                <p>
                                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through
                                    email at hello@nobble.com
                                </p>
                                <p>
                                    This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the
                                    information that they shared and/or collect in www.nobble. This policy is not applicable to any information collected
                                    offline or via channels other than this website.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Consent</h2>
                            <div className="space-y-5 leading-[30px]">
                                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                                <p>
                                    {`Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of
                                    certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.`}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Information we collect</h2>
                            <div className="space-y-5 leading-[30px]">
                                <p>
                                    The personal information that you are asked to provide & the reasons why you are asked to provide it, will be made clear to
                                    you at the point we ask you to provide your personal info.
                                </p>
                                <p>
                                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number,
                                    the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                                </p>
                                <p>
                                    When you register for an Account, we may ask for your contact information, including items such as name, company name,
                                    address, email address, and telephone number.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">How we use your information</h2>
                            <div className="space-y-5 leading-[30px]">
                                <p>We use the information we collect in various ways, including to:</p>
                                <ul className="list-disc ps-7">
                                    <li>Provide, operate, and maintain our website</li>
                                    <li>Improve, personalize, and expand our website</li>
                                    <li>Understand and analyze how you use our website</li>
                                    <li>Develop new products, services, features, and functionality</li>
                                    <li>
                                        Communicate with you, either directly or through one of our partners, including for customer service, to provide you
                                        with updates
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Links to Other Sites/Apps</h2>
                            <div className="space-y-5 leading-[30px]">
                                <p>
                                    Our Website links to other websites/Websites that may collect personally identifiable information about you. Mntra is not
                                    responsible for the privacy practices or the content of those linked websites/Websites.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Security Precautions</h2>
                            <div className="space-y-5 leading-[30px]">
                                <p>
                                    Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under
                                    our control. Whenever you change or access your account information, we offer the use of a secure server. Once your
                                    information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="pb-7 text-[26px] font-bold leading-tight text-purple-700 dark:text-white">Choice/Opt-Out</h2>
                            <div className="space-y-5 leading-[30px]">
                                <p>
                                    We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related)
                                    communications from us on behalf of our partners, and from us in general, after setting up an account. If you want to remove
                                    your contact information from all our lists and newsletters, please visit unsubscribe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NewsLetter />
        </>
    );
};

export default page;
