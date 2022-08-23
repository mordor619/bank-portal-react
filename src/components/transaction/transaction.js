import React, {useState, useEffect} from 'react';
import NavbarLoggedIn from "../NavbarLoggedIn";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './style.scss'

function Transaction(props) {

  let navigate = useNavigate();

const [transactionList, setTransactionList] =useState([]);
  const [accountNumber, setAccountNumber] = useState(null);
    const [amount, setAmount] = useState(null);
    const [message, setMessage] = useState(null);
    const [date, setDate] = useState(null);
    const [type, setType] = useState(null);

 
  const handleTransaction  = () => {
    
        //https://localhost:44340/api/Transaction/GetTransactionByAccno?Accno=0088824045
        const accountNumber=localStorage.getItem('userAccountNumber');
        const apiUrl = "https://localhost:44340/api/Transaction/GetTransactionByAccno?Accno="+accountNumber;

        // const userData = { accountNumber:accountNumber,password:password };  

        axios.get(apiUrl,accountNumber)  
            .then((result) => {  
            // console.log(result.data);
            setTransactionList(result.data);
           
            }
            )


}
useEffect(()=>{
  handleTransaction();
})
  return (
    <div>
      <NavbarLoggedIn />

      <br></br>

      <h3 style={{ color: "white" }}>
        Here you can see list of transactions sorted month-wise and year-wise
      </h3>
      <br></br>

{/* dropdown for month starts */}
      <div class="btn-group dropright">
        <button style={{backgroundColor: "#5679C0"}} type="button" class="btn btn-secondary">
          Select Month
        </button>
        <button
          style={{backgroundColor: "#CCCCFF"}}
          type="button"
          class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropright</span>
        </button>
        <div style={{ maxHeight: "140px" }} class="dropdown-menu pre-scrollable">
            <a class="dropdown-item" href="#">January</a>
            <a class="dropdown-item" href="#">February</a>
            <a class="dropdown-item" href="#">March</a>
            <a class="dropdown-item" href="#">April</a>
            <a class="dropdown-item" href="#">May</a>
            <a class="dropdown-item" href="#">June</a>
            <a class="dropdown-item" href="#">July</a>
            <a class="dropdown-item" href="#">August</a>
            <a class="dropdown-item" href="#">September</a>
            <a class="dropdown-item" href="#">October</a>
            <a class="dropdown-item" href="#">November</a>
            <a class="dropdown-item" href="#">December</a>
        </div>
      </div>

      {/* dropdown for month ends */}

      {/* dropdown for year starts */}

      <div style={{marginLeft: "100px"}} class="btn-group dropright">
        <button style={{backgroundColor: "#5679C0"}} type="button" class="btn btn-secondary">
          Select Year
        </button>
        <button
          style={{backgroundColor: "#CCCCFF"}}
          type="button"
          class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropright</span>
        </button>
        <div style={{ maxHeight: "140px" }} class="dropdown-menu pre-scrollable">
            <a class="dropdown-item" href="#">2017</a>
            <a class="dropdown-item" href="#">2018</a>
            <a class="dropdown-item" href="#">2019</a>
            <a class="dropdown-item" href="#">2020</a>
            <a class="dropdown-item" href="#">2021</a>
            <a class="dropdown-item" href="#">2022</a>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      {/* dropdown for year ends */}

      {/* table starts */}

      
<div class="container">
	<table className='table'>
    <thead className='table-header'>
      <tr >
        <th className='header__item'>Amount</th>
        <th className='header__item'>Message</th>
        <th className='header__item'>Date</th>
        <th className='header__item'>Type</th>
      </tr>
    </thead>
    <tbody className='table-content'>
      {
        transactionList.map(items=>(
          <tr className='table-row' key={items.accountNumber}>
            <td className='table-data'>{items.amount}</td>
            <td className='table-data'>{items.message}</td>
            <td className='table-data'>{items.date}</td>
            <td className='table-data'>{items.type}</td>
          </tr>
        ))
      }
    </tbody>

  </table>


	</div>

{/* table ends */}
    </div>
  );
}

export default Transaction;

//end
