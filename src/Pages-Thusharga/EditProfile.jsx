import React from 'react'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'
import EditProfileComponent from '../Components-Thusharaga/EditProfile'

function EditProfile() {
  return (
   
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
     
        <EditProfileComponent/>
     
      </div>
      
    </div>

    )
}

export default EditProfile