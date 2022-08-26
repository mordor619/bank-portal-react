import React, {useState, useEffect} from 'react';
import NavbarLoggedIn from "../NavbarLoggedIn";
import axios from 'axios';
import Moment from "moment";
import { useNavigate } from "react-router-dom";
import './style.scss'

function Dashboard(props) {

  const [lastTransactionList, setLastTransactionList] =useState([]);
  const [accountNumber, setAccountNumber] = useState(null);
    const [creditAmount, setCreditAmount] = useState(null);
    const [debitAmount, setDebitAmount] = useState(null);
    const [balanceAmount, setBalanceAmount] = useState(null);
    
    const handleLastFiveTransaction = () => {

      const accountNumber = localStorage.getItem("userAccountNumber");
  
      const apiUrl =
        "https://localhost:44340/api/Dashboard/RecentTransaction?Accno=" +
        accountNumber;
  
      axios.get(apiUrl, accountNumber).then(result => {
        setLastTransactionList(result.data);
        console.log(lastTransactionList);
      });
    }
const handleCreditAmount=()=>{
  const accountNumber = localStorage.getItem("userAccountNumber");

  const apiUrl="https://localhost:44340/api/Dashboard/TotalCredit?Accno="+accountNumber;

  axios.get(apiUrl,accountNumber).then(result => {
    setCreditAmount(result.data);
   
  });
}

const handleDebitAmount=()=>{
  const accountNumber = localStorage.getItem("userAccountNumber");

  const apiUrl="https://localhost:44340/api/Dashboard/TotalDebit?Accno="+accountNumber;

  axios.get(apiUrl,accountNumber).then(result => {
    setDebitAmount(result.data);

  });
}

const handleBalanceAmount=()=>{
  const accountNumber = localStorage.getItem("userAccountNumber");

  const apiUrl="https://localhost:44340/api/Dashboard/TotalBalance?Accno="+accountNumber;

  axios.get(apiUrl,accountNumber).then(result => {
    setBalanceAmount(result.data);
   
  });
}

useEffect(() => {
  handleCreditAmount();
}, []);

useEffect(() => {
  handleDebitAmount();
}, []);

useEffect(() => {
  handleBalanceAmount();
}, []);

useEffect(() => {
  handleLastFiveTransaction();
}, []);

  return (
    <div>
      <NavbarLoggedIn />

      <br></br>
      <br></br>

      {/* change from here */}
         <div className='container'>
         <div className='row'>
  <div className='column'>
    <div className='card'>
      <h4>Total Balance</h4>
      <h5>Rs. {balanceAmount}</h5>
    </div>
  </div>
  <div className='column'>
    <div className='card'>
    <h4>Total Amount Credited</h4>
      <h5>Rs. {creditAmount}</h5>
    </div>
  </div>
  <div className='column'>
    <div className='card'>
    <h4>Total Amount Debited</h4>
      <h5>Rs. {debitAmount}</h5>
    </div>
  </div>
  </div>
</div>

<br></br>
      <br></br>
      
<div className='tablecontainer'>
<div className='card'>
<h2>Your Last Five Transaction</h2>
<table className="table">
              <thead className="table-header">
                <tr>
                  <th className="header__item">Transaction ID</th>
                  <th className="header__item">Amount</th>
                  <th className="header__item">Message</th>
                  <th className="header__item">Date</th>
                  <th className="header__item">Type</th>
                </tr>
              </thead>
              <tbody className="table-content">
                {lastTransactionList.map((items) => (
                  <tr className="table-row" key={items.transactionId}>
                    <td className="table-data">{items.transactionId}</td>
                    <td className="table-data">{items.amount}</td>
                    <td className="table-data">{items.message}</td>

                    <td className='table-data'>{Moment (items.date).utc().format('DD-MM-YYYY')}</td>
                    {/* <td className="table-data">{items.date}</td> */}
                    <td className="table-data">{items.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            </div>
         </div>
      
    
  );
}

export default Dashboard;

//end
