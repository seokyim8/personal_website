import React from "react";
import HorizontalBar from "./HorizontalBar.tsx";

const Profile = () => {
    return (
        <div id="home" className="bg-slate-800 antialiased w-full h-screen flex flex-col justify-center selection:bg-teal-300 text-white" transition-style="in:circle:hesitate">
            <div className="flex flex-row justify-center gap-32">
                <div className="text-2xl font-mono flex flex-col justify-center fill-animation">
                    <p>Hello, this is</p>
                    <p className="font-semibold text-6xl mb-4">Noah Yim</p>
                    <div className="text-base font-semibold w-full flex flex-row gap-2" transition-style="appear">
                        <div className="rounded-full text-teal-300 bg-teal-400/10 hover:brightness-150 p-2.5 max-w-fit">
                            Data Scientist
                        </div>
                        <div className="rounded-full text-teal-300 bg-teal-400/10 hover:brightness-150 p-2.5 max-w-fit">
                            Data Engineer
                        </div>
                        <div className="rounded-full text-teal-300 bg-teal-400/10 hover:brightness-150 p-2.5 max-w-fit">
                            Software Engineer
                        </div>
                    </div>
                    <span className="text-lg mt-6 typed">I build tools for data anlysis, machine learning, </span>
                    <span className="text-lg mt-1 typed-delayed">and engaging digital experiences.</span>
                    <HorizontalBar />
                    <a href="#about_me" className="rounded-full bg-white opacity-50 w-fit h-fit p-4 flex flex-row justify-center" transition-style="appear_half">
                        <svg className="w-9 h-9 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                        </svg>
                    </a>
                </div>
                <div className="flex flex-col justify-center">
                    <img src="/static/images/fox_image.png" width={500} className="z-10"/>
                </div>
            </div>
        </div>
    );
}

export default Profile;