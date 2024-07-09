import UserList from '../Components-Thusharaga/UserManagement'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'


import React from 'react'

function UserManagement() {
  return (
    <div className="FullPage">
      
    <Sidebar/>
    <Topbar/>
    
    <div className="Content">
      
      <UserList/>
   
    </div>
    
  </div>
  )
}

export default UserManagement