import React from 'react'
import './Header.css'


function Header() {
    return (
<div className="header">
  <dev><h1>Dashboard</h1></dev>
            
            <div className='header-right'>
            <a className='active' href='#'>Summary</a>
            <a className='active' href='#'>Financial Status</a>
            </div>
            
            </div>
    )
}

export default Header