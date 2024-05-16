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
 import Budgetplan from "./Pages-Chamara/Budgetplan";
// import SendEmail from "./Pages-Hemal/SendEmail";
import AdminProjectViewPage from "./Pages-Suraj/AdminPojectViewPage";
import AddDevelopersPage from "./Pages-Suraj/AddDevelopersPage";
// import BudgetEstimationForm from "./Pages-Chamara/BudgetEstimationForm";
// import LoginForm from "./Pages-Thusharga/LoginForm";
import Usercreation1 from "./Pages-Thusharga/UserCreation1";
import Usercreation2 from "./Pages-Thusharga/UserCreation2";
//newly added Pages 
import DashboardDeveloper from "./Pages-Baumika/DashboardDeveloper";
import ProjectDeveloper from "./Pages-Baumika/ProjectDeveloper";
import TaskDeveloper from "./Pages-Baumika/TaskDeveloper";
import ProgressDeveloper from "./Pages-Baumika/ProgressDeveloper";
import ProjectDescriptionDeveloper from "./Pages-Baumika/ProjectDescriptionDeveloper";
import TaskDescriptionDeveloper from "./Pages-Baumika/TaskDescriptionDeveloper";
import TaskRecord from "./Pages-Baumika/TaskRecord";
import BudgetEditPage from "./Pages-Chamara/BudgetEditPage";
import UserCreation1 from "./Pages-Thusharga/UserCreation1";
import UserCreation2 from "./Pages-Thusharga/UserCreation2";
import UserCreationSuccess from "./Pages-Thusharga/UserCreationSuccess";
import ViewUserList from "./Pages-Thusharga/ViewUserList";
import LoginForm from "./Pages-Thusharga/LoginForm";
import ResetPassword from "./Pages-Thusharga/ResetPassword";
import ForgotPassword from "./Pages-Thusharga/ForgotPassword";
import TransactionPage from "./Pages-Chamara/TransactionPage";
import TaskList from "./Pages-Suraj/TaskList";
import TaskDetailsPage from "./Pages-Suraj/TaskDetailsPage";

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
        <Route path="/sendemail" element ={<SendEmail/>}></Route>*/}
        <Route path="/transaction" element ={<TransactionPage/>}></Route>
        <Route path="/budget" element ={<Budgetplan/>}></Route>
        <Route path="/AdminProjectViewPage" element={<AdminProjectViewPage/>}></Route>
        <Route path="/AddDevelopersPage" element={<AddDevelopersPage/>}></Route>
        <Route path="/AddDevelopersPage" element={<AddDevelopersPage/>}></Route>
        <Route path="/AdminProjectViewPage" element={<AdminProjectViewPage/>}></Route>
        <Route path="/budgetformedit" element={<BudgetEditPage/>}></Route>

         {/*<Route path="/loginForm" element={<LoginForm/>}></Route>*/}
          <Route path="/userCreation" element={<UserCreation1/>}></Route>
          <Route path="/userCreation/2" element={<UserCreation2/>}></Route> 

        {/* <Route path="/budgetestform"  element={<BudgetEstimationForm/>}></Route> */}


       {/* newly added routes  */}
        <Route path="/DeveloperDashboard" element={<DashboardDeveloper/>}></Route>
        <Route path="/DeveloperProject" element={<ProjectDeveloper/>}></Route>
        <Route path="/DeveloperTask" element={<TaskDeveloper/>}></Route>
        <Route path="/DeveloperProgress" element={<ProgressDeveloper/>}></Route>
        <Route path="/ProjectDescriptionDeveloper" element={<ProjectDescriptionDeveloper/>}></Route>
        <Route path="/TaskDescriptionDeveloper" element={<TaskDescriptionDeveloper/>}></Route>
        <Route path="/TaskRecord" element={<TaskRecord/>}></Route>


        <Route path="/TaskList" element={<TaskList/>}></Route>
        <Route path="/TaskDetailsPage" element={<TaskDetailsPage/>}></Route>    
        
        

      </Routes>
        <Routes>
          
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
