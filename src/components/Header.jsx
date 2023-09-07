import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <Fragment>
        <div className="header">
        <h1>Learn React Router</h1>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="faq">faq</Link>
            </li>
            <li>
              <Link to="contact">contact</Link>
            </li>
            <li>
              <Link to="user">user</Link>
            </li>            
        </ul>
    </div>
    </Fragment>
  )
}

export default Header