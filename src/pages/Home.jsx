import React from "react";
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";
import { Navigation } from "../components/Navigation";
import Footer from "../components/Footer";



export function Home() {
    return (
        <div className="w-100% h-auto dark bg-skin-primary min-h-screen font-sans font-normal tracking-wide">
            <Navbar />
            <div className=" w-[895px] m-auto px-3 ">
                <Section />
                <Navigation />
                <Footer />
            </div>

        </div>
    )
}