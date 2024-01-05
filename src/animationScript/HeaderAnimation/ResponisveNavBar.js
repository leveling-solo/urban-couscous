import React, { useState } from 'react';



function NavbarElement(props) {
    return (
        <nav className='nav'
            style={{
                position: "relative",
                transition: " left 1s ease",
            }}>
            <ul className="navLinks"
                style={{
                    position: "absolute",
                    left: props.state ? "-93vw" : "0",
                    top: props.state ? "-9.1vh" : "0",
                }}

            >
                <li><a href="#home">Home</a></li>
                <li><a href="#home">Contact</a></li>
                <li><a href="#home">places</a></li>
                <li><a href="#home">About us</a></li>
            </ul>
        </nav>
    )
}


export const ToogleNavbar = () => {

    const [state, setState] = useState(false);
    function click() {
        setState(state => !state)

    }
    console.log(state)

    return (
        <div>
            <div className='listButton' onClick={click}>{state ? <i style={{
                color: "red",
            }}
                class="fa-sharp fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}</div>
            {state && <NavbarElement
                state={state}
            />}
        </div>
    )
}

export default ToogleNavbar

