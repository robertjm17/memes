// React will be used to build this js file
import React from 'react';

// this function is used to display the default Home page
// this page is viewable whether the user is logged in or not
export default function Home() {
    return (
        <div>
            <h3>| Welcome to the Mern Banking System!</h3>
            <h3>|</h3>
            <h3>|-To login to the system please press the LOGIN Button.</h3>
            <h3>|</h3>
            <h3>|-Once you have logged into the system you can do the following.</h3>
            <h3>|**Perform Transactions.</h3>
            <h3>|**View Transaction Record.</h3>
            <h3>|**View Savings Account Information.</h3>
            <h3>|**View Checking Account Information.</h3>
            <h3>|</h3>
            <h3>|-To logout of the system please press the LOGOUT button.</h3>
        </div>
    )   
};