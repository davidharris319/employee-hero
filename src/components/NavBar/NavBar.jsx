import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

        // {props.user._id} == props.organization.admin_employee ?
 
        // :
        // <div></div> 
    
      if (props.user && props.organization && props.user._id == props.organization.admin_employee) {
          return (
            <div className='NavBar'>
              <div>
                <Link to='/organization/questions' className='NavBar-link' >Organization Questions</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              </div>
              <Link to='/organization/employee-list' className='NavBar-link'>{props.organization.name}</Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to='/user/profile' className='NavBar-link'>Profile</Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <span className='NavBar-welcome'>Welcome, {props.user.name}</span>

            </div>
          )
        } 
        if (props.user && props.organization) {
      return (
        <div className='NavBar'>
          <Link to='/organization/employee-list' className='NavBar-link'>{props.organization.name}</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='/user/profile' className='NavBar-link'>Profile</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
        </div>
      )
    } else if (props.user) {
      return (
        <div className='NavBar'>
          <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
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