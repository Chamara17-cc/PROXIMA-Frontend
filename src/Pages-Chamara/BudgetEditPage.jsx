import React from 'react'
import BudgetFormEdit from '../Components-Chamara/BudgetFormEdit'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'

function BudgetEditPage() {
  return (
    <div><div className='Budgetedit'>
    <Sidebar/>
    <Topbar/>
    <div className="Content">
    <div className="editpage">
      <BudgetFormEdit/>
    </div>
    </div>
  </div></div>
  )
}

export default BudgetEditPage