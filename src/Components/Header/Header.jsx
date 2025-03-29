import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = ({heading}) => {
  return (
    <div className='headerContainer'>
    <div className="header">
    <h1>{heading.charAt(0).toUpperCase() + heading.slice(1)}</h1>
    <p className='breadcrumb'><Link to={"/"}><span>Home</span></Link> &raquo; {heading.charAt(0).toUpperCase() + heading.slice(1)}</p>
      </div>
      </div>
  )
}

export default Header
