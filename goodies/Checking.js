// React will be used to build this js file
// useContext will be used to unsure that the users Checking Account info can be displayed
import { React, useContext } from "react";

// this allows for the utilization of current user session info
import UserSession from "../../session/UserSession";

// displays the users Checking Account information
export default function Checking() {
  // utilize user data from current session 
  const { userData } = useContext(UserSession);
  
  // store required data
  const user = userData.user;
  
  // display Checking Account data
  return (
    <div className = "page">
      <h2>Checking Account Information</h2>
      <form className = "checking_form">
        <label htmlFor = "checking_account_id">Checking Account ID: {user.checkingAccount}</label>
        <label htmlFor = "checking_account_number">Checking Account Number: {user.checkingAccountNumber}</label>
        <label htmlFor = "funds_ammount">Funds Amount: {parseFloat(user.checkingAccountFunds).toFixed(2)}</label>
      </form>
    </div>
  );
};