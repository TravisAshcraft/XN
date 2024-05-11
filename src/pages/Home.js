
// MainContent.js
import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import JoinMembership from "../sections/JoinMembership";


function Home() {
    return (
        <div className="App">
            <Hero/>
            <About/>
            <JoinMembership/>
            {/* Add any other components or sections as needed */}
        </div>

    );
}

export default Home;