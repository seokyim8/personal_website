import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="bg-slate-900 sticky duration-300 justify-end flex flex-wrap p-4">
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-4 gap-3">
                    <ul className="flex flex-row gap-7 my-2 text-md">
                        <li>
                            <a href="#" className="py-2 px-2 text-white rounded-lg hover:text-teal-200 hover:bg-slate-800 transition">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="#" className="py-2 px-2 text-white rounded-lg hover:text-teal-200 hover:bg-slate-800 transition">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" className="py-2 px-2 text-white rounded-lg hover:text-teal-200 hover:bg-slate-800 transition font-semibold">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="block md:hidden">
                    <a href="#" className="p-4 text-white rounded hover:text-teal-200 transition font-semibold">
                        Resume
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;