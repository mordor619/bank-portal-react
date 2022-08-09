import React, {useState} from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'


function RegistrationForm(props) {
    let navigate = useNavigate();

    const [name, setName] = useState(null);
    const [emailid, setEmailId] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [address, setAddress] = useState(null);
    const [dob, setDob] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const{register,formState:{errors},handleSubmit,}=useForm();
    const onSubmit=(data)=>handleRegister(data);

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

    const handleRegister  = (data) => {

        // console.log(name,emailid,phoneNumber,address,dob,password,confirmPassword);

        if(password === confirmPassword){
            //const [data, setData] = useState({ accHolderName: '', email: '', phone: '', address: '', date: '', password: ''})  

            const apiUrl = "https://localhost:44340/api/Register/Signup";

            // const userData = { name:name, emailid:emailid, phoneNumber:phoneNumber, address:address, dob:dob, password:password };  

            axios.post(apiUrl, data)  
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
        <form onSubmit={handleSubmit(onSubmit)} method='post'> 
          <div className="form-body">

              <div className="username">
                  <label className="form__label" for="name"> Name </label>
                  <input className="form__input" type="text" value={name} onChange = {(e) => handleInputChange(e)} id="name" placeholder="Name"
                  {...register("name", { required: true })}/>
                  
              </div>
              <error>
            {errors.name?.type === "required" && "Name is required"}
          </error>

              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input type="email" value={emailid} onChange = {(e) => handleInputChange(e)} id="email" className="form__input" placeholder="Email"
                  {...register("emailid", {
                    required: true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}/>
                  
              </div>
              <error>
            {errors.emailid?.type === "required" && "Email is required"}
            {errors.emailid?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>

              <div className="phone">
                  <label className="form__label" for="phoneNumber">Phone </label>
                  <input  type="number" value={phoneNumber} onChange = {(e) => handleInputChange(e)} id="phone" className="form__input" placeholder="Phone"
                  {...register("phoneNumber", {
                    required:true,
                    minLength: 6,
                    maxLength: 12,
                  })}/>
                  
              </div>
              <error>
                  {errors.phoneNumber?.type === "required" && "Phone Number is required"}
            {errors.phoneNumber?.type === "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.phoneNumber?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
          </error>

              <div className="address">
                  <label className="form__label" for="address"> Address </label>
                  <input className="form__input" type="text" value={address} onChange = {(e) => handleInputChange(e)} id="address" placeholder="Address"
                  {...register("address", { required: true })}/>
                  
              </div>
              <error>
            {errors.address?.type === "required" && "Address is required"}
          </error>

              <div className="dob">
                  <label className="form__label" for="dob"> Date of birth </label>
                  <input className="form__input" type="date" value={dob} onChange = {(e) => handleInputChange(e)} id="dob" placeholder="../../...."
                  {...register("dob", { required: true })}/>
                  
              </div>
              <error>
            {errors.dob?.type === "required" && "DOB is required"}
          </error>

              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}/>
                  
              </div>
              <error>
                  {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </error>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}/>
                  
              </div>
              <div>
              <error>
                  {errors.confirmPassword?.type === "required" && "Confirm Password is required"}
            {errors.ConfirmPassword?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.ConfirmPassword?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
              </error></div>

          </div>

{/* footer */}
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>

</form>
      </div>      

    ) 

}



export default RegistrationForm;

//ends