import React from 'react'
import Sidebar from '../Compornents/Sidebar';
import '../Pages/PageStructure.css';
import Topbar from '../Compornents/Topbar';
import Piechart from '../Components-Chamara/Piechart';
import Barchart from '../Components-Chamara/Barchart';
import "./FinanceDigramStyle.css";
import { useLocation } from 'react-router-dom';

function FinanceDigram() {
  const location=useLocation();
  const projectId= location.state.projectId;

  return (
    <div className='Financedigram'>
    <Sidebar/>
    <Topbar/>
    <div className="Content">
      <div className="title">
      <b>Finance Summary</b>
      </div>
      <div className="digrams">
      <div className='Piechart'>
        <div className="Dname">
          <b>Budget Summary</b>
        </div>
      <Piechart projectid={projectId}/>
      </div>
      <div className="Barchart">
      <div className="Dname">
          <b>Income-Expence Summary</b>
        </div>
        <Barchart projectid={projectId}/>
      </div>
      </div>
    </div>
  </div>
  )
}

export default FinanceDigram