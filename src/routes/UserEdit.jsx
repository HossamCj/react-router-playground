import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'



const UserEdit = () => {
  return (
    <Fragment>
        <h2>UserEdit</h2>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    </Fragment>
  )
}

export default UserEdit