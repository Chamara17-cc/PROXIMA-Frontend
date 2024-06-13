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


//newly added Pages 
import DashboardDeveloper from "./Pages-Baumika/DashboardDeveloper";
import ProjectDeveloper from "./Pages-Baumika/ProjectDeveloper";
import TaskDeveloper from "./Pages-Baumika/TaskDeveloper";
import ProgressDeveloper from "./Pages-Baumika/ProgressDeveloper";
import ProjectDescriptionDeveloper from "./Pages-Baumika/ProjectDescriptionDeveloper";
import TaskDescriptionDeveloper from "./Pages-Baumika/TaskDescriptionDeveloper";
import TaskRecord from "./Pages-Baumika/TaskRecord";
import ProjectReport from "./Pages-Baumika/ProjectReport";
import ProjectModuleReport from "./Pages-Baumika/ProjectModuleReport";


import BudgetEditPage from "./Pages-Chamara/BudgetEditPage";
import UserCreation from "./Pages-Thusharga/UserCreation";

import UserCreationSuccess from "./Pages-Thusharga/UserCreationSuccess";
import ViewUserList from "./Pages-Thusharga/ViewUserList";
import LoginForm from "./Pages-Thusharga/LoginForm";
import ResetPassword from "./Pages-Thusharga/ResetPassword";
//import ForgotPassword from "./Pages-Thusharga/ForgotPassword";
import TransactionPage from "./Pages-Chamara/TransactionPage";
import SecondLevelUserDashboard from "./Pages-Thusharga/SecondLevelUserDashboard";
import ViewUserDetail from "./Pages-Thusharga/ViewUserDetail";
import FinanceDigram from "./Pages-Chamara/FinanceDigram";
import TaskList from "./Pages-Suraj/TaskList";
import TaskDetailsPage from "./Pages-Suraj/TaskDetailsPage";
import ProjectManagerDashboard from "./Pages-Suraj/ProjectManagerDashboard";
import PMprojectListPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMprojectListPage";
import PMprojectDetailsPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMprojectDetailsPage";
import PMtaskCreationPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMtaskCreationPage";
import PMtaskListPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMtaskListPage";
import PMaddDevelopersPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMaddDevelopersPage";
import PMtaskDetailsPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMtaskDetailsPage";

function App() {
  return (
    <div className="main">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<AdminDashboard/>}></Route>
        <Route path="/managerDashboard" element= {<SecondLevelUserDashboard/>}></Route>
        <Route path="/usercreation" element={<UserCreation/>}></Route>
        
        <Route path="/usercreationsuccess" element={<UserCreationSuccess/>}></Route>
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

         <Route path="/loginform" element={<LoginForm/>}></Route>
         <Route path="/resetpassword" element={<ResetPassword/>}></Route>         
         <Route path="/userprofilepage/:userId" element={<ViewUserDetail/>}></Route>

        {/* <Route path="/budgetestform"  element={<BudgetEstimationForm/>}></Route> */}


       {/* newly added routes  */}
        <Route path="/DeveloperDashboard" element={<DashboardDeveloper/>}></Route>
        <Route path="/DeveloperProject" element={<ProjectDeveloper/>}></Route>
        <Route path="/DeveloperTask" element={<TaskDeveloper/>}></Route>
        <Route path="/DeveloperProgress" element={<ProgressDeveloper/>}></Route>
        <Route path="/ProjectDescriptionDeveloper" element={<ProjectDescriptionDeveloper/>}></Route>
        <Route path="/TaskDescriptionDeveloper" element={<TaskDescriptionDeveloper/>}></Route>
        <Route path="/TaskRecord" element={<TaskRecord/>}></Route>
        <Route path="/ProjectReport" element={<ProjectReport/>}></Route>
        <Route path="/ProjectModuleReport" element={<ProjectModuleReport/>}></Route>
        
<Route path="/findig" element={<FinanceDigram/>}></Route>

        <Route path="/TaskList" element={<TaskList/>}></Route>
        <Route path="/TaskDetailsPage" element={<TaskDetailsPage/>}></Route>    
        
        {/* project manager dashboard */}
        <Route path="/ProjectManagerDashboard" element={<ProjectManagerDashboard/>}></Route>
        <Route path="/PMprojectListPage" element={<PMprojectListPage/>}></Route>
        <Route path="/PMprojectDetailsPage" element={<PMprojectDetailsPage/>}></Route>
        <Route path="/PMtaskCreationPage" element={<PMtaskCreationPage/>}></Route>
        <Route path="/PMtaskListPage" element= {<PMtaskListPage />}></Route>
        <Route path="/PMaddDevelopersPage" element = {<PMaddDevelopersPage />}></Route>
        <Route path="PMtaskDetailsPage" element = {<PMtaskDetailsPage />}></Route>

      </Routes>
        <Routes>
          
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
