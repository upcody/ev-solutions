import React from 'react';
import Star4RatingIcon from './Icons/Star4RatingIcon';

const TestimonialDescription = () => {
    return (
        <>
            <div className="inline-block">
                <Star4RatingIcon />
                <span className="sr-only">Ratting icon</span>
            </div>
            <p className="mt-4 text-base font-medium">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                randomised words which don&apos;t look even slightly believable.
            </p>
            <div className="mt-10">
                <h3 className="mb-1 text-base font-semibold text-purple-700 dark:text-purple-300">Allan Branch</h3>
                <span className="text-xs font-medium italic">CEO of Telegram inc.</span>
            </div>
        </>
    );
};

export default TestimonialDescription;
