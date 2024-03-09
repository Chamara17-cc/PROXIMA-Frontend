import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginForm from "./Pages-Thusharga/LoginForm";
import UserCreation1 from "./Pages-Thusharga/UserCreation1";
import UserCreation2 from "./Pages-Thusharga/UserCreation2";



function App() {
  return (
    <div className="main">
      
      <BrowserRouter>
        <Routes>
          <Route path="/loginForm" element={<LoginForm/>}></Route>
          <Route path="/userCreation" element={<UserCreation1/>}></Route>
          <Route path="/userCreation/2" element={<UserCreation2/>}></Route>
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
