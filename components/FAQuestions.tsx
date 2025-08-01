'use client';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import MinusIcon from './Icons/MinusIcon';
import PlusIcon from './Icons/PlusIcon';

const FAQuestions = () => {
    const [active, setActive] = useState<any>(0);

    const queries = [
        {
            id: 1,
            question: 'What services do you provide to improve my e-commerce business?',
            answer: 'We offer a range of high-impact services, including website and funnel optimization, paid media campaigns (Meta Ads, Google Ads), content marketing, social media marketing, and advanced analytics to scale your brand profitably and enhance customer acquisition and retention.',
        },
        {
            id: 2,
            question: 'How do you ensure my website performs effectively?',
            answer: 'We monitor your website to ensure it runs smoothly, implementing optimization strategies like SEO, user-friendly design, and real-time analytics to improve performance and conversion rates. Our team uses advanced tracking tools to identify and address any issues promptly.',
        },
        {
            id: 3,
            question: 'What makes your digital marketing strategies effective?',
            answer: 'Our strategies are data-driven and tailored to your business needs. We combine SEO, paid media (Meta Ads and Google Ads), content creation, and marketing automation to maximize conversions, increase repeat traffic, and build online authority across the customer journey.',
        },
        {
            id: 4,
            question: 'What are the benefits of your pricing plans?',
            answer: 'Our flexible plans (Startup, Special, Elite) cater to businesses of all sizes. Each includes access to website monitoring, 24-hour support, customer management, upgrades, ads managements and monthly updates to support your growth at every stage.',
        },
        {
            id: 5,
            question: 'How quickly can I expect results from your services?',
            answer: 'Results vary based on your goals and current setup, but our streamlined process—starting with a customized marketing plan, followed by execution and scaling—typically shows measurable improvements in traffic and conversions within 1-3 months.',
        },
        {
            id: 6,
            question: 'Do you offer ongoing support and updates for my campaigns?',
            answer: 'Yes, we provide in-depth monitoring, monthly updates, and responsive support via email to keep your campaigns optimized and aligned with your business objectives, ensuring long-term success.',
        },
    ];
    return (
        <div className="accordion-container space-y-10" itemScope itemType="https://schema.org/FAQPage">
            {queries.map((faq: any, i: number) => {
                return (
                    <div
                        className={`ac border-gray/20 border-0 border-b-2 border-purple-300! bg-transparent dark:border-purple-900! ${
                            active === i ? 'is-active' : ''
                        }`}
                        key={faq.id}
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <h3 className="ac-header" itemProp="name">
                            <button
                                type="button"
                                className="ac-trigger flex! justify-between gap-4 p-0! pb-5! font-jakarta! text-lg! font-semibold! text-purple-700! outline-hidden after:hidden! ltr:text-left rtl:text-right dark:text-purple-300! md:text-xl! w-full"
                                onClick={() => setActive(active === i ? null : i)}
                            >
                                <span>{faq.question}</span>
                                <span className="trigger-icon mt-1 grid h-[22px] w-[22px] shrink-0 place-content-center rounded-full border-2 border-purple-400 text-purple-400 transition duration-300">
                                    {active === i ? <MinusIcon /> : <PlusIcon />}
                                </span>
                            </button>
                        </h3>
                        <AnimateHeight duration={600} height={active === i ? 'auto' : 0}>
                            <div
                                className="ac-panel"
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                            >
                                <p
                                    className="ac-text p-0! pb-5! font-jakarta! text-base! text-purple-500!"
                                    itemProp="text"
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </AnimateHeight>
                    </div>
                );
            })}
        </div>
    );
};

export default FAQuestions;
