import React,{ useRef, useState, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";

const Projects = () => {
    const [height, setHeight] = useState(0);
    const ref2 = useRef<any>(null);
    const ref3 = useRef<any>(null);

    const [ref, inView, entry] = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if(ref2.current){
            setHeight(ref2.current.clientHeight);
        }
    }, []);

    return (
        <div id="projects" className="flex flex-col justify-evenly" ref={ref2}>
            <div ref={ref} />
            <div className={"absolute h-full w-screen bg-slate-100 z-0 " + (inView ? "in-wipe-left" : "")} style={{height: height}} />
            <div className="flex flex-col justify-center my-8">
                <div className="mx-auto text-4xl font-semibold font-mono z-10">Projects</div>
                <div className="mx-auto text-xl pt-4 mb font-mono z-10">Take a look at my works!</div>
            </div>

            <div className={"bg-slate-800 w-full max-w-5xl h-0.5 mx-auto " + (inView ? "in-wipe-right-faster" : "")} />

            <div className="flex flex-row justify-center gap-8 flex-wrap max-w-7xl mx-auto z-10 py-12">
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/fox_image.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl p-2" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono">Personal Website</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">React/Js/Ts, Python, HTML/CSS, Tailwind</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <div className="flex felx-row justify-around h-80">
                        <img src="https://github.com/seokyim8/Tetris/assets/49558316/2334edb3-d3af-4d02-a010-c4b349faee1a"
                            alt="Product" className="object-cover rounded-3xl p-8 w-1/2" />
                        <img src="https://github.com/seokyim8/Tetris/assets/49558316/00f62457-6435-44f3-bb47-b6f0df098025"
                            alt="Product" className="object-cover rounded-3xl p-8 w-1/2" />
                    </div>
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Self-learning Tetris AI</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Python, Pytorch, DQN, RL, ML, Neural Networks, Java</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/steam_data_pipeline.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl p-4" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Steam Data Pipeline</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Python, SQL, Docker, AWS, Selenium, Apache-superset</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <div className="flex flex-col justify-center h-80">
                        <img src="/static/images/tksm.png"
                            alt="Product" className="w-100 object-cover rounded-t-xl p-2" />
                    </div>
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Social Media Website for TEKKEN 8</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Python, React.js, Django, Github Action, AWS</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/black_knight.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl p-24" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Chess on Android</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Java, Android Studio</span>
                    </div>
                </a>
                <a href="#" className="flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2">
                    <img src="/static/images/photos_app.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl p-2" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono ">Photo Management App</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Java, JavaFX11, UML</span>
                    </div>
                </a>
            </div>

        </div>
    );
}

export default Projects;