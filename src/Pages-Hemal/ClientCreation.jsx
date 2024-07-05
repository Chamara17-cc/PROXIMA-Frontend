import React from 'react'
import UserCreationForm from '../Components-Hemal/ClientCreationForm'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'

function ClientCreation() {
  return (
   
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
     
        <UserCreationForm/>
     
      </div>
      
    </div>

    )
}

export default ClientCreation
