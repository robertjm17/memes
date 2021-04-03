// React will be used to build this js file
// useState will be used to store user input
// useContext will be used to retrieve user data
import { React, useState, useContext } from "react";

// will be used to retrieve session info
import UserSession from "../../session/UserSession";

// import axios for requests to backend and server
import Axios from "axios";

// function used to perform transactions
export default function PerformTransaction() {
    // receive user data from the current user session
    const { userData } = useContext(UserSession);

    // stores user input for sender
    const [account1, inputSender] = useState();

    // stores uer input for receiver
    const [account2, inputReceiver] = useState();
      
    // stores user input for receiver
    let [funds, inputFunds] = useState();
    
    // used to perform transaction
    const user = userData.user.id;

    // used to stop invalid inputs
    const userinfo = userData.user;
    
    // default flag setting
    let isSavings = 0;
    let isChecking = 0;

    // transaction information
    // this data will be sent to backend to perform transaction
    // funds are restricted to 2 decimal places
    funds = parseFloat(funds).toFixed(2);
    const transaction = { user, account1, account2, funds };

    // transaction attempt
    const submit = async (e) => {
    try {
      // prevent default
      e.preventDefault();

      // reset flags
      isSavings = 0;
      isChecking = 0;

      // retrieve user accounts
      const savingsAccountNumber = userinfo.savingsAccountNumber;
      const checkingAccountNumber = userinfo.checkingAccountNumber;
      
      // attempt to login to the 
      // the userRoute handles all the data
      // first account must belong to user
      // eslint-disable-next-line
      if ((account1 == savingsAccountNumber || account1 == checkingAccountNumber)) {
        // check if account1 is the users Savings account
        // eslint-disable-next-line
        if (account1 == savingsAccountNumber) {
          isSavings = 1;
        }
        
        // check if account1 is the users Checking account
        else {
          isChecking = 1;
        }

        // accounts must be different
        // eslint-disable-next-line
        if ((account1 != account2)) {
          // funds cannot be negative or equal to zero
          if (funds > 0) {
            // funds must be less than or equal to the ammount of funds in the sender account
            if ((isSavings && funds <= userinfo.savingsAccountFunds) || (isChecking && funds <= userinfo.checkingAccountFunds)) {
              const postRequest = "http://localhost:5000/users/transaction";

              // lets backend stop transaction if account2 is not valid
              await Axios.post(postRequest, transaction);
      
              // reload page
              // is used so that buttons are corrected
              window.location.reload();
            }
          }
        }
      }

      // error handling
    } catch (err) {    
    };
  };
  
  // user input section
  // the user can input a predefined accounts username and password in order to log into the system
  // these must be correct for this to work
  // otherwise nothing occurs
  return (
    <div className = "page">
      <h2>Perform Transaction</h2>
      <form className = "transaction_form" onSubmit = {submit}>
        <label htmlFor = "sending_account">Sending Account</label>
        <input id = "sending_account" type = "sender" onChange = { (e) => inputSender(e.target.value) }/>
        <label htmlFor = "receiving_account">Receiving Account</label>
        <input id = "receiving_account" type = "receiver" onChange = { (e1) => inputReceiver(e1.target.value) }/>
        <label htmlFor = "funds_ammount">Funds Amount</label>
        <input id = "funds_ammount" type = "funds" onChange = { (e) => inputFunds(e.target.value) }/>
        <input type = "submit" value = "Perform Transaction"/>
      </form>
    </div>
  );
}