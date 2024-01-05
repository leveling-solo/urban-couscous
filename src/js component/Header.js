import { useEffect, useState } from "react"
import logo from "../images/Header-Adventrue-logo.png"

import TypingAnimation from "../animationScript/HeaderAnimation/TypingAnimation"
import ToogleNavBar from "../animationScript/HeaderAnimation/ResponisveNavBar"

//  css for computer  responsive 
import "../Computer-Responsive-css/header.css"

//  css for Tab responsive 
import "../Tab-Responsive-css/header.css"
// css for Tab-lanscape mode  responsive
import "../Tab-Responsive-LanscapeMode-css/Landscapeheader.css"

//  css for mobile-responsive 
import "../Mobile-responsive/MobileHeader.css"



function Navbar() {
    return(
    <nav>
        <ul className="nav-links" >
            <li><a href="#home">Home</a></li>
            <li><a href="#home">Contact</a></li>
            <li><a href="#home">places</a></li>
            <li><a href="#home">About us</a></li>
        </ul>
    </nav>
    )
}

export default function Header() {
    const [screenSize ,setscreenSize  ] =  useState(window.innerWidth)
     
    useEffect(()=>{
        function measeure(){
                setscreenSize(window.innerWidth)
        }

        window.addEventListener('resize', measeure)

        // clean up any memory leeaks 
       return  ()=>{
        window.removeEventListener('resize' , measeure); 
       }
    },[])
    return (
        <div className="box1">
            <div className="Navbar">
                <TypingAnimation />
                {screenSize <= "600" ? <ToogleNavBar /> :
                    <Navbar />
                }
            </div>
            <div className="about-heading">
                <img src={logo} alt="logo" />
                <div className="media-handle-container">
                    <h2>Hiking In Norway</h2>
                    <div className="media-handle">
                        <ul className="media-handle-list">
                            <li><a href="#home"><i class="fa-brands fa-square-facebook"></i></a></li>
                            <li><a href="#home"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#home"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#home"><i class="fa-brands fa-pinterest"></i></a></li>
                        </ul>
                        <button className="btn">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}