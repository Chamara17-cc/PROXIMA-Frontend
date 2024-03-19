import React from 'react'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'
import { Button } from '@mui/material'
import RateUpdatePage from "../Pages-Chamara/RateUpdatePage";

function DashboardAdmin() {
  return (
    
    <div>
      <Sidebar/>
      <Topbar/>
      <div className="Content">
      <RateUpdatePage/>{/*button to update developer rate*/}
        </div>
    </div>
  )
}

export default DashboardAdmin