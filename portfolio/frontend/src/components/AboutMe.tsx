import React from "react";
import { InView, useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref, inView, entry } = useInView({ // Object destructuring
        threshold: 0.2,
    });

    const [ref2, inView2, entry2] = useInView({ // Array destructuring
        threshold: 0.4,
    });

    // TODO: CHANGE THE ABOUT ME FROM FLEX TO GRID FORMATTING!
    return (
        <div id="about_me" className="flex flex-col">
            <div className={"text-4xl font-semibold flex justify-center font-mono w-full mt-54 py-10 mb-16 transition duration-500 " + (inView2 ? "about_me_passed" : "")}>About Me</div>
            <div className="grid max-w-7xl grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-3 font-sans mx-auto my-auto gap-x-32 gap-y-8" ref={ref2}>
                <div className="row-span-1 col-span-1 md:col-span-2 grid grid-cols-1 grid-rows-2 md:grid-rows-1 grid-flow-col md:grid-flow-row md:grid-cols-2">
                    <div className="mx-auto my-auto">
                        <img src="/static/images/profile_picture.jpg" alt="profile_image" className="rounded-full my-auto" width={250} />
                    </div>
                    <div className="mx-auto md:my-auto">
                        <div className="font-bold text-xl py-2">
                            Let me introduce myself...
                        </div>
                        <div className="max-w-80">
                            I am a data science/software engineering enthusiast from Rutgers University.
                            My main fields of interest consist of machine learning (reinforcement learning, deep learning), data engineering and analysis, web applications,
                            mobile apps, video games, and much more.
                        </div>
                    </div>
                </div>
                <div className="col-span-1 row-span-2 md:row-span-3 grid grid-rows-3 my-auto mx-auto md:py-20" ref={ref}>
                    <div className="row-span-2">
                        <div id="percentage_box" className="mb-8">
                            <span className="font-semibold text-lg mb-6 p-1">TECHNICAL SKILLS</span>
                            <div className="hover:bg-teal-50 p-2 rounded-xl mb-8">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-green-700 dark:text-white">Java</span>
                                    <span className="text-sm font-medium text-green-700 dark:text-white">90%</span>
                                </div>
                                <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView ? "in-wipe-right" : "")}>
                                    <div className="bg-green-600 h-2.5 rounded-full w-11/12" />
                                </div>
                            </div>

                            <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-green-700 dark:text-white">Python</span>
                                    <span className="text-sm font-medium text-green-700 dark:text-white">80%</span>
                                </div>
                                <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView ? "in-wipe-right" : "")}>
                                    <div className="bg-green-600 h-2.5 rounded-full w-4/5" />
                                </div>
                            </div>

                            <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-blue-700 dark:text-white">SQL</span>
                                    <span className="text-sm font-medium text-blue-700 dark:text-white">75%</span>
                                </div>
                                <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView ? "in-wipe-right" : "")}>
                                    <div className="bg-blue-600 h-2.5 rounded-full w-3/4" />
                                </div>
                            </div>


                            <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-blue-700 dark:text-white">JS/TS/React</span>
                                    <span className="text-sm font-medium text-blue-700 dark:text-white">60%</span>
                                </div>
                                <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView ? "in-wipe-right" : "")}>
                                    <div className="bg-blue-600 h-2.5 rounded-full w-2/3" />
                                </div>
                            </div>

                            <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-blue-700 dark:text-white">HTML/CSS</span>
                                    <span className="text-sm font-medium text-blue-700 dark:text-white">60%</span>
                                </div>
                                <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView ? "in-wipe-right" : "")}>
                                    <div className="bg-blue-600 h-2.5 rounded-full w-2/3" />
                                </div>
                            </div>

                            <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-blue-700 dark:text-white">AWS</span>
                                    <span className="text-sm font-medium text-blue-700 dark:text-white">60%</span>
                                </div>
                                <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView ? "in-wipe-right" : "")}>
                                    <div className="bg-blue-600 h-2.5 rounded-full w-2/3" />
                                </div>
                            </div>

                            <div className="hover:bg-teal-50 p-1 rounded-xl mb-5">
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-blue-700 dark:text-white">R</span>
                                    <span className="text-sm font-medium text-blue-700 dark:text-white">50%</span>
                                </div>
                                <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView ? "in-wipe-right" : "")}>
                                    <div className="bg-blue-600 h-2.5 rounded-full w-1/2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-2 flex flex-col justify-around">
                        <div className="">
                            <span className="font-semibold text-lg mt-2 p-1">OTHER SKILLS</span>
                            <div className="py-2 flex flex-wrap gap-2 mb-2">
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Pytorch
                                </div>
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Leetcode
                                </div>
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Docker
                                </div>
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Regression Analysis
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <span className="font-semibold text-lg mb-2 p-1">CERTIFICATES</span>
                            <div className="hover:bg-teal-50 p-1 rounded-xl mb-6">
                                <div className="flex flex-col mb-1">
                                    <span className="text-base font-medium text-blue-700 dark:text-white">AWS Certified Cloud Practicioner</span>
                                    <span className="text-sm font-sm text-blue-700 dark:text-white">CLF-C02</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-rows-5 gap-2 row-span-1 md:row-span-2 md:col-span-2 md:grid-cols-2 md:grid-rows-3 grid-flow-col md:gap-8 pl-40 md:px-0">
                    <div>
                        <div className=" bg-slate-100 rounded-xl py-2 px-4 font-bold text-lg">Profile</div>
                        <div className="p-2 mt-3">
                            Currently open for data science/software engineering related job opportunities. If you think I am a good fit,
                            please contact me through <a href="#" className="text-teal-500 hover:text-teal-200">seokyim8@gmail.com</a>.
                        </div>
                    </div>

                    <div className="">
                        <div className=" bg-slate-100 rounded-xl py-2 px-4 font-bold text-lg">Personal Info</div>
                        <div className="">
                            <div className="font-semibold text-base px-2 pt-2 mt-3">Full Legal Name</div>
                            <div className="px-2 font-mono text-sm">
                                Seok Yim
                            </div>
                            <div className="font-semibold text-base px-2 pt-2 mt-2">Birth Date</div>
                            <div className="px-2 font-mono text-sm">
                                September 6, 2000
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" bg-slate-100 rounded-xl py-2 px-4 font-bold text-lg">Spoken Languages</div>
                        <div className="p-2 mt-3">
                            <div className="font-mono text-sm">
                                <div>
                                    English: Fluent
                                </div>
                                <div>
                                    Korean: &nbsp;Native
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" bg-slate-100 rounded-xl py-2 px-4 font-bold text-lg">Education</div>
                        <div className="p-2 mt-3">
                            <div className="font-semibold text-base">Rutgers University, New Brunswick</div>
                            <div className="text-sm mt-2">B.S. in Computer Science</div>
                            <div className="text-sm">Minor in data Science</div>
                        </div>

                        <div className="font-mono text-sm p-2 mt-2 flex flex-row justify-between">
                            <span>GPA: 3.99</span>
                            <span>Major GPA: 4.00</span>
                        </div>
                    </div>

                    <div>
                        <div className=" bg-slate-100 rounded-xl py-2 px-4 font-bold text-lg">Related Courseworks</div>
                        <span className="text-sm flex flex-wrap gap-3 p-2 mt-3">
                            <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-xs">
                                Deep Learning
                            </div>
                            <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-xs">
                                Software Methodology
                            </div>
                            <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-xs">
                                Systems Programming
                            </div>
                            <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-xs">
                                Computer Algorithms
                            </div>
                            <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-xs">
                                Database Management
                            </div>
                            <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-xs">
                                Regression Methods
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;