// React will be used to build this js file
// useContext will be used to unsure that the users info can be displayed
// useState will be used to choose what info is being displayed
import { React, useState, useContext } from "react";

// will be used to retrieve session info
import UserSession from "../../session/UserSession";

// function used to display transaction record
export default function TransactionRecord(){
    // receive user data from the current user session
    const { userData } = useContext(UserSession);

    // ceate isVisible state
    // this will be used to set what sorting method is visible to the user
    const [isVisible, setVisible] = useState({ array: [0,0,0,0] });

    // store user data
    const user = userData.user;

    // store user records from user data
    const records = user.records;

    // Show sorted records
    const submit1 = async (e) => {
      try {
        // prevent default
        e.preventDefault();

        // this is used to render correct sorting settings for user
        setVisible([1,0,0,0]);

        // toggle off if already rendered
        // eslint-disable-next-line
        if (isVisible[0] == 1)
          setVisible([0,0,0,0]);
      
      // error handling
      } catch (err) {
      };
    }

    // Show sorted records
    const submit2 = async (e) => {
      try {
        // prevent default
        e.preventDefault();

        // this is used to render correct sorting settings for user
        setVisible([0,1,0,0]);

        // toggle off if already rendered
        // eslint-disable-next-line
        if (isVisible[1] == 1)
        setVisible([0,0,0,0]);

      // error handling
      } catch (err) { 
      };
    }

    // Show sorted records
    const submit3 = async (e) => {
      try {
        // prevent default
        e.preventDefault();

        // this is used to render correct sorting settings for user
        setVisible([0,0,1,0]);

        // toggle off if already rendered
        // eslint-disable-next-line
        if (isVisible[2] == 1)
        setVisible([0,0,0,0]);

      // error handling
      } catch (err) {  
      };
    }

    // Show sorted records
    const submit4 = async (e) => {
      try {
        // prevent default
        e.preventDefault();

        // update stae
        // this is used to render correct sorting settings for user
        setVisible([0,0,0,1]);

        // toggle off if already rendered
        // eslint-disable-next-line
        if (isVisible[3] == 1)
        setVisible([0,0,0,0]);

      // error handling
      } catch (err) {  
      };
    }

    // display transaction records based off of what the user has selected
    // the user must choose an option to display a sorted transaction record
    // only 1 version is viewable at a time
    // the viewer can click the button again to stop displating the current sorting method or,
    // they can click another sorting method button to view another sorting option
    return (
        <div className = "page">
        <h2>Perform Transaction</h2>
        <UserSession.Provider value = {{ isVisible, setVisible }}>
          <form className = "record_form"> {
              records ? (
                <>
                  <label htmlFor = "funds_options">Funds Sorting Options</label>
                  <button onClick = {submit1}>Increasing Funds</button> {
                    isVisible[0] ? ( render1(records)) : (null)
                  }
                  <button onClick = {submit2}>Decreasing Funds</button> {
                    isVisible[1] ? ( render2(records)) : (null)
                  }

                  <label htmlFor = "date_options">Date Sorting Options</label>
                  <button onClick = {submit3}>Increasing Date</button> {
                    isVisible[2] ? ( render3(records)) : (null)
                  }

                  <button onClick = {submit4}>Decreasing Date</button> {
                    isVisible[3] ? ( render4(records)) : (null)
                  }
                </>
                ) : (null)
          }
          </form>
        </UserSession.Provider>
      </div>
    );
};

// Increasing Funds
// this function renders the first sorting method
function render1(records) {
  // create arrays
  let tempdata = [];
  let data = [];

  // compare function used for sorting
  function compare1(a, b) {
    if (a.newTransaction.funds > b.newTransaction.funds) return 1;
    if (b.newTransaction.funds > a.newTransaction.funds) return -1;
  }

  // sort data by increasing funds
  tempdata = records.sort(compare1);

  // get ride of newTransaction objects
  // makes displaying the data easier
  for (var i = 0; i < tempdata.length; i++) {
    data.push({id: tempdata[i].newTransaction._id, merchantName: tempdata[i].newTransaction.merchantName, funds: tempdata[i].newTransaction.funds, date: tempdata[i].newTransaction.date});
  };

  // create the sorting display
  const list1 = data.map((d) => <li key = {d.date}> ID:{d.id}     |     Merchant Name:{d.merchantName}     |     Funds:{d.funds.toFixed(2)}     |     Date:{d.date}</li>);
  
  // display sorted transaction record
  return (
      <h3>
        {list1}
      </h3>
  )
};

// Decreasing Funds
// this function renders the second sorting method
function render2(records) {
  // create arrays
  let tempdata = [];
  let data = [];

  // compare function used for sorting
  function compare2(a, b) {
    if (a.newTransaction.funds < b.newTransaction.funds) return 1;
    if (b.newTransaction.funds < a.newTransaction.funds) return -1;
  }

  // sort data by decreasing funds
  tempdata = records.sort(compare2);

  // get ride of newTransaction objects
  // makes displaying the data easier
  for (var i = 0; i < tempdata.length; i++) {
    data.push({id: tempdata[i].newTransaction._id, merchantName: tempdata[i].newTransaction.merchantName, funds: tempdata[i].newTransaction.funds, date: tempdata[i].newTransaction.date});
  };

  // create the sorting display
  const list2 = data.map((d) => <li key = {d.date}> ID:{d.id}     |     Merchant Name:{d.merchantName}     |     Funds:{d.funds.toFixed(2)}     |     Date:{d.date}</li>);
  
  // display sorted transaction record
  return (
      <h3>
        {list2}
      </h3>
  )
};

// Increasing Date
// this function renders the third sorting method
function render3(records) {
  // create arrays
  let tempdata = [];
  let data = [];

  // compare function used for sorting
  function compare3(a, b) {
    if (a.newTransaction.date > b.newTransaction.date) return 1;
    if (b.newTransaction.date > a.newTransaction.date) return -1;
  }

  // sort data by increasing date
  tempdata = records.sort(compare3);

  // get ride of newTransaction objects
  // makes displaying the data easier
  for (var i = 0; i < tempdata.length; i++) {
    data.push({id: tempdata[i].newTransaction._id, merchantName: tempdata[i].newTransaction.merchantName, funds: tempdata[i].newTransaction.funds, date: tempdata[i].newTransaction.date});
  };

  // create the sorting display
  const list3 = data.map((d) => <li key = {d.date}> ID:{d.id}     |     Merchant Name:{d.merchantName}     |     Funds:{d.funds.toFixed(2)}     |     Date:{d.date}</li>);
  
  // display sorted transaction record
  return (
      <h3>
        {list3}
      </h3>
  )
};

// Decreasing Date
// this function renders the fourth sorting method
function render4(records) {
  // create arrays
  let tempdata = [];
  let data = [];

  // compare function used for sorting
  function compare4(a, b) {
    if (a.newTransaction.date < b.newTransaction.date) return 1;
    if (b.newTransaction.date < a.newTransaction.date) return -1;
  }

  // sort data by decreasing date
  tempdata = records.sort(compare4);

  // get ride of newTransaction objects
  // makes displaying the data easier
  for (var i = 0; i < tempdata.length; i++) {
    data.push({id: tempdata[i].newTransaction._id, merchantName: tempdata[i].newTransaction.merchantName, funds: tempdata[i].newTransaction.funds, date: tempdata[i].newTransaction.date});
  };

  // create the sorting display
  const list4 = data.map((d) => <li key = {d.date}> ID:{d.id}     |     Merchant Name:{d.merchantName}     |     Funds:{d.funds.toFixed(2)}     |     Date:{d.date}</li>);
  
  // display sorted transaction record
  return (
      <h3>
        {list4}
      </h3>
  )
};