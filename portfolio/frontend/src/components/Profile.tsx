import React from "react";

const Profile = () => {
    return (
        <div className=" bg-slate-900 antialiased w-full h-screen p-2 flex flex-row justify-evenly selection:bg-teal-300 text-white" transition-style="in:circle:hesitate">
            <div className="text-2xl font-mono flex flex-col justify-center fill-animation">
                <p>Hello, this is</p>
                <p className="font-semibold text-6xl mb-4">Noah Yim</p>
                <div className="text-base font-semibold w-full flex flex-row gap-2">
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
                <span className="text-lg mt-6">I build tools for data anlysis, machine learning, </span>
                <span className="text-lg mt-1">and engaging digital experiences.</span>
            </div>
            <div className="flex flex-col justify-center">
                <img src="/static/images/fox-blurred.png" width={400} />
            </div>
        </div>
    );
}

export default Profile;