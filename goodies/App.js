// we need to import react for the front end to function
// we need useEffect and useState to perform actions and save current user stae information respectively
import { React, useEffect, useState } from 'react';

// these are usefull tools for constructing the front end
import { BrowserRouter, Switch, Route } from "react-router-dom";

// axios will be used to post and get information from this web apps backend
import Axios from "axios";

// this is used for user session info
import UserSession from './session/UserSession';

// this is the path that displays the homepage
import Home from './components/pages/Home';

// this is the path that allows for users to login into the system
import Login from './components/header/Login';

// this is the path that displays the users savings account
import Savings from './components/pages/Savings';

// this is the path that displays the users checking account
import Checking from './components/pages/Checking';

// this is the path that is used to give users the ability to perform transactions
import PerformTransaction from './components/pages/PerformTransaction';

// this is the path that is used to display past transactions to the user
import TransactionRecord from './components/pages/TransactionRecord';

// this is used to create headers in the front end of our web app
import Header from './components/header/Header';

// this is the styling used for this web app
import "./appStyle.css";

// this is our maibn app function
// this is the heart of our web app and governs all routes
export default function App() {
    // default user info when system is running
    const [userData, setUserData] = useState({ token: undefined, user: 0 });

    // check if user is logged in
    useEffect(() => {
        const checkLoginStatus = async () => {
            // get login token
            let token = localStorage.getItem("login_token");

            // if token does not exist make empty token
            if (token == null)
            {
                // create variable in local storage
                localStorage.setItem("login_token", "")

                // set token in this useEffect to emty string
                token = "";
            }
          
            // post request to check loggin status
            // the loggedin route can be viewed in the backend userRouter file
            const postRequest = "http://localhost:5000/users/loggedin";

            // get request to recevie data from the systems backend
            // the getdata route can be viewed in the backend userRouter file
            const getRequest = "http://localhost:5000/users/getdata";

            // check to see if token is valid
            const tokenCheck = await Axios.post(postRequest, null, { headers: { "login_token" : token }});
        
            // if token is valid get user data from system
            if (tokenCheck.data) {
                // gets user data from system
                const userCheck = await Axios.get(getRequest, { headers: { "login_token": token }});

                // this sets the userdata for the session to the information retrieved from the backend of the system
                setUserData({ token, user: userCheck.data });
              }
            };
        
        // perform check
        checkLoginStatus();
    }, []);

    // this actually "creates" the app
    // this section connects each of the routes that the app handles and connectes them with their respective components
    return <>
        <BrowserRouter>
            <UserSession.Provider value = {{ userData, setUserData }}>
                <Header />
                    <Switch>
                        <Route exact path = "/" component = {Home} />
                        <Route exact path = "/savings" component = {Savings} />
                        <Route exact path = "/checking" component = {Checking} />
                        <Route exact path = "/transaction_record" component = {TransactionRecord} />
                        <Route exact path = "/perform_transaction" component = {PerformTransaction} />
                        <Route exact path = "/login" component = {Login} />
                    </Switch>
            </UserSession.Provider>
        </BrowserRouter>
    </>;
}

