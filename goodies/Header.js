// React will be used to build this js file
import React from 'react';

// this allows for the clicking fo the header to route to the root of the web app
// in the case of this web app the route located at "/" is the Home page
import { Link } from "react-router-dom";

// this allows for the displaying of Buttons from the Buttons.js file
// the buttons displayed change based off of the loggin status of the user
import Buttons from "../header/Buttons";

// this is the title header for the entire program
// it is up at all times regardless of page
// clicking on it will lead to the websites root "/"
// buttons displayed to the right of the "MERN Banking App" header changed based off of loggin status
export default function Header() {
    return (
        <header id = "header">
            <Link to = "/">
                <h1 className = "appName">MERN Banking App</h1>
            </Link>
            <Buttons/>
        </header>
    )
}
