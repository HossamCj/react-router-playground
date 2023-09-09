import React from 'react'
import { Link, Outlet } from 'react-router-dom';



const UserRoot = () => {
    const userId = 1
  
    return (
      <div className="wrapper2">
        <div className="nav">
          <ul>
            
            <li>
              <Link to={`${userId}/info`}>User Info</Link>
            </li>
            <li>
              <Link to={`${userId}/edit`}>User Edit</Link>
            </li>
            
            <li>
                <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  };


export default UserRoot