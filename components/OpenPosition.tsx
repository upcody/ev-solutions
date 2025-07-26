'use client';

import { useState } from 'react';
import LocationIcon from './Icons/LocationIcon';

const OpenPosition = () => {
    const [activeTab, setActiveTab] = useState<string>('all');

    const positions = [
        {
            position: 'WEB DEVELOPMENT',
            bgColor: 'bg-primary',
            location: 'Los angeles, California',
            title: 'SEO Content Writer',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-primary',
        },
        {
            position: 'CONTENT MANAGER',
            bgColor: 'bg-purple',
            location: 'Los angeles, California',
            title: 'Senior Content Manager',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-purple',
        },
        {
            position: 'WEB DEVELOPMENT',
            bgColor: 'bg-blue',
            location: 'Los angeles, California',
            title: 'Google analytics expert',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-blue',
        },
        {
            position: 'WEB DEVELOPMENT',
            bgColor: 'bg-green',
            location: 'Los angeles, California',
            title: 'SEO Content Writer',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-green',
        },
        {
            position: 'RESEARCH ANALYTICS',
            bgColor: 'bg-purple',
            location: 'Los angeles, California',
            title: 'Senior Content Manager',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-purple',
        },
        {
            position: 'CONTENT MANAGER',
            bgColor: 'bg-blue',
            location: 'Los angeles, California',
            title: 'Google analytics expert',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-blue',
        },
        {
            position: 'CONTENT MANAGER',
            bgColor: 'bg-red',
            location: 'Los angeles, California',
            title: 'SEO Content Writer',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-red',
        },
        {
            position: 'WEB DEVELOPMENT',
            bgColor: 'bg-green',
            location: 'Los angeles, California',
            title: 'Senior Content Manager',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-green',
        },
        {
            position: 'RESEARCH ANALYTICS',
            bgColor: 'bg-pink',
            location: 'Los angeles, California',
            title: 'Google analytics expert',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor ut dolor sit amet.',
            borderColor: 'hover:border-pink',
        },
    ];

    return (
        <div id="open-position">
            <div className="mx-auto pb-14 text-center lg:w-2/3">
                <h2 className="mb-5 text-[26px]/7 font-bold text-purple-700 dark:text-white">Open positions</h2>
                <p className="text-lg md:text-xl">We picked best specialists that are suited just for you.</p>
            </div>
            <div>
                <div className="overflow-y-auto pb-3 text-center">
                    <ul className="filters inline-flex gap-7 text-base font-semibold text-purple-700 dark:text-purple-600">
                        <li className={`filter ${activeTab === 'all' && 'active'}`} data-filter="all">
                            <button
                                type="button"
                                className="min-w-[166px] whitespace-nowrap rounded-lg border border-purple-300 bg-white p-4 duration-300 hover:border-primary! hover:bg-primary/5 hover:text-primary dark:border-purple-600 dark:bg-purple-900"
                                onClick={() => setActiveTab('all')}
                            >
                                All openings
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'RESEARCH ANALYTICS' && 'active'}`} data-filter="analytics">
                            <button
                                type="button"
                                className="min-w-[166px] whitespace-nowrap rounded-lg border border-purple-300 bg-white p-4 duration-300 hover:border-primary! hover:bg-primary/5 hover:text-primary dark:border-purple-600 dark:bg-purple-900"
                                onClick={() => setActiveTab('RESEARCH ANALYTICS')}
                            >
                                Analytics
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'CONTENT MANAGER' && 'active'}`} data-filter="content">
                            <button
                                type="button"
                                className="min-w-[166px] whitespace-nowrap rounded-lg border border-purple-300 bg-white p-4 duration-300 hover:border-primary! hover:bg-primary/5 hover:text-primary dark:border-purple-600 dark:bg-purple-900"
                                onClick={() => setActiveTab('CONTENT MANAGER')}
                            >
                                Content writer
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'WEB DEVELOPMENT' && 'active'}`} data-filter="development">
                            <button
                                type="button"
                                className="min-w-[166px] whitespace-nowrap rounded-lg border border-purple-300 bg-white p-4 duration-300 hover:border-primary! hover:bg-primary/5 hover:text-primary dark:border-purple-600 dark:bg-purple-900"
                                onClick={() => setActiveTab('WEB DEVELOPMENT')}
                            >
                                Development
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'SALES MARKETING' && 'active'}`} data-filter="sales">
                            <button
                                type="button"
                                className="min-w-[166px] whitespace-nowrap rounded-lg border border-purple-300 bg-white p-4 duration-300 hover:border-primary! hover:bg-primary/5 hover:text-primary dark:border-purple-600 dark:bg-purple-900"
                                onClick={() => setActiveTab('SALES MARKETING')}
                            >
                                Sales & marketing
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="projects grid gap-7 pt-10 md:grid-cols-2 lg:grid-cols-3 lg:pt-20">
                    {activeTab === 'all'
                        ? positions.map((position, index) => {
                              return (
                                  <div className="project" data-filter="content" data-aos="fade-up" data-aos-duration="1000" key={index}>
                                      <div
                                          className={`relative bottom-0 rounded-2xl border-2 border-purple-300 p-5 shadow-[0_0_80px_rgba(119,128,161,0.1)] duration-300 hover:bottom-2 ${position.borderColor} dark:border-purple-800 dark:shadow-none`}
                                      >
                                          <span className={`inline-block rounded-full ${position.bgColor} px-5 py-2 text-base font-bold uppercase text-white`}>
                                              {position.position}
                                          </span>
                                          <div className="mt-5 flex items-center gap-2">
                                              <div className="flex items-center gap-3 text-base font-medium">
                                                  <span className="text-primary">
                                                      <LocationIcon />
                                                  </span>
                                                  <span>{position.location}</span>
                                              </div>
                                              <div className="ms-auto inline-flex shrink-0 items-center gap-2.5 rounded-full border-2 border-purple-300 px-5 py-2.5 text-base font-semibold text-secondary dark:border-purple-700 dark:text-purple-500">
                                                  <span className="h-1.5 w-1.5 rounded-full bg-green"></span>
                                                  <span>Full time</span>
                                              </div>
                                          </div>
                                          <div className="pt-6 text-base font-medium">
                                              <h3 className="mb-2 text-xl font-bold text-purple-700 dark:text-white">{position.title}</h3>
                                              <p className="clear-left line-clamp-3 leading-relaxed">{position.description}</p>
                                              <a
                                                  href="#"
                                                  className="relative start-0 mt-7 inline-flex text-purple-700 duration-300 hover:start-2 hover:text-primary! dark:text-white"
                                              >
                                                  Learn more......
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : positions
                              .filter((position) => position.position === activeTab)
                              .map((position, index) => {
                                  return (
                                      <div
                                          className="project"
                                          data-filter="content"
                                          // data-aos="fade-up"
                                          // data-aos-duration="1000"
                                          key={index}
                                      >
                                          <div className="relative bottom-0 rounded-2xl border-2 border-purple-300 p-5 shadow-[0_0_80px_rgba(119,128,161,0.1)] duration-300 hover:bottom-2 hover:border-purple dark:border-purple-800 dark:shadow-none">
                                              <span
                                                  className={`inline-block rounded-full ${position.bgColor} px-5 py-2 text-base font-bold uppercase text-white`}
                                              >
                                                  {position.position}
                                              </span>
                                              <div className="mt-5 flex items-center gap-2">
                                                  <div className="flex items-center gap-3 text-base font-medium">
                                                      <span className="text-primary">
                                                          <LocationIcon />
                                                      </span>
                                                      <span>{position.location}</span>
                                                  </div>
                                                  <div className="ms-auto inline-flex shrink-0 items-center gap-2.5 rounded-full border-2 border-purple-300 px-5 py-2.5 text-base font-semibold text-secondary dark:border-purple-700 dark:text-purple-500">
                                                      <span className="h-1.5 w-1.5 rounded-full bg-green"></span>
                                                      <span>Full time</span>
                                                  </div>
                                              </div>
                                              <div className="pt-6 text-base font-medium">
                                                  <h2 className="mb-2 text-xl font-bold text-purple-700 dark:text-white">{position.title}</h2>
                                                  <p className="clear-left line-clamp-3 leading-relaxed">{position.description}</p>
                                                  <a
                                                      href="#"
                                                      className="relative start-0 mt-7 inline-flex text-purple-700 duration-300 hover:start-2 hover:text-primary! dark:text-white"
                                                  >
                                                      Learn more......
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                  );
                              })}
                </div>
            </div>
        </div>
    );
};

export default OpenPosition;
