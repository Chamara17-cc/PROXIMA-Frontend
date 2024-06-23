import React from 'react'
import '../Pages/PageStructure.css';
import Sidebar from '../Compornents/Sidebar';
import Topbar from '../Compornents/Topbar';
import Budgetreport from '../Components-Chamara/Budgetreport';



function Budgetplan() {
  return (
    <div className='Budgetplan'>
      <Sidebar/>
      <Topbar/>
      <div className="Content">
      <div className="reportcontent">
        <Budgetreport/>
      </div>
      </div>
    </div>
  )
}

export default Budgetplan