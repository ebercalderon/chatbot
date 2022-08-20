import React from 'react';
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const FeaturedTopicSection = () => {

    return (
        <div className="bg-white dark:bg-slate-800">
            <section className='container mx-auto pb-20 py-10 lg:px-10'>
                <h1 className='text-5xl font-bold text-center mb-10 text-violet-800 px-2 dark:text-violet-400'>Installation Guides</h1>

                <div className='grid grid-rows-1 sm:grid-cols-3 my-5 mx-5 bg-slate-100 rounded-md shadow-md py-6 dark:bg-slate-700'>
                    <div className='col-span-2 px-4 sm:px-8'>
                        <h1 className='text-2xl font-bold text-violet-800 my-2 dark:text-violet-400'>Subtitle</h1>
                        <p className='text-slate-500 dark:text-slate-200'>
                            Lorem ipsum dolor sit amet. Qui quod architecto ducimus voluptatem ea tenetur ipsum vel iusto fugit et labore adipisci cum quia voluptatibus est quia culpa.
                            Ut suscipit molestias ut eaque voluptas vel omnis inventore id accusamus numquam. Nam numquam beatae ab repudiandae reprehenderit est totam culpa.
                        </p>
                    </div>

                    <div className='col-span-2 sm:col-span-1 ps-22 sm:pr-8 flex justify-center sm:justify-end items-center'>
                        <NavLink to="/">
                            <button className='rounded-3xl bg-teal-600 text-white font-semibold py-2 px-6 hover:bg-slate-700 dark:hover:bg-slate-800 hover:text-white duration-300 inline-flex items-center justify-center'>
                                Read More <BsArrowRight className='ml-1' />
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className='grid grid-rows-1 sm:grid-cols-3 my-5 mx-5 bg-slate-100 rounded-md shadow-md py-6 dark:bg-slate-700'>
                    <div className='col-span-2 px-4 sm:px-8'>
                        <h1 className='text-2xl font-bold text-violet-800 my-2 dark:text-violet-400'>Subtitle</h1>
                        <p className='text-slate-500 dark:text-slate-200'>
                            Lorem ipsum dolor sit amet. Qui quod architecto ducimus voluptatem ea tenetur ipsum vel iusto fugit et labore adipisci cum quia voluptatibus est quia culpa.
                            Ut suscipit molestias ut eaque voluptas vel omnis inventore id accusamus numquam. Nam numquam beatae ab repudiandae reprehenderit est totam culpa.
                        </p>
                    </div>

                    <div className='col-span-2 sm:col-span-1 ps-22 sm:pr-8 flex justify-center sm:justify-end items-center'>
                        <NavLink to="/">
                            <button className='rounded-3xl bg-teal-600 text-white font-semibold py-2 px-6 hover:bg-slate-700 dark:hover:bg-slate-800 hover:text-white duration-300 inline-flex items-center justify-center'>
                                Read More <BsArrowRight className='ml-1' />
                            </button>
                        </NavLink>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default FeaturedTopicSection;