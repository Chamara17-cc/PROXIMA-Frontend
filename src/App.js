import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminDashboard from "./Pages-Thusharga/AdminDashboard";
// import UserCreation from "./Pages-Thusharga/UserCreation";
// import UserList from "./Pages-Thusharga/UserList";
import ProjectCreation from "./Pages-Suraj/ProjectCreation";
import ProjectList from "./Pages-Suraj/ProjectList";
import TaskCreation from "./Pages-Suraj/TaskCreation";
// import ClientList from "./Pages-Hemal/ClientList";
// import Payments from "./Pages-Hemal/Payments";
// import Budgetplan from "./Pages-Chamara/Budgetplan";
// import Invoice from "./Pages-Chamara/Invoice";
// import SendEmail from "./Pages-Hemal/SendEmail";
import AdminProjectViewPage from "./Pages-Suraj/AdminPojectViewPage";
import AddDevelopersPage from "./Pages-Suraj/AddDevelopersPage";

import UserCreation1 from "./Pages-Thusharga/UserCreation1";
import UserCreation2 from "./Pages-Thusharga/UserCreation2";
import UserCreationSuccess from "./Pages-Thusharga/UserCreationSuccess";
import ViewUserList from "./Pages-Thusharga/ViewUserList";
import LoginForm from "./Pages-Thusharga/LoginForm";
import ResetPassword from "./Pages-Thusharga/ResetPassword";
import ForgotPassword from "./Pages-Thusharga/ForgotPassword";

function App() {
  return (
    <div className="main">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<AdminDashboard/>}></Route>
        <Route path="/usercreation1" element={<UserCreation1/>}></Route>
        <Route path="/usercreation2" element={<UserCreation2/>}></Route>
        <Route path="/usercreation2/success" element={<UserCreationSuccess/>}></Route>
        <Route path="/userlist" element ={<ViewUserList/>}></Route>
        <Route path="/projectcreation" element ={<ProjectCreation/>}></Route>
        <Route path="/projectlist" element ={<ProjectList/>}></Route>
        <Route path="/taskcreation" element ={<TaskCreation/>}></Route>
        {/* <Route path="/clientlist" element ={<ClientList/>}></Route>
        <Route path="/payments" element ={<Payments/>}></Route>
        <Route path="/sendemail" element ={<SendEmail/>}></Route>
        <Route path="/budget" element ={<Budgetplan/>}></Route>
        <Route path="/invoice" element ={<Invoice/>}></Route> */}
        <Route path="/AdminProjectViewPage" element={<AdminProjectViewPage/>}></Route>
        <Route path="/AddDevelopersPage" element={<AddDevelopersPage/>}></Route>
        <Route path="/AddDevelopersPage" element={<AddDevelopersPage/>}></Route>
        <Route path="/AdminProjectViewPage" element={<AdminProjectViewPage/>}></Route>

        <Route path="/loginform" element={<LoginForm/>}></Route>
        <Route path="/resetpassword" element={<ResetPassword/>}></Route> 
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route> 
          

        {/* <Route path="/budgetestform"  element={<BudgetEstimationForm/>}></Route> */}6
        
        

      </Routes>
        <Routes>
          
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
