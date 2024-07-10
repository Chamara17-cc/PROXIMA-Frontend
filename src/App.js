import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoute from './Auth/ProtectedRoute';
import { AuthProvider } from './Auth/AuthContext';
import AdminDashboard from "./Pages-Thusharga/AdminDashboard";
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
import TeamDescriptionDeveloper from "./Pages-Baumika/TeamDescriptionDeveloper";
import ProjectFileViewPage from "./Pages-Baumika/ProjectFileViewPage";


import BudgetEditPage from "./Pages-Chamara/BudgetEditPage";
import UserManagement from "./Pages-Thusharga/UserManagement";
import UserCreation from "./Pages-Thusharga/UserCreation";
import ViewUserList from "./Pages-Thusharga/ViewUserList";
import LoginForm from "./Pages-Thusharga/LoginForm";
import ResetPassword from "./Pages-Thusharga/ResetPassword";
import ForgotPassword from "./Pages-Thusharga/ForgotPassword";
import TransactionPage from "./Pages-Chamara/TransactionPage";
import ViewUserDetail from "./Pages-Thusharga/ViewUserDetail";

import TaskList from "./Pages-Suraj/TaskList";
import TaskDetailsPage from "./Pages-Suraj/TaskDetailsPage";
import ProjectManagerDashboard from "./Pages-Suraj/ProjectManagerDashboard";
import PMprojectListPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMprojectListPage";
import PMprojectDetailsPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMprojectDetailsPage";
import PMtaskCreationPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMtaskCreationPage";
import PMtaskListPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMtaskListPage";
import PMaddDevelopersPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMaddDevelopersPage";
import PMtaskDetailsPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMtaskDetailsPage";
import FinanceDigram from "./Pages-Chamara/FinanceDigram";
import Payment from "./Pages-Chamara/Payment";

import ClientCreation from "./Pages-Hemal/ClientCreation";
import ViewClientDetail from "./Pages-Hemal/ViewClientDetail";
import ViewClientList from "./Pages-Hemal/ViewClientList";

import FullTaskListPage from "./Pages-Suraj/FullTaskListPage";
import PMFullTaskViewPage from "./Pages-Suraj/Pages-ProjectManager-Suraj/PMFullTaskViewPage";

import UpdateProjectPage from "./Pages-Suraj/UpdateProjectPage";
import UpdateTaskPage from "./Pages-Suraj/UpdateTaskPage";

import EditProfile from "./Pages-Thusharga/EditProfile";






function App() {
  return (
    <div className="main">
       <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path="/resetpassword" element={<ResetPassword/>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/editProfile/:userId" element={<EditProfile />} />

        <Route element={<ProtectedRoute allowedRoles={['1']} />}>
              <Route path="/adminDashboard" element={<AdminDashboard />} />
              <Route path="/usercreation" element={<UserCreation/>}></Route>
              <Route path="/budget" element ={<Budgetplan/>}></Route>
              <Route path="/transaction" element ={<TransactionPage/>}></Route>
             


              <Route path="/clientCreation" element={<ClientCreation/>}></Route>
              <Route path="/clientList" element={<ViewClientList/>}></Route>
              <Route path="/clientProfilePage/:clientId" element={<ViewClientDetail/>}></Route>

              <Route path="/userManagement" element={<UserManagement/>} />
              <Route path="/userProfilePage/:userId" element={<ViewUserDetail />} />

              
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['1', '2']} />}>
              <Route path="/userList" element={<ViewUserList />} />             
              <Route path="/financedigram" element={<FinanceDigram/>}></Route>
              <Route path="/taskList" element={<TaskList/>}></Route>
              <Route path="/taskDetailsPage" element={<TaskDetailsPage/>}></Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['2']} />}>
              <Route path="/ProjectManagerDashboard" element={<ProjectManagerDashboard/>}></Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['3']} />}>
              <Route path="/DeveloperDashboard" element={<DashboardDeveloper/>}></Route>
              <Route path="/DeveloperPayment" element={<Payment/>}></Route>
        </Route>
        
    
        <Route path="/projectcreation" element ={<ProjectCreation/>}></Route>
        <Route path="/projectlist" element ={<ProjectList/>}></Route>
        <Route path="/taskcreation" element ={<TaskCreation/>}></Route>
        {/* <Route path="/clientlist" element ={<ClientList/>}></Route>
        <Route path="/payments" element ={<Payments/>}></Route>
        <Route path="/sendemail" element ={<SendEmail/>}></Route>*/}
 
 
        <Route path="/AdminProjectViewPage" element={<AdminProjectViewPage/>}></Route>
        <Route path="/AddDevelopersPage" element={<AddDevelopersPage/>}></Route>
        <Route path="/AddDevelopersPage" element={<AddDevelopersPage/>}></Route>
        <Route path="/AdminProjectViewPage" element={<AdminProjectViewPage/>}></Route>
 

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
        <Route path="/TeamDescriptionDeveloper" element={<TeamDescriptionDeveloper/>}></Route>
        <Route path="/ProjectFileViewPage" element={<ProjectFileViewPage/>}></Route>
        

        <Route path="/PMprojectListPage" element={<PMprojectListPage/>}></Route>
        <Route path="/PMprojectDetailsPage" element={<PMprojectDetailsPage/>}></Route>
        <Route path="/PMtaskCreationPage" element={<PMtaskCreationPage/>}></Route>
        <Route path="/PMtaskListPage" element= {<PMtaskListPage />}></Route>
        <Route path="/PMaddDevelopersPage" element = {<PMaddDevelopersPage />}></Route>
        <Route path="PMtaskDetailsPage" element = {<PMtaskDetailsPage />}></Route>

        <Route path="/taskList" element={<TaskList/>}></Route>
        <Route path="/fullTaskListPage" element = {<FullTaskListPage/>}></Route>
        <Route path="/pMFullTaskListPage" element = {<PMFullTaskViewPage/>}></Route>

          <Route path="/updateProjectPage" element={<UpdateProjectPage/>}></Route>
          <Route path="/updateTaskPage" element={<UpdateTaskPage/>}></Route>
          <Route path="/budgetcreation" element={<BudgetEditPage/>}></Route>

      </Routes>
        <Routes>         
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
