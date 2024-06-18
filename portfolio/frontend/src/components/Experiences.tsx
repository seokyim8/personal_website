import React from "react";
import { InView, useInView } from "react-intersection-observer";

const Experiences = () => {
    const [ref, inView, entry] = useInView({
        threshold: 0.2,
    });

    return (
        <div id="experiences" className="flex flex-col justify-evenly h-screen" ref={ref}>
            <div className="font-semibold text-4xl mx-auto">
                Experiences / Activities
            </div>

            <div className="flex flex-col justify-center mx-auto">
                <span className="font-bold text-xl">Experiences</span>
                <div className="flex flex-col justify-start font-mono text-sm mt-2 gap-2">
                    <span className="font-semibold text-base">Undergraduate Research Assistant at Rutgers</span>
                    <span>
                        Tested Kubernetes-based benchmark applications for a research group dealing with reducing delays within
                        containerized systems.
                    </span>
                </div>
                
                <span className="font-bold text-xl mt-16">Activities / Awards</span>
                <div className="flex flex-col justify-start font-mono text-sm mt-2 gap-2">
                    <span className="font-semibold text-base">1st place in the 2021 Rutgers Quinlan Competition for data predictions</span>
                    <span>
                        Achieved the highest average prediction accuracy amongst 140 total participants in 3 separate data prediction challenges by building models in R.
                    </span>
                </div>
                <div className="flex flex-col justify-start font-mono text-sm mt-6 gap-2">
                    <span className="font-semibold text-base">Hall of Fame in Rutgers Data 101</span>
                    <span>
                        Qualified as one of the Data 101 course's Hall of fame members through academic excellence (1st place in class) and top scores in data science-based projects.
                    </span>
                </div>
                <div className="flex flex-col justify-start font-mono text-sm mt-6 gap-2">
                    <span className="font-semibold text-base">2nd place in the KSA 2019 Tetris Tournament</span>
                    <span>
                        Placed second in the tetris-game tournament hosted by KSA & aKDPHi at Rutgers.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Experiences;