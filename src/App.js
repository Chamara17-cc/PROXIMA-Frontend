import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardAdmin from "./Pages-Thusharga/DashboardAdmin";
import UserCreation from "./Pages-Thusharga/UserCreation";
import UserList from "./Pages-Thusharga/UserList";
import ProjectCreation from "./Pages-Suraj/ProjectCreation";
import ProjectList from "./Pages-Suraj/ProjectList";
import TaskCreation from "./Pages-Suraj/TaskCreation";
import ClientList from "./Pages-Hemal/ClientList";
import Payments from "./Pages-Hemal/Payments";
import Budgetplan from "./Pages-Chamara/Budgetplan";
import Invoice from "./Pages-Chamara/Invoice";
import SendEmail from "./Pages-Hemal/SendEmail";



function App() {
  return (
    <div className="main">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<DashboardAdmin/>}></Route>
        <Route path="/usercreation" element={<UserCreation/>}></Route>
        <Route path="/userlist" element ={<UserList/>}></Route>
        <Route path="/projectcreation" element ={<ProjectCreation/>}></Route>
        <Route path="/projectlist" element ={<ProjectList/>}></Route>
        <Route path="/taskcreation" element ={<TaskCreation/>}></Route>
        <Route path="/clientlist" element ={<ClientList/>}></Route>
        <Route path="/payments" element ={<Payments/>}></Route>
        <Route path="/sendemail" element ={<SendEmail/>}></Route>
        <Route path="/budget" element ={<Budgetplan/>}></Route>
        <Route path="/invoice" element ={<Invoice/>}></Route>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
