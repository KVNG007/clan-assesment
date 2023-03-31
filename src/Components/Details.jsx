import React from 'react'
import "../Styles/Details.scss"
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const Details = () => {
  return (
    <div className='Details'>
        <Outlet></Outlet>
    </div>
  )
}

export default Details