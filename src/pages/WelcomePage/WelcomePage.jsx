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
        <div className="Welcome">
          <p>Welcome to Employee Hero. Please choose the appropriate link below to complete the registration.</p>
        </div>
        <div>
          <Link to="/organization-page">Add a New Organization</Link>      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to="/register-for-organization">Register to an Existing Organization</Link>
        </div>
      </div>
    );
  }
};

export default WelcomePage;