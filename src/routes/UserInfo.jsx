import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'



const UserIfno = () => {
    console.log('UserInfo Logged In')
  return (
    <Fragment>
        <h2>UserIfno</h2>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    </Fragment>
  )
}

export default UserIfno