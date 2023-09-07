import React, { Fragment } from 'react'




const Header = () => {
  return (
    <Fragment>
        <div className="header">
        <h1>Learn React Router</h1>
        <ul>
            <li>
                <a href="http://">home</a>
            </li>
            <li>
                <a href="http://">faq</a>
            </li>

            <a href="http://">contact</a>
        </ul>
    </div>
    </Fragment>
  )
}

export default Header