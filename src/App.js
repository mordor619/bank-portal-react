import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/register/header";
import RegistrationForm from "./components/register/registrationForm";
import LoginForm from "./components/login/loginForm";
import Header1 from "./components/login/loginheader";
import Home from "./components/home/home";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/loading";
import Dashboard from "./components/dashboard/dashboard";
import Transaction from "./components/transaction/transaction";
import Logout from "./components/logout/logout";
import Profile from "./components/profile/profile";
import Transfer from "./components/transfer/transfer";
import FixedDeposit from "./components/fixed-deposit/fixeddeposit";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000); //loading for 4 seconds
  }, []);

  return (
    <div className="App">
      {loading ? (                         //while loading show loading component else go to home page
        <Loading />
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            path="/register"
            
            element={
              <>
                <Header />
                <RegistrationForm />
                
              </>
            }
          />
          <Route
            path="/login"
            
            element={
              <>
                <Header1 />
                <LoginForm />
              </>
            }
          />
          
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/transaction" element={<Transaction />} />

          <Route path="/logout" element={<Logout />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/transfer" element={<Transfer />} />

          <Route path="/fixeddeposit" element={<FixedDeposit />} />
        
        </Routes>
      )}
    </div>
  );
}

export default App;
