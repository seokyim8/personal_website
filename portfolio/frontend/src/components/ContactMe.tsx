import React from "react";
import { InView, useInView } from "react-intersection-observer";

const ContactMe = () => {
    const [ref, inView, entry] = useInView({
        threshold: 0.2,
    });

    return (
        <div id="projects" className="flex flex-col justify-center h-half gap-32 text-white bg-slate-800" ref={ref}>
            <div className="flex flex-col justify-evenly">
                <div className="text-xl font-mono mx-auto text-teal-100">
                    Contact
                </div>
                <div className="font-semibold text-4xl flex flex-row justify-center">
                    I Look Forward to Connecting With You.
                </div>
                <div className="text-xl font-sans mx-auto mt-3">
                    I'd love to talk to you!
                </div>
            </div>
            <div className="flex flex-row justify-evenly">
                <a href="#" className="flex flex-col justify-around items-center gap-2 transition duration-300 hover:bg-slate-700  hover:brightness-110 hover:shadow-2xl p-4 rounded-2xl">
                    <svg className="h-14 w-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>Email Me At</span>
                    <div className="text-teal-500">seokyim8@gmail.com</div>
                </a>

                {/* <a href="#" className="flex flex-col justify-around items-center gap-2 transition duration-300 hover:bg-slate-700  hover:brightness-110 hover:shadow-2xl p-4 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="currentColor" viewBox="0 0 640 512">
                        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"></path>
                    </svg>
                    <span>Message Me Here</span>
                    <div className="text-teal-500">Discord</div>
                </a> */}

                <a target="_blank" href="https://www.linkedin.com/in/seok-yim-04aba71b9/" className="flex flex-col justify-around items-center gap-2 transition duration-300 hover:bg-slate-700  hover:brightness-110 hover:shadow-2xl p-4 rounded-2xl">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14 transition-colors" aria-hidden="true">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </div>
                    <span>Find Me Here</span>
                    <div className="text-teal-500">LinkedIn Profile</div>
                </a>
            </div>
        </div>
    );
}

export default ContactMe;