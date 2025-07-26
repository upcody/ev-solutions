import BasicPricePlanIcon from './Icons/BasicPricePlanIcon';
import PinkTriangleIcon from './Icons/PinkTriangleIcon';
import WhiteTriangleIcon from './Icons/WhiteTriangleIcon';
import StandardPricePlanIcon from './Icons/StandardPricePlanIcon';
import YellowTriangleIcon from './Icons/YellowTriangleIcon';
import EnterprisePricePlanIcon from './Icons/EnterprisePricePlanIcon';
import GreenTriangleIcon from './Icons/GreenTriangleIcon';

const PricingChartOfPlan = () => {
    return (
        <div className="mx-auto max-w-[1142px] px-4">
            <div className="mx-auto pb-14 text-center lg:w-2/3 lg:pb-24">
                <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Choose your plan</h2>
                <p className="text-lg md:text-xl">Flexible Plans For Small To Fast-Growing Business</p>
            </div>
            <div className="grid gap-x-[30px] gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative flex flex-col justify-between rounded-[32px] border border-purple-200 bg-purple-100 px-5 pb-6 pt-9 dark:border-purple-800 dark:bg-secondary">
                    <div className="absolute -top-5 left-1/2 min-w-[110px] -translate-x-1/2 rounded-full bg-pink px-4 py-2 text-center font-bold text-secondary">
                        Elite
                    </div>
                    <div>
                        <div className="flex items-center justify-between gap-3 border-b border-purple-300 py-6 dark:border-purple-700">
                            <div className="inline-flex items-center gap-4">
                                <span>
                                    <BasicPricePlanIcon />
                                </span>
                                <div className="space-y-2 font-semibold">
                                    <h3 className="text-xl text-purple-700 dark:text-white">Basic</h3>
                                    <div className="text-sm text-purple-600">
                                        <span className="text-purple-400">05/</span> Service
                                    </div>
                                </div>
                            </div>
                            <span className="text-22 font-extrabold text-purple-700 dark:text-white">Free</span>
                        </div>
                        <div className="py-6">
                            <ul className="space-y-5 dark:text-purple-600">
                                <li className="flex gap-3 text-purple-700 dark:text-white">
                                    <span>
                                        <PinkTriangleIcon />
                                    </span>
                                    <span>Full Access Library</span>
                                </li>
                                <li className="flex gap-3 text-purple-700 dark:text-white">
                                    <span>
                                        <PinkTriangleIcon />
                                    </span>
                                    <span>Business & Finance Analyzing</span>
                                </li>
                                <li className="flex gap-3">
                                    <span>
                                        <WhiteTriangleIcon />
                                    </span>
                                    <span>Exclusive Templates</span>
                                </li>
                                <li className="flex gap-3">
                                    <span>
                                        <WhiteTriangleIcon />
                                    </span>
                                    <span>24 hour support</span>
                                </li>
                                <li className="flex gap-3">
                                    <span>
                                        <WhiteTriangleIcon />
                                    </span>
                                    <span>Customer Management</span>
                                </li>
                                <li className="flex gap-3">
                                    <span>
                                        <WhiteTriangleIcon />
                                    </span>
                                    <span>Sales of product</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-purple-300 pt-6 dark:border-purple-700">
                        <a href="#" className="btn block rounded-[10px] bg-purple-300 text-purple-700 hover:bg-secondary hover:text-white">
                            Choose your plan
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col justify-between rounded-[32px] border border-purple-200 bg-secondary px-5 pb-6 pt-9 dark:border-purple-900 dark:bg-purple-900">
                    <div className="absolute -top-5 left-1/2 min-w-[110px] -translate-x-1/2 rounded-full bg-yellow px-4 py-2 text-center font-bold text-secondary">
                        Special
                    </div>
                    <div>
                        <div className="flex items-center justify-between gap-3 border-b border-purple-700 py-6 text-white">
                            <div className="inline-flex items-center gap-4">
                                <span>
                                    <StandardPricePlanIcon />
                                </span>
                                <div className="space-y-2 font-semibold">
                                    <h3 className="text-xl">Standard</h3>
                                    <div className="text-sm text-purple-600">
                                        <span className="text-purple-400">05/</span> Service
                                    </div>
                                </div>
                            </div>
                            <span className="text-22 font-extrabold">$24</span>
                        </div>
                        <div className="py-6">
                            <ul className="space-y-5 dark:text-purple-600">
                                <li className="flex gap-3 text-white">
                                    <span>
                                        <YellowTriangleIcon />
                                    </span>
                                    <span>Full Access Library</span>
                                </li>
                                <li className="flex gap-3 text-white">
                                    <span>
                                        <YellowTriangleIcon />
                                    </span>
                                    <span>Business & Finance Analyzing</span>
                                </li>
                                <li className="flex gap-3 text-white">
                                    <span>
                                        <YellowTriangleIcon />
                                    </span>
                                    <span>Exclusive Templates</span>
                                </li>
                                <li className="flex gap-3 text-white">
                                    <span>
                                        <YellowTriangleIcon />
                                    </span>
                                    <span>24 hour support</span>
                                </li>
                                <li className="flex gap-3 text-purple-600">
                                    <span>
                                        <WhiteTriangleIcon />
                                    </span>
                                    <span>Customer Management</span>
                                </li>
                                <li className="flex gap-3 text-purple-600">
                                    <span>
                                        <WhiteTriangleIcon />
                                    </span>
                                    <span>Sales of product</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-purple-700 pt-6">
                        <a href="#" className="btn block rounded-[10px] bg-purple-700 hover:bg-white hover:text-secondary dark:hover:bg-white">
                            Choose your plan
                        </a>
                    </div>
                </div>
                <div className="relative flex flex-col justify-between rounded-[32px] border border-purple-200 bg-purple-100 px-5 pb-6 pt-9 dark:border-purple-800 dark:bg-secondary">
                    <div className="absolute -top-5 left-1/2 min-w-[110px] -translate-x-1/2 rounded-full bg-green px-4 py-2 text-center font-bold text-secondary">
                        Startup
                    </div>
                    <div>
                        <div className="flex items-center justify-between gap-3 border-b border-purple-300 py-6 dark:border-purple-700">
                            <div className="inline-flex items-center gap-4">
                                <span>
                                    <EnterprisePricePlanIcon />
                                </span>
                                <div className="space-y-2 font-semibold">
                                    <h3 className="text-xl text-purple-700 dark:text-white">Enterprise</h3>
                                    <div className="text-sm text-purple-600">
                                        <span className="text-purple-400">05/</span> Service
                                    </div>
                                </div>
                            </div>
                            <span className="text-22 font-extrabold text-purple-700 dark:text-white">$43</span>
                        </div>
                        <div className="py-6">
                            <ul className="space-y-5 dark:text-purple-600">
                                <li className="flex gap-3 text-purple-700 dark:text-white">
                                    <span>
                                        <GreenTriangleIcon />
                                    </span>
                                    <span>Full Access Library</span>
                                </li>
                                <li className="flex gap-3 text-purple-700 dark:text-white">
                                    <span>
                                        <GreenTriangleIcon />
                                    </span>
                                    <span>Business & Finance Analyzing</span>
                                </li>
                                <li className="flex gap-3 text-purple-700 dark:text-white">
                                    <span>
                                        <GreenTriangleIcon />
                                    </span>
                                    <span>Exclusive Templates</span>
                                </li>
                                <li className="flex gap-3 text-purple-700 dark:text-white">
                                    <span>
                                        <GreenTriangleIcon />
                                    </span>
                                    <span>24 hour support</span>
                                </li>
                                <li className="flex gap-3 text-purple-700 dark:text-white">
                                    <span>
                                        <GreenTriangleIcon />
                                    </span>
                                    <span>Customer Management</span>
                                </li>
                                <li className="flex gap-3 text-purple-700 dark:text-white">
                                    <span>
                                        <GreenTriangleIcon />
                                    </span>
                                    <span>Sales of product</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-purple-300 pt-6 dark:border-purple-700">
                        <a href="#" className="btn block rounded-[10px] bg-purple-300 text-purple-700 hover:bg-secondary hover:text-white">
                            Choose your plan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingChartOfPlan;
