import './App.css';
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Cerosole from "./Components/Cerosole/Cerosole";
import AboutUs from "./Components/AboutUs/AboutUs";
import Emu from "./Components/Emu/Emu";
import Skill from "./Components/Skill/Skill";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import LastFooter from "./Components/Footer/LastFooter";
import React from "react";


function App() {
    return (
        <div>
            <div className={'container'}>
                <Header/>
                <Banner/>
            </div>
            <Cerosole/>
            <AboutUs/>
            <div className={'p-24 bg-blue-50 p'}>
                <Emu/>
            </div>
            <div className={'container'}>
                <Skill/>
            </div>

            <div className={"bg-blue-50 pb-10"}>
                <div className={"container"}>
                    <Services/>
                </div>
            </div>


            <div className={"bg-white py-10"}>
                <div className={"container"}>
                    <Footer/>
                </div>
            </div>


            <div className={"bg-sky-900 py-10"}>
                <div className={"container"}>
                    <LastFooter/>
                </div>
            </div>

        </div>
    );
}

export default App;
