import React from 'react'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'
import PasswordReset from '../Components-Thusharaga/PasswordReset'

function ResetPassword() {
  return (
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
       
        <PasswordReset/>
     
      </div>
      
    </div>

    
  )
}

export default ResetPassword