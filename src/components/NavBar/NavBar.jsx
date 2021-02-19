import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

        // {props.user._id} == props.organization.admin_employee ?
        // <div>
        // <Link to='/organization/questions' className='NavBar-link' onClick={props.handleLogout}>Organization Questions</Link>
        // </div>
        // :
        // <div></div> 
    if (props.user) {
      return (
        <div>
          <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='/organization/employee-list' className='NavBar-link'>{props.organization.name}</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='/user/profile' className='NavBar-link'>Profile</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
        </div>
      )
    }
  return (
    <div className='NavBar'>
         <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    </div>

    </div>
  );
};

export default NavBar;