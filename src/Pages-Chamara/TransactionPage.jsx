import React from 'react'
import Sidebar from '../Compornents/Sidebar';
import Topbar from '../Compornents/Topbar';
import Transaction from '../Components-Chamara/Transaction';

function TransactionPage() {
  return (
    <div className='Transaction'>
      <Sidebar/>
      <Topbar/>
      <div className="Content">
      <div className="reportcontent">
       <Transaction/>
      </div>
      </div>
    </div>
  )
}

export default TransactionPage