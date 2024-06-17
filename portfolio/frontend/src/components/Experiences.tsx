import React from "react";
import { InView, useInView } from "react-intersection-observer";

const Experiences = () => {
    const [ref, inView, entry] = useInView({
        threshold: 0.2,
    });

    return (
        <div id="projects" className="flex flex-col justify-center h-screen" ref={ref}>
            <div className="font-semibold text-3xl flex flex-row justify-center">
                Experiences
            </div>
        </div>
    );
}

export default Experiences;