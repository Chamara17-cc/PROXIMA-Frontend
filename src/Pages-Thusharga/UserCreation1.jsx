import React from 'react'
import UserCreationForm1 from '../Components-Thusharaga/UserCreationForm1'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'


function UserCreation1() {
  return (
   
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
     
        <UserCreationForm1/>
     
      </div>
      
    </div>

    )
}

export default UserCreation1