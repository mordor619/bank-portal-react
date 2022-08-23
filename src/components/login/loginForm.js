import React, {useState} from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import Transaction from '../transaction/transaction';


function LoginForm(props){
    let navigate = useNavigate();

    const [accountNumber,setAccountNumber] = useState(null);
    const [password,setPassword] = useState(null);

    const{register,formState:{errors},handleSubmit,}=useForm();
    const onSubmit=(data)=>handleLogin(data);

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "accno"){
            setAccountNumber(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    const handleLogin  = (data) => {

        // console.log(accountNumber,password);

        
            //const [data, setData] = useState({ accHolderName: '', email: '', phone: '', address: '', date: '', password: ''})  

            //https://localhost:44340/api/Login/Signin?AccountNumber=3266313510&Password=Kalai%40123
            const apiUrl = "https://localhost:44340/api/Login/Signin?AccountNumber="+data.accountNumber+"&Password="+data.password;

            // const userData = { accountNumber:accountNumber,password:password };  

            axios.get(apiUrl)  
                .then((result) => {  
                    
                    //console.log(result.data);  

                    if (result.data.status === 200)  {
                        // transfer to dashboard page
                        localStorage.setItem('isLoggedIn', true);
                        localStorage.setItem('userAccountNumber', data.accountNumber);

                        alert(result.data.message);

                        return navigate("/dashboard");
                    }
                    else 
                    {
                        
                        alert(result.data.message);
                        return navigate("/login");
                    }
                }
                )


    }

    return(
        
        //  <Transaction accountNumber={props.accountNumber}/>
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)} method='get'> 
          <div className="form-body">

            <div className="accno">
            <label className="form__label" for="name"> Account Number </label>
                  <input className="form__input" type="text" value={accountNumber} onChange = {(e) => handleInputChange(e)} id="accno" placeholder="Account Number"
                  {...register("accountNumber", { required: true })}/>
                  
              </div>
              <div>
              <error>
            {errors.accountNumber?.type === "required" && "Accouint Number is required"}
          </error>
          </div>
          <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
                  })}/>
                  
              </div>
              <div>
              <error>
                  {errors.password?.type === "required" && "Password is required"}
                  {errors.password?.type === "pattern" &&
              "Entered password is in wrong format"}
            {errors.password?.type === "minLength" &&
              "Entered password is less than 8 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </error>
          </div>
          </div>

            {/* footer */}
          <div class="footer">
              <button type="submit" class="btn">Login</button>
          </div>

    </form>
        </div>
    );
    }

export default LoginForm;
