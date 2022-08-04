import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/register/header";
import RegistrationForm from "./components/register/registrationForm";
import Home from "./components/home/home";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/loading";
import Dashboard from "./components/dashboard/dashboard";

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

        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
