import React from 'react'
import "./Topbarstyle.css";
import SearchBar from './Searchbar';





export default function Topbar() {
  return (
    <div className="topbar">
        <span className='appname'><b>PROXIMA</b></span>
        <span className='topbaritems'>
        <span className='searchbar'><SearchBar/></span>              {/*Styles add added in Topbarstyle*/}
        <span className='notification'><a href="//"><i class="bi bi-bell-fill"></i></a></span>  {/*Enter link for notiication*/}
        <span className='settings'><a href="//"><i class="bi bi-gear"></i></a></span>{/*Enter link for settings*/}
        </span>
        
    </div>
  )
}
