import React from 'react'
import UserDetailView from '../Components-Hemal/ClientCreationForm'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'

function ViewClientDetail() {
  return (
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
       
      <UserDetailView/>
     
      </div>
      
    </div>
      )
}

export default ViewClientDetail