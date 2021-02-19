import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }
 
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className="WelcomePage">
        <div className="Welcome-text">
          <p>Welcome to Employee Hero. Please choose the appropriate link below to complete the registration.</p>
        </div>
        <br/>
        <div className="orgButtons">
          <button className="CancelButton btn">
            <Link className="CancelLink" to="/organizations/add">Add a New Organization</Link>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="CancelButton btn">
            <Link className="CancelLink" to="/organizations/register">Register to an Existing Organization</Link>
          </button>
        </div>
      </div>
    );
  }
};

export default WelcomePage;