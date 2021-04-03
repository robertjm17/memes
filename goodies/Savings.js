// React will be used to build this js file
// useContext will be used to unsure that the users Savings Account info can be displayed
import { React, useContext } from "react";

// this allows for the utilization of current user session info
import UserSession from "../../session/UserSession";

// displays the users Savings Account information
export default function Savings() {
  // utilize user data from current session 
  const { userData } = useContext(UserSession);

  // store required data
  const user = userData.user;
  
  // display Savings Account data
  return (
    <div className = "page">
      <h2>Savings Account Information</h2>
      <form className = "savings_form">
        <label htmlFor = "savings_account_id">Savings Account ID: {user.savingsAccount}</label>
        <label htmlFor = "savings_account_number">Savings Account Number: {user.savingsAccountNumber}</label>
        <label htmlFor = "funds_ammount">Funds Amount: {parseFloat(user.savingsAccountFunds).toFixed(2)}</label>
      </form>
    </div>
  );
};