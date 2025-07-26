'use client';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import MinusIcon from './Icons/MinusIcon';
import PlusIcon from './Icons/PlusIcon';

const FAQPageAnimateHeight = () => {
    const [active, setActive] = useState<any>(1);

    const queries = [
        {
            id: 1,
            question: 'Do you offer a free trial?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            question: 'How do i create an account?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            question: 'What protections does your system use to protect our data?',
            answer: 'Data protection strategies typically involve multi-step processes that define how security measures are implemented and maintained.',
        },
        {
            id: 4,
            question: 'What type of support is included with this service?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 5,
            question: 'Do you have premium plans for products?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 6,
            question: 'Who else is using nobble tool?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 7,
            question: 'Do you offer a free trial?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 8,
            question: 'How do i create an account?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 9,
            question: 'What protections does your system use to protect our data?',
            answer: 'Data protection strategies typically involve multi-step processes that define how security measures are implemented and maintained.',
        },
        {
            id: 10,
            question: 'What type of support is included with this service?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 11,
            question: 'Do you have premium plans for products?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ];

    const handleAccordionClick = (id: number) => {
        setActive((prevActive: number) => (prevActive === id ? null : id));
    };
    return (
        <div className="accordion-container grid gap-x-16 lg:grid-cols-2" itemScope itemType="https://schema.org/FAQPage">
            <div className="space-y-10">
                {queries.map((faq: any, i: number) => {
                    return (
                        i % 2 == 0 && (
                            <div
                                className={`ac border-gray/20 border-0 border-b-2 border-purple-300! bg-transparent dark:border-purple-900! ${
                                    active === faq.id ? 'is-active' : ''
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
                                        onClick={() => handleAccordionClick(faq.id)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="trigger-icon mt-1 grid h-[22px] w-[22px] shrink-0 place-content-center rounded-full border-2 border-purple-400 text-purple-400 transition duration-300">
                                            {active === faq.id ? <MinusIcon /> : <PlusIcon />}
                                        </span>
                                    </button>
                                </h3>
                                <AnimateHeight duration={600} height={active === faq.id ? 'auto' : 0}>
                                    <div className="ac-panel" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="ac-text p-0! pb-5! font-jakarta! text-base! text-purple-500!" itemProp="text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </AnimateHeight>
                            </div>
                        )
                    );
                })}
            </div>
            <div className="mt-10 space-y-10 lg:mt-0">
                {queries.map((faq: any, i: number) => {
                    return (
                        i % 2 !== 0 && (
                            <div
                                className={`ac border-gray/20 border-0 border-b-2 border-purple-300! bg-transparent dark:border-purple-900! ${
                                    active === faq.id ? 'is-active' : ''
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
                                        onClick={() => handleAccordionClick(faq.id)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="trigger-icon mt-1 grid h-[22px] w-[22px] shrink-0 place-content-center rounded-full border-2 border-purple-400 text-purple-400 transition duration-300">
                                            {active === faq.id ? <MinusIcon /> : <PlusIcon />}
                                        </span>
                                    </button>
                                </h3>
                                <AnimateHeight duration={600} height={active === faq.id ? 'auto' : 0}>
                                    <div className="ac-panel" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                        <p className="ac-text p-0! pb-5! font-jakarta! text-base! text-purple-500!" itemProp="text">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </AnimateHeight>
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default FAQPageAnimateHeight;
