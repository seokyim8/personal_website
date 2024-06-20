import React, { useRef, useState, useEffect, MouseEventHandler } from "react";
import { InView, useInView } from "react-intersection-observer";

const Projects = ({ projectClicked, setProjectClicked }) => {
    const [height, setHeight] = useState(0);
    const [first_projectClicked, setFirstProjectClicked] = useState(false);
    const [second_projectClicked, setSecondProjectClicked] = useState(false);
    const [third_projectClicked, setThirdProjectClicked] = useState(false);
    const [fourth_projectClicked, setFourthProjectClicked] = useState(false);
    const [fifth_projectClicked, setFifthProjectClicked] = useState(false);
    const [sixth_projectClicked, setSixthProjectClicked] = useState(false);

    const ref2 = useRef<any>(null);
    const ref3 = useRef<any>(null);

    const [ref, inView, entry] = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (ref2.current) {
            setHeight(ref2.current.clientHeight);
        }
    }, []);

    function toggle_project_details(e) {
        let element = e.currentTarget
        if (element && element.id) {
            show_description(element)
        }
        setProjectClicked((prev: boolean) => !prev);
    }

    function show_description(element) {
        if (element.id == "close_project_description") {
            setFirstProjectClicked(false);
            setSecondProjectClicked(false);
            setThirdProjectClicked(false);
            setFourthProjectClicked(false);
            setFifthProjectClicked(false);
            setSixthProjectClicked(false);
        }
        else if (element.id == "first_project" || element.id == "second_project" || element.id == "third_project" ||
            element.id == "fourth_project" || element.id == "fifth_project" || element.id == "sixth_project") {
            if (first_projectClicked || second_projectClicked || third_projectClicked
                || fourth_projectClicked || fifth_projectClicked || sixth_projectClicked) {
                setFirstProjectClicked(false);
                setSecondProjectClicked(false);
                setThirdProjectClicked(false);
                setFourthProjectClicked(false);
                setFifthProjectClicked(false);
                setSixthProjectClicked(false);
            } else {
                console.log(element.id)
                switch (element.id) {
                    case "first_project":
                        setFirstProjectClicked(true);
                        break;
                    case "second_project":
                        setSecondProjectClicked(true);
                        break;
                    case "third_project":
                        setThirdProjectClicked(true);
                        break;
                    case "fourth_project":
                        setFourthProjectClicked(true);
                        break;
                    case "fifth_project":
                        setFifthProjectClicked(true);
                        break;
                    case "sixth_project":
                        setSixthProjectClicked(true);
                }
            }
        }
    }

    return (
        <div id="projects" className="flex flex-col justify-evenly" ref={ref2}>
            <div ref={ref} />
            <div className={"absolute h-full w-screen bg-slate-100 z-0 " + (inView ? "in-wipe-left" : "")} style={{ height: height }} />
            <div className="flex flex-col justify-center my-8">
                <div className="mx-auto text-4xl font-semibold font-mono z-10">Projects</div>
                <div className="mx-auto text-xl pt-4 mb font-mono z-10">Take a look at my works!</div>
            </div>

            <div className={"w-full max-w-5xl h-0.5 mx-auto " + (inView ? "in-wipe-right-faster" : "")} />

            <button id="close_project_description" className={"ml-20 z-50 " + (projectClicked ? "visible" : "invisible")} onClick={toggle_project_details}>
                <svg className="h-16 w-16 text-black-500" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>



            {/* Projects Container*/}
            <div className="flex flex-row justify-center gap-8 flex-wrap max-w-7xl mx-auto z-10 py-12">
                {/* First Project */}
                <button id="first_project" className={"flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 \
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2 " + (projectClicked ? "opacity-20" : "opacity-100")} onClick={toggle_project_details}>
                    <img src="/static/images/fox_image.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl p-2" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono flex flex-row justify-start">Personal Website</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">React/Js/Ts, Python, HTML/CSS, Tailwind</span>
                    </div>
                </button>

                <div className={"project_description bg-slate-700 rounded-2xl p-6 show_project_description " + (first_projectClicked ? "absolute z-40" : "hidden z-0")}>
                    <div className="w-full h-full flex flex-col my-auto">
                        <p className="text-lg font-bold text-white capitalize font-mono flex felx-row justify-start">Personal Website</p>
                        <span className="text-gray-300 mr-3 text-xs capitalize font-mono ">React/Js/Ts, Python, HTML/CSS, Tailwind, Django, Docker, AWS</span>
                        <a target="_blank" href="https://github.com/seokyim8/personal_website"
                            className="text-base text-teal-500 capitalize font-mono flex felx-row justify-start hover:underline hover:text-teal-200 transition duration-200">
                            https://github.com/seokyim8/personal_website
                        </a>
                        <div className="text-white h-full flex flex-col justify-center">
                            You are currently looking at this website!
                        </div>
                    </div>
                </div>

                {/* Second Project */}
                <button id="second_project" className={"flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 \
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2 " + (projectClicked ? "opacity-20" : "opacity-100")} onClick={toggle_project_details}>
                    <div className="flex felx-row justify-around h-80">
                        <img src="https://github.com/seokyim8/Tetris/assets/49558316/2334edb3-d3af-4d02-a010-c4b349faee1a"
                            alt="Product" className="object-cover rounded-3xl p-8 w-1/2" />
                        <img src="https://github.com/seokyim8/Tetris/assets/49558316/00f62457-6435-44f3-bb47-b6f0df098025"
                            alt="Product" className="object-cover rounded-3xl p-8 w-1/2" />
                    </div>
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono flex flex-row justify-start">Self-learning Tetris AI</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono ">Python, Pytorch, DQN, RL, ML, Neural Networks, Java</span>
                    </div>
                </button>

                <div className={"project_description bg-slate-700 rounded-2xl p-6 show_project_description " + (second_projectClicked ? "absolute z-40" : "hidden z-0")}>
                    <div className="w-full h-full flex flex-col my-auto">
                        <p className="text-lg font-bold text-white capitalize font-mono flex felx-row justify-start">Self-learning Tetris AI</p>
                        <span className="text-gray-300 mr-3 text-xs capitalize font-mono flex flex-row justify-start">Python, Pytorch, DQN, RL, ML, Neural Networks, Java</span>
                        <a target="_blank" href="https://github.com/seokyim8/personal_website"
                            className="text-base text-teal-500 capitalize font-mono flex felx-row justify-start hover:underline hover:text-teal-200 transition duration-200">
                            https://github.com/seokyim8/Tetris
                        </a>
                        <div className="flex felx-row justify-around h-72 w-full bg-white rounded-2xl my-4 mx-auto">
                            <img src="https://github.com/seokyim8/Tetris/assets/49558316/2334edb3-d3af-4d02-a010-c4b349faee1a"
                                alt="Product" className="object-cover rounded-3xl p-8 w-1/2" />
                            <img src="https://github.com/seokyim8/Tetris/assets/49558316/00f62457-6435-44f3-bb47-b6f0df098025"
                                alt="Product" className="object-cover rounded-3xl p-8 w-1/2" />
                        </div>
                        <div className="text-white h-full flex flex-col justify-center">
                            Implemented a tetris game in Java and Python. Developed a self-learning AI thorugh DQN (reinforced learning)
                            and trained it enough such that the AI can play forever without getting game-over.
                        </div>
                    </div>
                </div>

                {/* Third Project */}
                <button id="third_project" className={"flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 \
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2 " + (projectClicked ? "opacity-20" : "opacity-100")} onClick={toggle_project_details}>
                    <div className="flex felx-row justify-around h-80">
                        <video className="px-2" loop muted autoPlay>
                            <source src="/static/images/steam.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono flex flex-row justify-start ">Steam Data Pipeline</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono flex flex-row justify-start">Python, SQL, Docker, AWS, Selenium, Apache-superset</span>
                    </div>
                </button>

                <div className={"project_description bg-slate-700 rounded-2xl p-6 show_project_description " + (third_projectClicked ? "absolute z-40" : "hidden z-0")}>
                    <div className="w-full h-full flex flex-col my-auto">
                        <p className="text-lg font-bold text-white capitalize font-mono flex felx-row justify-start">Steam Data Pipeline</p>
                        <span className="text-gray-300 mr-3 text-xs capitalize font-mono ">Python, SQL, Docker, AWS, Selenium, Apache-superset, Scrapy, RDS</span>
                        <a target="_blank" href="https://github.com/seokyim8/personal_website"
                            className="text-base text-teal-500 capitalize font-mono flex felx-row justify-start hover:underline hover:text-teal-200 transition duration-200">
                            https://github.com/seokyim8/Steam_data_pipeline
                        </a>
                        <div className="flex felx-row justify-around h-72 mx-auto rounded-2xl bg-white p-4 my-4 ">
                            <video className="px-2" loop muted autoPlay>
                                <source src="/static/images/steam.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="text-white h-full flex flex-col justify-center">
                            A data engineering project for constructing a pipeline that automatically scrapes, cleans,
                            stores and displays data from the web on a daily basis. Integrated Apache Superset for data
                            visualization.
                        </div>
                    </div>
                </div>

                {/* Fourth Project */}
                <button id="fourth_project" className={"flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 \
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2 " + (projectClicked ? "opacity-20" : "opacity-100")} onClick={toggle_project_details}>
                    <div className="flex flex-col justify-center h-80">
                        <img src="/static/images/tksm.png"
                            alt="Product" className="w-100 object-cover rounded-t-xl p-2" />
                    </div>
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono flex flex-row justify-start">Social Media Website for TEKKEN 8</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono flex flex-row justify-start">Python, React.js, Django, Github Action, AWS</span>
                    </div>
                </button>

                <div className={"project_description bg-slate-700 rounded-2xl p-6 show_project_description " + (fourth_projectClicked ? "absolute z-40" : "hidden z-0")}>
                    <div className="w-full h-full flex flex-col my-auto">
                        <p className="text-lg font-bold text-white capitalize font-mono flex felx-row justify-start">Social Media Website for TEKKEN 8</p>
                        <span className="text-gray-300 mr-3 text-xs capitalize font-mono ">Python, React.js, Django, Github Actions, AWS, Docker, Webpack, Tailwind, SQLite, NLTK</span>
                        <a target="_blank" href="https://github.com/seokyim8/personal_website"
                            className="text-base text-teal-500 capitalize font-mono flex felx-row justify-start hover:underline hover:text-teal-200 transition duration-200">
                            https://github.com/seokyim8/Tekken8_social_media_platform
                        </a>
                        <div className="flex flex-col justify-center h-96 w-96 bg-white rounded-2xl p-4 my-4 mx-auto">
                            <img src="/static/images/tksm.png"
                                alt="Product" className="w-100 object-cover rounded-t-xl p-2" />
                        </div>
                        <div className="text-white h-full flex flex-col justify-center">
                            A social media website for talking about the game TEKKEN 8. Utilized Django for the backend and React with Tailwind for the frontend.
                            Features include signing up, creating a post, auto-censoring of toxic posts, viewing other people's profiles and more.
                        </div>
                    </div>
                </div>


                {/* Fifth Project */}
                <button id="fifth_project" className={"flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 \
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2 " + (projectClicked ? "opacity-20" : "opacity-100")} onClick={toggle_project_details}>
                    <img src="/static/images/black_knight.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl p-24" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono flex flex-row justify-start">Chess on Android</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono flex flex-row justify-start">Java, Android Studio</span>
                    </div>
                </button>

                <div className={"project_description bg-slate-700 rounded-2xl p-6 show_project_description " + (fifth_projectClicked ? "absolute z-40" : "hidden z-0")}>
                    <div className="w-full h-full flex flex-col my-auto">
                        <p className="text-lg font-bold text-white capitalize font-mono flex felx-row justify-start">Chess on Android</p>
                        <span className="text-gray-300 mr-3 text-xs capitalize font-mono ">Java, Android Studio</span>
                        <a target="_blank" href="https://github.com/seokyim8/personal_website"
                            className="text-base text-teal-500 capitalize font-mono flex felx-row justify-start hover:underline hover:text-teal-200 transition duration-200">
                            https://github.com/seokyim8/Chess
                        </a>
                        <div className="flex flex-col justify-center h-72 w-72 bg-white rounded-2xl p-4 my-4 mx-auto">
                            <img src="/static/images/black_knight.png"
                                alt="Product" className="h-64 w-64 object-cover rounded-t-xl p-24" />
                        </div>
                        <div className="text-white h-full flex flex-col justify-center">
                            Built a two-player chess app for Android. Supports move selections, recording games, interactive game-replays, etc.
                        </div>
                    </div>
                </div>

                {/* Sixth Project */}
                <button id="sixth_project" className={"flex flex-col justify-evenly bg-white shadow-md rounded-xl duration-500 \
                hover:scale-110 hover:shadow-xl h-96 w-96 pb-2 " + (projectClicked ? "opacity-20" : "opacity-100")} onClick={toggle_project_details}>
                    <img src="/static/images/photos_app.png"
                        alt="Product" className="h-80 object-cover rounded-t-xl p-2" />
                    <div className="px-4 py-2 flex flex-col">
                        <p className="text-lg font-bold text-black capitalize font-mono flex flex-row justify-start">Photo Management App</p>
                        <span className="text-gray-400 mr-3 text-xs capitalize font-mono flex flex-row justify-start">Java, JavaFX11, UML</span>
                    </div>
                </button>

                <div className={"project_description bg-slate-700 rounded-2xl p-6 show_project_description " + (sixth_projectClicked ? "absolute z-40" : "hidden z-0")}>
                    <div className="w-full h-full flex flex-col my-auto">
                        <p className="text-lg font-bold text-white capitalize font-mono flex felx-row justify-start">Photo Management App</p>
                        <span className="text-gray-300 mr-3 text-xs capitalize font-mono ">Java, JavaFX11, UML</span>
                        <a target="_blank" href="https://github.com/seokyim8/personal_website"
                            className="text-base text-teal-500 capitalize font-mono flex felx-row justify-start hover:underline hover:text-teal-200 transition duration-200">
                            https://github.com/seokyim8
                        </a>
                        <div className="flex flex-col justify-center h-96 w-96 bg-white rounded-2xl p-4 my-4 mx-auto">
                            <img src="/static/images/photos_app.png"
                                alt="Product" className="h-72 object-cover rounded-t-xl p-2" />
                        </div>
                        <div className="text-white h-full flex flex-col justify-center">
                            A desktop app with GUI that allows users to store and manage their image files.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;