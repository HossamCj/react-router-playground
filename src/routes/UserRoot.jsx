import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';



const UserRoot = () => {
    const userId = 1

    const navigate = useNavigate()

    const logoutHandler = () => {
      //API
      navigate('/', {replace: true})
    }
    
    
  
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

            <li style={
              {
                cursor: "pointer",
                backgroundColor: "orange",
                width: "100px",
                padding: "5px",
                color: "#333"
              }}
               onClick={ logoutHandler }
            >
              Logout
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