import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import About from "./About";
import "./stylecss.css";


export function Navigation() {


    useEffect(()=>{
        
            const aboutButton = document.getElementById('aboutButton');
            const projectButton = document.getElementById('projectButton');
            
        
            aboutButton.addEventListener('click', () => {
                aboutButton.classList.add('selected');
                projectButton.classList.remove('selected');
             
            });
        
            projectButton.addEventListener('click', () => {
                projectButton.classList.add('selected');
                aboutButton.classList.remove('selected');
    
            });
    
            
        
    },[])



    return (
        <div>
            <nav>
                <ul class="my-6 border-b py-2 flex flex-row gap-6 text-gray-400  text-xl">
                    <li id="aboutButton" className=""><Link to="/about">About</Link></li>
                    <li id="projectButton" className="selected"><Link to="/">Project</Link></li>
                </ul>
            </nav>
            
            <Routes>
                <Route path="/" element={<Projects />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}