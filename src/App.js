import "./App.css";
import Header from "./components/register/header";
import RegistrationForm from "./components/register/registrationForm";
import Home from "./components/home/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;
