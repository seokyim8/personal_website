import React from "react";
import { InView, useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref, inView, entry } = useInView({ // Object destructuring
        threshold: 0.4,
    });

    const [ref2, inView2, entry2 ] = useInView({ // Array destructuring
        threshold: 0.4,
    });

    return (
        <div className="w-full h-screen justify-center flex flex-col font-sans">
            <div className={"text-3xl font-semibold flex justify-center font-mono w-full py-8 mb-8 transition duration-500 " + (inView2? "about_me_passed" : "")}>About Me</div>
            <div className="flex flex-row w-full h-screen justify-center" ref={ref2}>
                <div className="flex flex-col justify-start w-5/12">
                    <div className="flex flex-row justify-center gap-8">
                        <div className="my-auto flex flex-col">
                            <img src="/static/images/profile_picture.jpg" alt="profile_image" className="rounded-full" width={300} />
                        </div>
                        <div className="my-auto max-w-72 ml-10">
                            <div className="font-bold text-xl mb-4">
                                So who am I?
                            </div>
                            <span className="">
                                I'm an data science/software engineering enthusiast, a graudate from Rutgers University with a B.S. in Computer Science and minor data science.
                                My main fields of interest consist of machine learning (reinforcement learning, deep learning), data engineering and analysis, web applications,
                                mobile apps, video games, and much more.
                            </span>
                        </div>
                    </div>
                    <div className={"mx-auto flex flex-row justify-center gap-14 my-24 p-6 rounded-2xl transition duration-700 " + (inView2? "profile" : "")}>
                        <div className="flex flex-col gap-2 max-w-72">
                            <span className="font-semibold text-lg">Profile</span>
                            <span>Currently open for data science/software engineering related job opportunities. If you think I am a good fit,
                                contact me through <a href="#" className="text-teal-500 hover:text-teal-200">seokyim8@gmail.com</a>.
                            </span>
                            <span className="font-semibold text-lg mt-12">Full Name</span>
                            <span>Seok Yim (Noah)</span>
                            <span className="font-semibold text-lg mt-6">Birth Date</span>
                            <span>September 6, 2000</span>
                            <span className="font-semibold text-lg mt-6">Email</span>
                            <span>seokyim8@gmail.com</span>
                        </div>
                        <div className="flex flex-col gap-2 max-w-96">
                            <span className="font-semibold text-lg">Education</span>
                            <span className="font-semibold text-base">Rutgers University, New Brunswick</span>
                            <span className="text-sm">B.S. in Computer Science</span>
                            <span className="text-sm">Minor in data Science</span>
                            <div className="flex flex-row justify-start font-mono text-sm my-2 gap-16">
                                <span>GPA: 3.99</span>
                                <span>Major GPA: 4.00</span>
                            </div>
                            <span className="font-semibold text-lg mt-3">Related Courseworks</span>
                            <span className="text-sm flex flex-wrap gap-3">
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Deep Learning
                                </div>
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Software Methodology
                                </div>
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Systems Programming
                                </div>
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Computer Algorithms
                                </div>
                                <div className="rounded-full text-teal-400 bg-teal-400/10 hover:brightness-110 p-2.5 max-w-fit text-sm">
                                    Database Management
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-10"></div>
                <div ref={ref} className="flex flex-col justify-start w-96">
                    <span className="font-semibold text-lg mb-6 p-1">TECHNICAL SKILLS</span>
                    <div className="hover:bg-teal-50 p-2 rounded-xl mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-green-700 dark:text-white">Java</span>
                            <span className="text-sm font-medium text-green-700 dark:text-white">90%</span>
                        </div>
                        <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView? "in-wipe-right" : "")}>
                            <div className="bg-green-600 h-2.5 rounded-full w-11/12" />
                            <span>{String(inView)}</span>
                        </div>
                    </div>

                    <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-green-700 dark:text-white">Python</span>
                            <span className="text-sm font-medium text-green-700 dark:text-white">80%</span>
                        </div>
                        <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView? "in-wipe-right" : "")}>
                            <div className="bg-green-600 h-2.5 rounded-full w-4/5" />
                        </div>
                    </div>

                    <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">Js/Ts/React</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">75%</span>
                        </div>
                        <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView? "in-wipe-right" : "")}>
                            <div className="bg-blue-600 h-2.5 rounded-full w-3/4" />
                        </div>
                    </div>


                    <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">SQL</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">60%</span>
                        </div>
                        <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView? "in-wipe-right" : "")}>
                            <div className="bg-blue-600 h-2.5 rounded-full w-2/3" />
                        </div>
                    </div>

                    <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">HTML/CSS</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">60%</span>
                        </div>
                        <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 " + (inView? "in-wipe-right" : "")}>
                            <div className="bg-blue-600 h-2.5 rounded-full w-2/3" />
                        </div>
                    </div>

                    <div className="hover:bg-teal-50 p-1 rounded-xl mb-8">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">AWS</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">50%</span>
                        </div>
                        <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 "+ (inView? "in-wipe-right" : "")}>
                            <div className="bg-blue-600 h-2.5 rounded-full w-1/2" />
                        </div>
                    </div>

                    <div className="hover:bg-teal-50 p-1 rounded-xl mb-5">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">R</span>
                            <span className="text-sm font-medium text-blue-700 dark:text-white">50%</span>
                        </div>
                        <div className={"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 "+ (inView? "in-wipe-right" : "")}>
                            <div className="bg-blue-600 h-2.5 rounded-full w-1/2" />
                        </div>
                    </div>

                    <span className="font-semibold text-lg mt-2 p-1 mb-2">OTHER SKILLS</span>
                    <div className="p-1 flex flex-wrap gap-2 mb-2">
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

                    <span className="font-semibold text-lg mt-4 mb-2 p-1">CERTIFICATES</span>
                    <div className="hover:bg-teal-50 p-1 rounded-xl mb-6">
                        <div className="flex flex-col mb-1">
                            <span className="text-base font-medium text-blue-700 dark:text-white">AWS Certified Cloud Practicioner</span>
                            <span className="text-sm font-sm text-blue-700 dark:text-white">CLF-C02</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;