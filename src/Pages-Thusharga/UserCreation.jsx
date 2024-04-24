import React from 'react'
import UserCreationForm from '../Components-Thusharaga/UserCreationForm'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'

function UserCreation() {
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

export default UserCreation