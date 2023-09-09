import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'



const UserEdit = () => {
  const { userId } = useParams()
  
  
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