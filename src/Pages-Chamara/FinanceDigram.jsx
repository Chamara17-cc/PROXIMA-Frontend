import React from 'react'
import Sidebar from '../Compornents/Sidebar';
import '../Pages/PageStructure.css';
import Topbar from '../Compornents/Topbar';
import Piechart from '../Components-Chamara/Piechart';
import Barchart from '../Components-Chamara/Barchart';
import "./FinanceDigramStyle.css";

function FinanceDigram() {
  return (
    <div className='Financedigram'>
    <Sidebar/>
    <Topbar/>
    <div className="Content">
      <div className="digrams">
      <div className='Piechart'>
        <div className="Dname">
          <b>Budget Summary</b>
        </div>
      <Piechart/>
      </div>
      <div className="Barchart">
      <div className="Dname">
          <b>Income-Expence Summary</b>
        </div>
        <Barchart/>
      </div>
      </div>
    </div>
  </div>
  )
}

export default FinanceDigram