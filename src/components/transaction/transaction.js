import React, { useState, useEffect } from "react";
import NavbarLoggedIn from "../NavbarLoggedIn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Moment from "moment";

function Transaction(props) {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionPerPage, setTransactionPerPage] = useState(4);
  //pagination ends

  const [transactionList, setTransactionList] = useState([]);

  const [permTransactionList, setPermTransactionList] = useState([]);

  const [disabledBtn, setDisabledBtn] = useState(true);

  const [remFilterText, setRemFilterText] = useState("Filter");

  const handleTransaction = () => {
    //https://localhost:44340/api/Transaction/GetTransactionByAccno?Accno=0088824045

    const accountNumber = localStorage.getItem("userAccountNumber");

    const apiUrl =
      "https://localhost:44340/api/Transaction/GetTransactionByAccno?Accno=" +
      accountNumber;

    axios.get(apiUrl, accountNumber).then((result) => {
      //console.log(result.data);

      const apiData = result.data;

      //setApiData(result.data);

      for (let d of apiData) {
        d.date = new Date(d.date).toLocaleString("en-us", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }

      //console.log(apiData)

      setTransactionList(apiData);
      setPermTransactionList(apiData);
    });

    setDisabledBtn(true);

    setRemFilterText("Filter");
  };

  const indexOfLastTransaction = currentPage * transactionPerPage;

  const indexOfFirstTransaction = indexOfLastTransaction - transactionPerPage;
  const currentTransaction = transactionList.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(transactionList.length / transactionPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  const setPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const filterBasedOnMonth = (month) => {
    const filteredDataMonth = [];

    for (let t of permTransactionList) {
      const m = new Date(t.date).toLocaleString("en-us", { month: "long" });

      //console.log("m => ", m)
      //console.log("month => ", month)

      if (m == month) {
        filteredDataMonth.push(t);
      }
    }

    //  console.log(filteredDataMonth)

    setTransactionList(filteredDataMonth);

    setDisabledBtn(false);

    setRemFilterText(month);
  };

  const filterBasedOnYear = (year) => {
    const filteredDataYear = [];

    for (let t of permTransactionList) {
      const y = new Date(t.date).toLocaleString("en-us", { year: "numeric" });

      if (y == year) {
        filteredDataYear.push(t);
      }
    }

    setTransactionList(filteredDataYear);

    setDisabledBtn(false);

    setRemFilterText(year);
  };

  useEffect(() => {
    handleTransaction();
  }, []);

  return (
    <div id="transactionPageDiv">
      <NavbarLoggedIn />

      <br></br>

      <h3 style={{ margin: "0", color: "white" }}>
        Here you can see list of transactions sorted month-wise and year-wise
      </h3>
      <br></br>

      {/* dropdown for month starts */}
      <div class="btn-group dropright">
        <button
          style={{ backgroundColor: "#5679C0" }}
          type="button"
          class="btn btn-secondary"
        >
          Select Month
        </button>
        <button
          style={{ backgroundColor: "#CCCCFF" }}
          type="button"
          class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropright</span>
        </button>
        <div
          style={{ maxHeight: "140px" }}
          class="dropdown-menu pre-scrollable"
        >
          <a
            onClick={() => {
              filterBasedOnMonth("January");
            }}
            class="dropdown-item"
            href="#"
          >
            January
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("February");
            }}
            class="dropdown-item"
            href="#"
          >
            February
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("March");
            }}
            class="dropdown-item"
            href="#"
          >
            March
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("April");
            }}
            class="dropdown-item"
            href="#"
          >
            April
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("May");
            }}
            class="dropdown-item"
            href="#"
          >
            May
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("June");
            }}
            class="dropdown-item"
            href="#"
          >
            June
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("July");
            }}
            class="dropdown-item"
            href="#"
          >
            July
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("August");
            }}
            class="dropdown-item"
            href="#"
          >
            August
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("September");
            }}
            class="dropdown-item"
            href="#"
          >
            September
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("October");
            }}
            class="dropdown-item"
            href="#"
          >
            October
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("November");
            }}
            class="dropdown-item"
            href="#"
          >
            November
          </a>
          <a
            onClick={() => {
              filterBasedOnMonth("December");
            }}
            class="dropdown-item"
            href="#"
          >
            December
          </a>
        </div>
      </div>

      {/* dropdown for month ends */}

      {/* dropdown for year starts */}

      <div style={{ marginLeft: "100px" }} class="btn-group dropright">
        <button
          style={{ backgroundColor: "#5679C0" }}
          type="button"
          class="btn btn-secondary"
        >
          Select Year
        </button>
        <button
          style={{ backgroundColor: "#CCCCFF" }}
          type="button"
          class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle Dropright</span>
        </button>
        <div
          style={{ maxHeight: "140px" }}
          class="dropdown-menu pre-scrollable"
        >
          <a
            onClick={() => {
              filterBasedOnYear(2017);
            }}
            class="dropdown-item"
            href="#"
          >
            2017
          </a>
          <a
            onClick={() => {
              filterBasedOnYear(2018);
            }}
            class="dropdown-item"
            href="#"
          >
            2018
          </a>
          <a
            onClick={() => {
              filterBasedOnYear(2019);
            }}
            class="dropdown-item"
            href="#"
          >
            2019
          </a>
          <a
            onClick={() => {
              filterBasedOnYear(2020);
            }}
            class="dropdown-item"
            href="#"
          >
            2020
          </a>
          <a
            onClick={() => {
              filterBasedOnYear(2021);
            }}
            class="dropdown-item"
            href="#"
          >
            2021
          </a>
          <a
            onClick={() => {
              filterBasedOnYear(2022);
            }}
            class="dropdown-item"
            href="#"
          >
            2022
          </a>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      {/* dropdown for year ends */}

      {/* table starts */}

      <div className="d-flex flex-row-reverse">
        <button
          class="btnRemFil btnRemFil-warning btnRemFil-round-2 removeFilter"
          disabled={disabledBtn}
          onClick={() => {
            handleTransaction();
          }}
        >
          &#10060; {remFilterText}
        </button>
      </div>

      <div className="d-flex">
        <div className="p-2 w-100">
          <div class="container">
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
                {currentTransaction.map((items) => (
                  <tr className="table-row" key={items.transactionId}>
                    <td className="table-data">{items.transactionId}</td>
                    <td className="table-data">&#8377; &nbsp;{items.amount}</td>
                    <td className="table-data">{items.message}</td>

                    <td className='table-data'>{Moment (items.date).utc().format('DD-MM-YYYY')}</td> 
                    {/*<td className="table-data">{items.date}</td>*/}
                    <td className="table-data">{items.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* table ends */}

      <div className="pagination">
        {pageNumbers.map((pageNum, index) => (
          <span
            id="spanPagination"
            key={index}
            onClick={() => {
              setPage(pageNum);
            }}
          >
            {pageNum}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Transaction;

//end
