import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";


const App = () => {

  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/signin" element={} />
        <Route path="/dashboard" element={} />
        <Route path="/send" element={} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;