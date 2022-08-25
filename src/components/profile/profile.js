import React, { useState, useEffect } from 'react';
import NavbarLoggedIn from '../NavbarLoggedIn';
import "./style.css";
import axios from 'axios';

function Profile() {

    const [accountNumber, setAccountNumber] = useState(101)
    const [name, setName] = useState('Generic name')
    const [email, setEmail] = useState('abc@xyz.com')
    const [address, setAddress] = useState('india')
    const [contact, setContact] = useState('1234567890')
    const [balance, setBalance] = useState(2000)

    const handleProfilePageData  = () => {

        setAccountNumber(localStorage.getItem('userAccountNumber'))
        const apiUrl = "https://localhost:44340/api/Profile/getDetailsByAccountNo?accno=" + accountNumber;

        axios
          .get(apiUrl)
          .then((res) => {

            setName(res.data.name)
            setEmail(res.data.emailid)
            setAddress(res.data.address)
            setContact(res.data.phoneNumber)

          })
    }

    useEffect(() => {
        handleProfilePageData()
      })

    return (
        <div>
            <NavbarLoggedIn />

            <br></br>
            <br></br>

            <div className="container mt-4" style={{ marginBottom: "20px", color: "white", border: "4px solid white", borderRadius: "10px" }}>
                <div className="jumbotron" style={{ marginTop: "30px", width: "1000px" }}>
                    <div className="gridpf">
                        <div className="c1">
                            <img src="profileusericon.jpg" alt="" className="image" />
                        </div>
                        <div className="c2">
                            <br></br>
                            <h2 className="display-4">{name}</h2>
                            <br></br>

                            <p>Account Number: {accountNumber}</p>
                            Balance: <p style={{color: "green", fontSize: "30px", fontWeight: "bold"}}>&#8377; {balance}</p>
                            {/* <p>Fixed Deposit: {fd}</p> */}
                            
                           
                        </div>
                    </div>
                    <hr className="my-4" />
                    <br></br>
                    <div className="profile-info">
                        <p>Address : {address}</p>
                        
                        <p>Contact Number : {contact} </p>
                        
                        <p>Email : {email}</p>
                        
                        <br></br>
                        <br></br>

                        <p className="lead">
                            <a className="btn btn-primary btn-lg mb-2" href="#" role="button">
                                Give Feedback
                            </a>
                        </p>
                    </div>

                </div>
            </div>
            
        </div>

    );

}


export default Profile;

//end