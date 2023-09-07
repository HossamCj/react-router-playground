import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'




const Header = () => {
  return (
    <Fragment>
        <div className="header">
        <h1>Learn React Router</h1>
        <ul>
            <li>
                <NavLink to="/" end >home</NavLink>
            </li>
            <li>
                <NavLink to="faq">faq</NavLink>
            </li>
            <li>
              <NavLink to="contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="user">user</NavLink>
            </li>            
        </ul>
    </div>
    </Fragment>
  )
}

export default Header