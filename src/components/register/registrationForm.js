import React, {useState} from 'react';
import './style.css';


function RegistrationForm() {

    return(

        // form
      <div className="form">
          <div className="form-body">

              <div className="username">
                  <label className="form__label" for="name"> Name </label>
                  <input className="form__input" type="text" id="name" placeholder="Name"/>
              </div>

              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>

              <div className="phone">
                  <label className="form__label" for="phoneNumber">Phone </label>
                  <input  type="number" id="phone" className="form__input" placeholder="Phone"/>
              </div>

              <div className="address">
                  <label className="form__label" for="address"> Address </label>
                  <input className="form__input" type="text" id="address" placeholder="Address"/>
              </div>

              <div className="dob">
                  <label className="form__label" for="dob"> Date of birth </label>
                  <input className="form__input" type="date" id="dob" placeholder="../../...."/>
              </div>

              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>

          </div>

{/* footer */}
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>


      </div>      

    ) 

}



export default RegistrationForm;

//ends