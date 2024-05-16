import React from 'react'
import UserDetailView from '../Components-Thusharaga/UserDetailView'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'

function ViewUserDetail() {
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

export default ViewUserDetail