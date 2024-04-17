import React from 'react'
import UserCreationSuccessComponent from '../Components-Thusharaga/UserCreationSuccessComponent'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'


function UserCreationSuccess() {
  return (
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
        <UserCreationSuccessComponent/>
      </div>
      
    </div>

  )
}

export default UserCreationSuccess