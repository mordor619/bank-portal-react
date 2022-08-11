import React from "react";
import NavbarLoggedIn from "../NavbarLoggedIn";
import './style.scss'

function Transaction() {
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
	
	<div class="table">
		<div class="table-header">
			<div class="header__item">Amount</div>
            <div class="header__item">Message</div>
            <div class="header__item">Date</div>
            <div class="header__item">Type</div>			
		</div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">100</div>
				<div class="table-data">swiggy</div>
				<div class="table-data">23/4/2021</div>
				<div class="table-data">Debit</div>
			</div>
			<div class="table-row">		
				<div class="table-data">2000</div>
				<div class="table-data">salary</div>
				<div class="table-data">1/5/2021</div>
				<div class="table-data">Credit</div>
			</div>
            <div class="table-row">		
				<div class="table-data">450</div>
				<div class="table-data">card</div>
				<div class="table-data">2/5/2021</div>
				<div class="table-data">Debit</div>
			</div>
            <div class="table-row">		
				<div class="table-data">900</div>
				<div class="table-data">atm</div>
				<div class="table-data">3/5/2021</div>
				<div class="table-data">Debit</div>
			</div>
            <div class="table-row">		
				<div class="table-data">627</div>
				<div class="table-data">refund</div>
				<div class="table-data">7/5/2021</div>
				<div class="table-data">Credit</div>
			</div>
		</div>	
	</div>
</div>

{/* table ends */}
    </div>
  );
}

export default Transaction;

//end
