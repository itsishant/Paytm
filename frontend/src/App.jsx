import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";
import { Dashboard } from "../pages/Dashboard";
import { SendMoney } from "../pages/SendMoney";
import { Home } from "../pages/Home";
import { ErrorPage } from "../components/error";


const App = () => {

  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/send" element={<SendMoney />}/>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<ErrorPage />}/>
      </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App;