import React, {useState} from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function RegistrationForm(props) {
    let navigate = useNavigate();

    const [name, setName] = useState(null);
    const [emailid, setEmailId] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [dob, setDob] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "name"){
            setName(value);
        }
        if(id === "email"){
            setEmailId(value);
        }
        if(id === "phone"){
            setPhoneNumber(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "dob"){
            setDob(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleRegister  = () => {
        // console.log(name,emailid,phoneNumber,address,dob,password,confirmPassword);

        if(password === confirmPassword){
            //const [data, setData] = useState({ accHolderName: '', email: '', phone: '', address: '', date: '', password: ''})  

            const apiUrl = "https://localhost:44340/api/Register/Signup";

            const userData = { name:name, emailid:emailid, phoneNumber:phoneNumber, address:address, dob:dob, password:password };  

            axios.post(apiUrl, userData)  
                .then((result) => {  
                    
                    //console.log(result.data);  

                    if (result.data.status !== 'Success')  
                        alert('Invalid data. Try again!');  
                    else  
                        {
                            // transfer to home page and then login again
                            alert(result.data.message);
                            return navigate("/");
                        }
                })

        }
        else{
            //password mismatch in password and confirmPassword
            alert('Password mismatch');
        }
        

    }

    return(

        // form
      <div className="form">
          <div className="form-body">

              <div className="username">
                  <label className="form__label" for="name"> Name </label>
                  <input className="form__input" type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" placeholder="Name"/>
              </div>

              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input type="email" value={emailid} onChange = {(e) => handleInputChange(e)} id="email" className="form__input" placeholder="Email"/>
              </div>

              <div className="phone">
                  <label className="form__label" for="phoneNumber">Phone </label>
                  <input  type="number" value={phoneNumber} onChange = {(e) => handleInputChange(e)} id="phone" className="form__input" placeholder="Phone"/>
              </div>

              <div className="address">
                  <label className="form__label" for="address"> Address </label>
                  <input className="form__input" type="text" value={address} onChange = {(e) => handleInputChange(e)} id="address" placeholder="Address"/>
              </div>

              <div className="dob">
                  <label className="form__label" for="dob"> Date of birth </label>
                  <input className="form__input" type="date" value={dob} onChange = {(e) => handleInputChange(e)} id="dob" placeholder="../../...."/>
              </div>

              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Password"/>
              </div>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" placeholder="Confirm Password"/>
              </div>

          </div>

{/* footer */}
          <div class="footer">
              <button onClick={()=>handleRegister()} type="submit" class="btn">Register</button>
          </div>


      </div>      

    ) 

}



export default RegistrationForm;

//ends