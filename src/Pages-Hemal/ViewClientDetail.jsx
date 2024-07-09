import React from 'react'
import ClientDetailView from '../Components-Hemal/ClientDetailView'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'

function ViewClientDetail() {
  return (
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
       
      <ClientDetailView/>
     
      </div>
      
    </div>
      )
}

export default ViewClientDetail