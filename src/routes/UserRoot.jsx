import React from 'react'
import { Link, Outlet } from 'react-router-dom';



const UserRoot = () => {
    return (
      <div className="wrapper2">
        <div className="nav">
          <ul>
            
            <li>
              <Link to="info">User Info</Link>
            </li>
            <li>
              <Link to="edit">User Edit</Link>
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