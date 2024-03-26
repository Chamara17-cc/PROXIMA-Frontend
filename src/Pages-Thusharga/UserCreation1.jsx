import React from 'react'
import UsercreationForm1 from '../Components-Thusharaga/UsercreationForm1'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'


function UserCreation1() {
  return (
   
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
     
        <UsercreationForm1/>
     
      </div>
      
    </div>

    )
}

export default UserCreation1