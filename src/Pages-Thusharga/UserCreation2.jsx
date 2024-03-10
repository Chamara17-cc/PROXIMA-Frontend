import React from 'react'
import UserCreationForm2 from '../Components-Thusharaga/UserCreationForm2'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'


function UserCreation() {
  return (
   
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
     
        <UserCreationForm2/>
     
      </div>
      
    </div>

    )
}

export default UserCreation