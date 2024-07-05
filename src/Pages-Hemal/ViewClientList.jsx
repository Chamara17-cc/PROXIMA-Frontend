

import ClientList from '../Components-Hemal/ClientList'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'


import React from 'react'

function ViewClientList() {
  return (
    <div className="FullPage">
      
    <Sidebar/>
    <Topbar/>
    
    <div className="Content">
   
      <ClientList/>
   
    </div>
    
  </div>
  )
}

export default ViewClientList