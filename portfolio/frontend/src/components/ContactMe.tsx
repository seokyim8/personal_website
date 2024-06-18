import React from "react";
import { InView, useInView } from "react-intersection-observer";

const ContactMe = () => {
    const [ref, inView, entry] = useInView({
        threshold: 0.2,
    });

    return (
        <div id="projects" className="flex flex-col justify-center h-half" ref={ref}>
            <div className="font-semibold text-3xl flex flex-row justify-center">
                Contact Me
            </div>
        </div>
    );
}

export default ContactMe;