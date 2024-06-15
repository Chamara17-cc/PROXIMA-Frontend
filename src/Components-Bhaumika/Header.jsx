import React from 'react'
import './Header.css'
import DeveloperPayment from '../Pages-Chamara/DeveloperPayment'


function Header() {
    return (
<div className="header">
  <dev><h1>Dashboard</h1></dev>
            
            <div className='header-right'>
            
            </div>
            <div className="developerpayment">
               <DeveloperPayment/>  
                 </div> 
            
            </div>
    )
}

export default Header