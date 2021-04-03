// React will be used to build this js file
// useContext will be used to unsure that,
// session data is used to change the buttons being displayed to the user
import { React, useContext } from 'react';

// used for url history
// will help us change url
import { useHistory } from "react-router-dom";

// user session information
// will allow us to change what buttons display
import UserSession from "../../session/UserSession";

// all of the buttons in the web application
export default function Buttons() {
    // used to change url routes
    const history = useHistory();

    // use session info to update buttons
    const { userData, setUserData } = useContext(UserSession);

    // login button
    const login = () => history.push("/login");
    
    // logout button
    const logout = () => {
        // reset user
        setUserData({ token: undefined, user: undefined }); 
        localStorage.setItem("login_token", "");

        // return to homepage
        history.push("/");

        // reload page
        window.location.reload();
    };

    // savings account button
    const savings = () => history.push("/savings");

    // checking account button
    const checking = () => history.push("/checking");

    // view transaction record button
    const transactionRecord = () => history.push("/transaction_record");

    // perform transaction button
    const performTransaction = () => history.push("/perform_transaction");

    // displays all buttons
    // if a user is logged in the buttons displayed are changed
    // this is used by checking if there is a json-web-token present
    // in this web app the token is saved on the local device and is called login_token
    // if no token is present then there is no user logged in
    return (
    <nav className = "Buttons"> {
        userData.user ? (
            <>
            <button onClick = {savings}>Savings Account</button>
            <button onClick = {checking}>Checking Account</button>
            <button onClick = {transactionRecord}>Transaction Record</button>
            <button onClick = {performTransaction}>Perform Transaction</button>
            <button onClick = {logout}>LOGOUT</button>
            </>
            ) : (
            <button onClick = {login}>LOGIN</button>
            )
        }
    </nav>
    )
};