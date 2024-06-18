import React from "react";
import { InView, useInView } from "react-intersection-observer";

const Projects = () => {
    const [ref, inView, entry] = useInView({
        threshold: 0.2,
    });

    return (
        <div id="projects" className="flex flex-col justify-evenly h-screen" ref={ref}>
            <div className={"absolute h-full w-screen bg-slate-100 z-0 " + (inView ? "in-wipe-left" : "")} />
            <div className="flex flex-col justify-center">
                <div className="mx-auto text-4xl font-semibold font-mono z-10">Projects</div>
                <div className="mx-auto text-xl pt-4 mb font-mono z-10">Take a look at my works!</div>
            </div>

            <div className={"bg-slate-800 w-full max-w-5xl h-0.5 mx-auto " + (inView? "in-wipe-right-faster" : "")}/>

            <div className="flex flex-row justify-center gap-8 flex-wrap max-w-7xl mx-auto pb-4 z-10">
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/fox_image.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono">Personal Website</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">React/Js/Ts, Python, HTML/CSS, Tailwind</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/fox_image.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Self-learning Tetris AI</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Python, Pytorch, DQN, RL, ML, Neural Networks, Java</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/fox_image.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Steam Data Pipeline</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Python, SQL, Docker, AWS, Selenium, Apache-superset</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/fox_image.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Social Media Website for TEKKEN 8</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Python, React.js, Django, Github Action, AWS</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/fox_image.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Chess on Android</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Java, Android Studio</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/fox_image.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Photo Management App</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Java, JavaFX11</span>
                    </div>
                </a>
            </div>

        </div>
    );
}

export default Projects;