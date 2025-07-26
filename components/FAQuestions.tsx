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
                            <div className="ac-panel" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                <p className="ac-text p-0! pb-5! font-jakarta! text-base! text-purple-500!" itemProp="text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
