import React from "react";
import ReactDOM from "react-dom/client";
import AboutMe from "./AboutMe.tsx";
import Projects from "./Projects.tsx";
import Profile from "./Profile.tsx";
import Navbar from "./Navbar.tsx";
import Leftbar from "./Leftbar.tsx";
import Experiences from "./Experiences.tsx";
import ContactMe from "./ContactMe.tsx";

const App = () =>{
    return (
        <div className="w-full h-full">
            <Navbar />
            <Profile />
            <AboutMe />
            <Experiences />
            <Projects />
            <Leftbar />
            <ContactMe />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("app")!); // # ! is for Typescript's null check
root.render(<App />);

export default App;