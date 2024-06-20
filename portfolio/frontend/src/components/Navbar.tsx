import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-slate-800 sticky top-0 duration-300 justify-center flex pt-4 z-20 flex-col mb-0">
            <div className="items-center justify-center hidden w-full md:flex md:w-auto mx-4 gap-3">
                <ul className="flex flex-row gap-7 my-2 text-md" transition-style="appear">
                    <li>
                        <a href="#home" className="py-2 px-2 text-white rounded-lg hover:text-teal-200 hover:bg-slate-800 transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about_me" className="py-2 px-2 text-white rounded-lg hover:text-teal-200 hover:bg-slate-800 transition">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#experiences" className="py-2 px-2 text-white rounded-lg hover:text-teal-200 hover:bg-slate-800 transition">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="py-2 px-2 text-white rounded-lg hover:text-teal-200 hover:bg-slate-800 transition">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/static/images/Resume for 2024 - Jun 20th, 2024.docx" className="py-2 px-2 text-white rounded-lg hover:text-teal-200 hover:bg-slate-800 transition font-semibold">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
            <div className="block md:hidden justify-center">
                <a href="#" className="p-4 text-white rounded hover:text-teal-200 transition font-semibold">
                    Resume
                </a>
            </div>
            <div className="bg-white w-full h-0.5 mt-3" transition-style="appear" />
        </nav>
    );
}

export default Navbar;